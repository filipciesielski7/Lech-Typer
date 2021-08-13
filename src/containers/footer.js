import React from "react";
import { Footer } from "../components";

const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Title>Pytania? Skontaktuj się</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">O nas</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">Kontakt</Footer.Link>
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
