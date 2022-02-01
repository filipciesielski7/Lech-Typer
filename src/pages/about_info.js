import React from "react";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import * as ROUTES from "../constants/routes";
import { HeaderBrowseContainer } from "../containers/header-browse";

const AboutInfo = () => {
  return (
    <>
      <HeaderBrowseContainer />
      <Form>
        <Form.Title>O nas</Form.Title>
        <Form.AboutText>
          {`Lech Typer to nowa aplikacja internetowa napisana z myślą o kibicach Lecha Poznań, pozwalająca obstawiać i śledzić na bieżąco wyniki wszystkich meczów ich ulubionego zespołu, a takze rywalizować między sobą o miano najlepszego typera.`}
        </Form.AboutText>
        <Form.AboutText>
          {`Jeśli idealnie obstawisz wynik zdobędziesz 3 punkty, w przypadku gdy wskażesz poprawnego zwycięzce, a różnica bramek będzie identyczna z faktyczną otrzymasz 2 punkty. Szansą na zdobycie 1 punktu jest poprawne wskazanie zwycięzcy, nie wyniku. Powodzenia!`}
        </Form.AboutText>
        <Form.Text>
          <Form.Link to={ROUTES.BROWSE}>Powrót do strony głównej.</Form.Link>
        </Form.Text>
      </Form>
      <FooterContainer />
    </>
  );
};

export default AboutInfo;
