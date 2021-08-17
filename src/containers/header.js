import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { BiLogIn } from "react-icons/bi";

export function HeaderContainer({ bg, children }) {
  return (
    <>
      <Header bg={bg}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} alt="Lech Poznań" src={logo} />
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Zaloguj się</Header.ButtonLink>
          <Header.LogoLink to={ROUTES.SIGN_IN}>
            <BiLogIn size="2em" />
          </Header.LogoLink>
        </Header.Frame>
        {children}
      </Header>
    </>
  );
}
