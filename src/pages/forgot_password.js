import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";
import { useAuth } from "../contexts/AuthContext";
import { translate } from "../helpers/translate";
import Spinner from "react-spinner-material";

const ForgotPassword = () => {
  const { resetPassword } = useAuth();
  const [emailAddress, setEmailAddress] = useState("");
  const [error, setError] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);
  const isInvalid = emailAddress === "";

  const [firstReset, setFirstReset] = useState("Zresetuj hasło");

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    if (!isInvalid) {
      resetPassword(emailAddress)
        .then(() => {
          setError("");
          setLoading(false);
          if (firstReset === "Zresetuj hasło") {
            setConfirmation("Link do odzyskania hasła został wysłany.");
          } else {
            setConfirmation("");
            setError("Link do odzyskania hasła został wysłany ponownie.");
          }
          setFirstReset("Wyślij ponownie");
        })
        .catch((error) => {
          setLoading(false);
          setConfirmation("");
          setEmailAddress("");
          setError(translate(error.message));
        });
    } else {
      setLoading(false);
      setConfirmation("");
      setError("Nie podano adresu email.");
    }
  }

  return (
    <>
      <HeaderContainer />
      <Form>
        <Form.Title>Odzyskaj hasło</Form.Title>
        <Form.SubTitle>
          Wpisz adres e-mail, który był przez Ciebie użyty do rejestracji.
          Wyślemy na niego łącze umożliwiające zresetowanie hasła.
        </Form.SubTitle>
        {error && <Form.Error>{error}</Form.Error>}
        {confirmation && <Form.Confirmation>{confirmation}</Form.Confirmation>}

        <Form.Base method="POST" onSubmit={handleSubmit}>
          <Form.InputForgotPassword
            placeholder="Email"
            typr="email"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
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
              firstReset
            )}
          </Form.Submit>
        </Form.Base>

        {/* <Form.Text>
          Wiadomość nie dotarła?{" "}
          <Form.Link to={ROUTES.BROWSE} onClick={resendForgotPassword}>
            Prześlij ponownie
          </Form.Link>
        </Form.Text>*/}
        {/* <Form.TextSmall></Form.TextSmall> */}

        <Form.Text>
          Zmienione hasło?{" "}
          <Form.Link to={ROUTES.SIGN_IN}>Zaloguj się.</Form.Link>
        </Form.Text>

        <Form.TextSmall></Form.TextSmall>
        <Form.Text>
          Nowy gracz?{" "}
          <Form.Link to={ROUTES.SIGN_UP}>Zarejestruj się.</Form.Link>
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

export default ForgotPassword;
