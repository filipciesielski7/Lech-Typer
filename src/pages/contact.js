import React from "react";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import { HeaderContainer } from "../containers/header";

const Contact = () => {
  return (
    <>
      <HeaderContainer />
      <Form>
        <Form.Title>Kontakt</Form.Title>
      </Form>
      <FooterContainer />
    </>
  );
};

export default Contact;
