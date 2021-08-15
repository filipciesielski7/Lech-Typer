import React, { useState } from "react";
import { HeaderVerificationContainer } from "../containers/header-verification";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import { useAuth } from "../contexts/AuthContext";
import { translate } from "../helpers/translate";

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

  return (
    <>
      <HeaderVerificationContainer />
      <Form>
        <Form.Title>Weryfikacja</Form.Title>
        <Form.SubTitle>
          Sprawdź pocztę, aktywuj konto i odśwież stronę. Link aktywacyjny
          został wysłany na adres: {currentUser.email}
        </Form.SubTitle>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Text>
          Wiadomość nie dotarła?{" "}
          <Form.Link onClick={resendVerificationEmail}>
            Prześlij ponownie link aktywacyjny.
          </Form.Link>
        </Form.Text>
      </Form>
      <FooterContainer />
    </>
  );
};

export default Verification;
