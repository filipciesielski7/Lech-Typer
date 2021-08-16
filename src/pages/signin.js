import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { translate } from "../helpers/translate";

const Signin = () => {
  const history = useHistory();
  const { signin, signinWithTwitter } = useAuth();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  function handleSubmit(event) {
    event.preventDefault();
    signin(emailAddress, password)
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        if (translate(error.message) !== "Nieprawidłowe hasło.") {
          setEmailAddress("");
          setPassword("");
        } else {
          setPassword("");
        }
        setError(translate(error.message));
      });
  }

  function handleTwitterLogin(event) {
    event.preventDefault();
    signinWithTwitter()
      .then((result) => {
        // result.user.updateProfile({
        //   displayName: "@" + result.additionalUserInfo.username,
        // // });
        // console.log(result.user);
        // console.log(result.additionalUserInfo);
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setError(translate(error.message));
      });
  }

  return (
    <>
      <HeaderContainer />
      <Form>
        <Form.Title>Zaloguj się</Form.Title>
        {/* {error && <Form.Error>{error}</Form.Error>} */}

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
            Zaloguj się
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
        {/* <Form.TextSmall>
          Ta strona korzysta z zabezpieczenia Google reCAPTCHA, by upewnić się,
          że nie jesteś botem.
        </Form.TextSmall> */}
      </Form>
      <FooterContainer />
    </>
  );
};

export default Signin;
