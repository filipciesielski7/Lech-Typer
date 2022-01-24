import React from "react";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";
import { HeaderContainer } from "../containers/header";

const About = () => {
  return (
    <>
      <HeaderContainer />
      <Form>
        <Form.Title>O nas</Form.Title>
        <Form.AboutText>
          {`Lech Typer to nowa aplikacja internetowa napisana z myślą o kibicach
          Lecha Poznań, pozwalająca obstawiać i śledzić na bieżąco wyniki
          wszystkich meczów ich ulubionego zespołu, a takze rywalizować między
          sobą o miano najlepszego typera.`}
        </Form.AboutText>
        <Form.AboutText>
          {`Więcej funkcjonalności i informacji wraz z aktualnym rankingiem graczy znaleźć można w odpowiedniej sekcji aplikacji po zalogowaniu się. Powodzenia!`}
        </Form.AboutText>
        <Form.AboutText>
          {`Istnieje dostępne konto testowe w celu przestestowania aplikacji:`}
        </Form.AboutText>

        <Form.AboutText style={{ marginBottom: "0" }}>
          {`Email: test@mailinator.com`}
        </Form.AboutText>
        <Form.AboutText>{`Hasło: test123`}</Form.AboutText>
        <Form.Text>
          <Form.Link to={ROUTES.HOME}>Powrót do strony głównej.</Form.Link>
        </Form.Text>
      </Form>
      <FooterContainer />
    </>
  );
};

export default About;
