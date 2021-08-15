import React, { useState } from "react";
import { HeaderVerificationContainer } from "../containers/header-verification";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import { useAuth } from "../contexts/AuthContext";
import { translate } from "../helpers/translate";
import * as ROUTES from "../constants/routes";

const Verification = () => {
  const { currentUser } = useAuth();
  const [error, setError] = useState("");

  function resendVerificationEmail(event) {
    event.preventDefault();
    currentUser
      .sendEmailVerification()
      .then(() => {
        setError("Link aktywacyjny został ponownie wysłany.");
      })
      .catch((error) => {
        setError(translate(error.message));
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.location.reload();
  }

  return (
    <>
      <HeaderVerificationContainer />
      <Form>
        <Form.Title>Weryfikacja</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.SubTitle>
          Sprawdź pocztę, aktywuj konto i przejdź dalej. Link aktywacyjny został
          wysłany na adres: {currentUser.email}
        </Form.SubTitle>
        <Form.Submit type="submit" onClick={handleSubmit} disabled={false}>
          Przejdź dalej
        </Form.Submit>
        <Form.Text>
          Wiadomość nie dotarła?{" "}
          <Form.Link to={ROUTES.BROWSE} onClick={resendVerificationEmail}>
            Prześlij ponownie link aktywacyjny.
          </Form.Link>
        </Form.Text>
      </Form>
      <FooterContainer />
    </>
  );
};

export default Verification;
