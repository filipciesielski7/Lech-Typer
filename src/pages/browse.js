import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import FooterContainer from "../containers/footer";
import Form from "../components/form";
import { useAuth } from "../contexts/AuthContext";
import { translate } from "../helpers/translate";
import * as ROUTES from "../constants/routes";
import { useHistory } from "react-router";

const Browse = () => {
  const history = useHistory();
  const { logout, currentUser } = useAuth();
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
      <HeaderContainer />
      <Form>
        <Form.Title>Witamy {currentUser.displayName}</Form.Title>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.Base method="POST" onSubmit={handleLogout}>
          <Form.Submit type="submit">Wyloguj się</Form.Submit>
        </Form.Base>
      </Form>
      <FooterContainer />
    </>
  );
};

export default Browse;
