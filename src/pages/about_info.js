import React from "react";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import { HeaderBrowseContainer } from "../containers/header-browse";

const AboutInfo = () => {
  return (
    <>
      <HeaderBrowseContainer />
      <Form>
        <Form.Title>O nas</Form.Title>
      </Form>
      <FooterContainer />
    </>
  );
};

export default AboutInfo;
