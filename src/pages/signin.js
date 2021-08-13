import React from "react";
import { HeaderContainer } from "../containers/header";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";

const Signin = () => {
  return (
    <>
      <HeaderContainer />
      <Form>
        <Form.Title>Zaloguj się</Form.Title>
        <Form.Text>
          Nowy gracz?{" "}
          <Form.Link to={ROUTES.SIGN_UP}>Zarejestruj się.</Form.Link>
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

export default Signin;
