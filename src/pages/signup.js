import React from "react";
import { HeaderContainer } from "../containers/header";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";

const Signup = () => {
  return (
    <>
      <HeaderContainer />
      <Form>
        <Form.Title>Zarejestruj się</Form.Title>
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
