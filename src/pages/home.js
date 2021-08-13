import React from "react";
import { Feature } from "../components";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from '../constants/routes'
import FooterContainer from "../containers/footer";

const Home = () => {
  return (
    <>
      <HeaderContainer bg={true}>
        <Feature>
          <Feature.Title>Obstawiaj, Kibicuj, Zwyciężaj</Feature.Title>
          <Feature.SubTitle>Typer sympatyków Kolejorza</Feature.SubTitle>
          <Feature.ButtonLink to={ROUTES.SIGN_UP}>
            Dołącz do gry
          </Feature.ButtonLink>
        </Feature>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Home;
