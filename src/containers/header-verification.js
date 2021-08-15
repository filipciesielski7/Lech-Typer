import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";

export function HeaderVerificationContainer({ bg, children }) {
  const history = useHistory();
  const { logout } = useAuth();

  function handleLogout(event) {
    event.preventDefault();
    logout()
      .then(() => {
        history.push(ROUTES.SIGN_IN);
      })
      .catch((error) => {});
  }

  return (
    <>
      <Header bg={bg}>
        <Header.Frame>
          <Header.Logo onClick={handleLogout} alt="Lech Poznań" src={logo} />
        </Header.Frame>
        {children}
      </Header>
    </>
  );
}
