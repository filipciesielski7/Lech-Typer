import React from "react";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";
import { HeaderBrowseContainer } from "../containers/header-browse";

const ContactInfo = () => {
  return (
    <>
      <HeaderBrowseContainer />
      <Form>
        <Form.Title>Kontakt</Form.Title>
        <Form.ContactText>{`Interesuje Cię kod źródłowy?`}</Form.ContactText>
        <Form.ContactText>{`Chcesz nawiązać kontakt?`}</Form.ContactText>
        <Form.ContactText>{`Znalazłeś błąd? `}</Form.ContactText>

        <Form.ContactText style={{ margin: "20px 0" }}>
          {`Zapraszam na mojego `}
          <Form.ExternalLink
            target="_blank"
            href={"https://github.com/filipciesielski7"}
          >
            Githuba
          </Form.ExternalLink>
        </Form.ContactText>

        <Form.Text>
          <Form.Link to={ROUTES.BROWSE}>Powrót do strony głównej.</Form.Link>
        </Form.Text>
      </Form>
      <FooterContainer />
    </>
  );
};

export default ContactInfo;
