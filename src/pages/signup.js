import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { translate } from "../helpers/translate";
import ReCAPTCHA from "react-google-recaptcha";
import Spinner from "react-spinner-material";

const Signup = () => {
  const history = useHistory();
  const { signup, sendVerificationEmail, signupWithTwitter, db } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [robot, setRobot] = useState(true);
  const [loading, setLoading] = useState(false);
  const [wrongUsername, setWrongUsername] = useState(false);
  const [usernameLoading, setUsernameLoading] = useState(false);
  const isInvalid =
    firstName === "" ||
    password === "" ||
    emailAddress === "" ||
    robot ||
    wrongUsername;

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    signup(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            displayName: firstName,
          })
          .then(() => {
            sendVerificationEmail();
          })
          .then(() => {
            setLoading(false);
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => {
        if (
          translate(error.message) === "Hasło musi zawierać minimum 6 znaków."
        ) {
          setPassword("");
        } else if (
          translate(error.message) === "Błędny adres e-mail." ||
          "Ten e-mail już jest przypisany do konta."
        ) {
          setEmailAddress("");
          setPassword("");
        } else {
          setEmailAddress("");
          setFirstName("");
          setPassword("");
        }
        setLoading(false);
        setError(translate(error.message));
      });
  }

  function handleTwitterRegistration(event) {
    setLoading(true);
    event.preventDefault();
    signupWithTwitter()
      .then((result) => {
        localStorage.setItem(
          "twitterUsername",
          JSON.stringify(result.additionalUserInfo.username)
        );
        localStorage.setItem(
          "twitterProfileImage",
          JSON.stringify(result.additionalUserInfo.profile.profile_image_url)
        );
      })
      .then(() => {
        setLoading(false);
        history.push(ROUTES.VERIFICATION);
      })
      .catch((error) => {
        setLoading(false);
        setError(translate(error.message));
      });
  }

  async function isUsernameValid(name) {
    setUsernameLoading(!usernameLoading);
    setUsernameLoading(true);
    setError("");
    setWrongUsername(false);
    const usersArray = [];
    const users = db.ref("users");
    await users.on("value", (snapshot) => {
      for (const [, value] of Object.entries(snapshot.val())) {
        usersArray.push(value.user_name);
      }
    });
    if (name.length < 3 && name.length > 0) {
      setWrongUsername(true);
      setError(translate("Nazwa użytkownika musi zawierać minimum 3 znaki."));
    } else if (usersArray.includes(name)) {
      setWrongUsername(true);
      setError(translate("Nazwa użytkownika jest już zajęta."));
    } else if (
      name.match("^[a-zA-Z0-9ęółśążźćńĘÓŁŚĄŻŹĆŃ]+$") === null &&
      name !== ""
    ) {
      setWrongUsername(true);
      setError(translate("Nazwa użytkownika ma zły format."));
    }
    setFirstName(name);
    setUsernameLoading(false);
  }

  return (
    <>
      <HeaderContainer />
      <Form>
        <Form.Title>Zarejestruj się</Form.Title>

        <Form.Base method="POST" onSubmit={handleTwitterRegistration}>
          <Form.SubmitTwitter type="submit">
            <Form.ImageTwitter />
            Kontynuuj z Twitter
          </Form.SubmitTwitter>
          <Form.Divider>lub</Form.Divider>
        </Form.Base>

        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base method="POST" onSubmit={handleSubmit}>
          <Form.Input
            placeholder="Nazwa gracza"
            // value={firstName}
            onChange={({ target }) => isUsernameValid(target.value)}
            pattern="^[a-zA-Z0-9]+$"
          />

          <Form.Input
            placeholder="Email"
            type="email"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            type="password"
            autoComplete="off"
            placeholder="Hasło"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Recaptcha>
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              onChange={() => setRobot(false)}
            />
          </Form.Recaptcha>

          <Form.Submit disabled={isInvalid} type="submit">
            {loading ? (
              <Form.LoadingIcon>
                <Spinner
                  radius={25}
                  color={"#1d9cf0"}
                  stroke={3}
                  visible={true}
                />
              </Form.LoadingIcon>
            ) : (
              "Zarejestruj się"
            )}
          </Form.Submit>
        </Form.Base>

        <Form.Text>
          Masz juz konto?{" "}
          <Form.Link to={ROUTES.SIGN_IN}>Zaloguj się.</Form.Link>
        </Form.Text>
        <Form.TextSmall>
          Ta strona korzysta z zabezpieczenia Google reCAPTCHA, by upewnić się,
          że nie jesteś botem.
        </Form.TextSmall>
      </Form>
      <FooterContainer />
    </>
  );
};

export default Signup;
