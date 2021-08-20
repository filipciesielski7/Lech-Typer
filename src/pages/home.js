import React, { useEffect } from "react";
import { Feature } from "../components";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from "../constants/routes";
import FooterContainer from "../containers/footer";
import { useAuth } from "../contexts/AuthContext";

const Home = () => {
  const { setDeletedAccount } = useAuth();
  useEffect(() => {
    setDeletedAccount(false);
  }, [setDeletedAccount]);

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
