import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { translate } from "../helpers/translate";

const Signup = () => {
  const history = useHistory();
  const { signup, sendVerificationEmail } = useAuth();
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  function handleSubmit(event) {
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
            history.push(ROUTES.VERIFICATION);
          })
      )
      .catch((error) => {
        if (
          translate(error.message) === "Hasło musi zawierać minimum 6 znaków."
        ) {
          setPassword("");
        } else if (translate(error.message) === "Błędny adres e-mail.") {
          setEmailAddress("");
          setPassword("");
        } else {
          setEmailAddress("");
          setFirstName("");
          setPassword("");
        }
        setError(translate(error.message));
      });
  }

  return (
    <>
      <HeaderContainer />
      <Form>
        <Form.Title>Zarejestruj się</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}

        <Form.Base method="POST" onSubmit={handleSubmit}>
          <Form.Input
            placeholder="Nazwa gracza"
            value={firstName}
            onChange={({ target }) => setFirstName(target.value)}
          />
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
            Zarejestruj się
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
