import React from "react";
import { Footer } from "../components";
import * as ROUTES from "../constants/routes";

const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Title>Pytania? Skontaktuj się</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link to={ROUTES.HOME}>Strona główna</Footer.Link>
          {/* <Footer.Link to={ROUTES.UPDATE_PROFILE}>Ustawienia konta</Footer.Link> */}
        </Footer.Column>
        <Footer.Column>
          <Footer.Link to={ROUTES.ABOUT}>O nas</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          {/* <Footer.Link to={ROUTES.ABOUT}>O nas</Footer.Link> */}
          <Footer.Link to={ROUTES.CONTACT}>Kontakt</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>
        &copy; {new Date().getFullYear()} Filip Ciesielski
      </Footer.Text>
    </Footer>
  );
};

export default FooterContainer;
