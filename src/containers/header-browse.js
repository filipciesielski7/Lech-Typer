import React, { useState } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import Form from "../components/form";
import { BiLogIn } from "react-icons/bi";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { translate } from "../helpers/translate";

export function HeaderBrowseContainer({ bg, children }) {
  const history = useHistory();
  const { logout } = useAuth();
  const [error, setError] = useState("");

  function handleLogout(event) {
    event.preventDefault();
    logout()
      .then(() => {
        history.push(ROUTES.SIGN_IN);
      })
      .catch((error) => {
        setError(translate(error.message));
      });
  }

  return (
    <>
      <Header bg={bg}>
        <Header.Frame>
          <Header.Logo to={ROUTES.BROWSE} alt="Lech Poznań" src={logo} />
          <Header.ButtonLink to={ROUTES.SIGN_IN} onClick={handleLogout}>
            Wyloguj się
          </Header.ButtonLink>
          <Header.LogoLink to={ROUTES.SIGN_IN} onClick={handleLogout}>
            <BiLogIn size="2em" />
          </Header.LogoLink>
        </Header.Frame>
        {error && <Form.Error>{error}</Form.Error>}
        {children}
      </Header>
    </>
  );
}
