import React, { useState, useEffect } from "react";
import { HeaderContainer } from "../containers/header";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { translate } from "../helpers/translate";
import Spinner from "react-spinner-material";

const Signin = () => {
  const history = useHistory();
  const { signin, signinWithTwitter, setDeletedAccount } =
    useAuth();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setDeletedAccount(false);
  }, [setDeletedAccount]);

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    signin(emailAddress, password)
      .then(() => {
        setLoading(false);
        history.push(ROUTES.VERIFICATION);
      })
      .catch((error) => {
        if (translate(error.message) !== "Nieprawidłowe hasło.") {
          setEmailAddress("");
          setPassword("");
        } else {
          setPassword("");
        }
        setLoading(false);
        setError(translate(error.message));
      });
  }

  function handleTwitterLogin(event) {
    setLoading(true);
    event.preventDefault();
    signinWithTwitter()
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

  return (
    <>
      <HeaderContainer />
      <Form>
        <Form.Title>Zaloguj się</Form.Title>

        <Form.Base method="POST" onSubmit={handleTwitterLogin}>
          <Form.SubmitTwitter type="submit">
            <Form.ImageTwitter />
            Kontynuuj z Twitter
          </Form.SubmitTwitter>
          <Form.Divider>lub</Form.Divider>
        </Form.Base>

        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base method="POST" onSubmit={handleSubmit}>
          <Form.Input
            placeholder="Email"
            typr="email"
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
              "Zaloguj się"
            )}
          </Form.Submit>
        </Form.Base>

        <Form.Text>
          Nowy gracz?{" "}
          <Form.Link to={ROUTES.SIGN_UP}>Zarejestruj się.</Form.Link>
        </Form.Text>
        <Form.TextSmall></Form.TextSmall>
        <Form.Text>
          Zapomniałeś hasła?{" "}
          <Form.Link to={ROUTES.FORGOT_PASSWORD}>Odzyskaj hasło.</Form.Link>
        </Form.Text>
      </Form>
      <FooterContainer />
    </>
  );
};

export default Signin;
