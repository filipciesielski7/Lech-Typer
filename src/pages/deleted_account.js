import React, { useState, useEffect } from "react";
import Form from "../components/form";
import { Loading } from "../components";
import { HeaderContainer } from "../containers/header";
import * as ROUTES from "../constants/routes";
import { Confirmation } from "../components";

const DeletedAccount = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? <Loading /> : <Loading.ReleaseBody />}
      {loading ? null : (
        <>
          <HeaderContainer />
          <Confirmation.Container>
            <Confirmation.DeleteContainer>
              <Confirmation.Title>
                Potwierdzenie usunięcia konta
              </Confirmation.Title>
              <Confirmation.SubTitle>
                Twoje konto zostało trwale usunięte. Mamy jednak nadzieje, że
                szybko do nas wrócisz!
              </Confirmation.SubTitle>
              <Confirmation.Text>
                <Form.Link to={ROUTES.HOME}>
                  Powrót do strony głównej.
                </Form.Link>
              </Confirmation.Text>
            </Confirmation.DeleteContainer>
          </Confirmation.Container>
        </>
      )}
    </>
  );
};

export default DeletedAccount;
