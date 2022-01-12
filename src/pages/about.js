import React from "react";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import { HeaderContainer } from "../containers/header";

const About = () => {
  return (
    <>
      <HeaderContainer />
      <Form>
        <Form.Title>O nas</Form.Title>
      </Form>
      <FooterContainer />
    </>
  );
};

export default About;
