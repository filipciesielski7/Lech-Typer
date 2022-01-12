import React from "react";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import { HeaderBrowseContainer } from "../containers/header-browse";

const ContactInfo = () => {
  return (
    <>
      <HeaderBrowseContainer />
      <Form>
        <Form.Title>Kontakt</Form.Title>
      </Form>
      <FooterContainer />
    </>
  );
};

export default ContactInfo;
