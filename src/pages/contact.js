import React from "react";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";
import { HeaderContainer } from "../containers/header";

const Contact = () => {
  return (
    <>
      <HeaderContainer />
      <Form>
        <Form.Title>Kontakt</Form.Title>
        <Form.ContactText>{`Znalazłeś błąd lub chcesz nawiązać kontakt? A może interesuje Cię kod źródłowy?`}</Form.ContactText>
        {/* <Form.ContactText>{`Chcesz nawiązać kontakt?`}</Form.ContactText>
        <Form.ContactText>{`Znalazłeś błąd? `}</Form.ContactText> */}

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

export default Contact;
