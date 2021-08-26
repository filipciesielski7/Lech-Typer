import React, { useState, useEffect } from "react";
import { HeaderVerificationContainer } from "../containers/header-verification";
import FooterContainer from "../containers/footer";
import { Loading } from "../components";
import Form from "../components/form";
import { useAuth } from "../contexts/AuthContext";
import { translate } from "../helpers/translate";
import * as ROUTES from "../constants/routes";
import Spinner from "react-spinner-material";

const Verification = () => {
  const { currentUser, loadingBrowse, setLoadingBrowse, db } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function resendVerificationEmail(event) {
    setLoading(true);
    setError("");
    event.preventDefault();
    currentUser
      .sendEmailVerification()
      .then(() => {
        setLoading(false);
        setError("Link aktywacyjny został ponownie wysłany.");
      })
      .catch((error) => {
        setLoading(false);
        setError(translate(error.message));
      });
  }

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    setLoading(false);
    window.location.reload();
  }

  // const addUserToRealtimeDatabase = useCallback(() => {
  //   const users = db.ref("users");
  //   users
  //     .child(`${currentUser.uid}`)
  //     .once("value")
  //     .then((snapshot) => {
  //       if (snapshot.exists() && snapshot.val().user_name !== "null") {
  //         return;
  //       } else {
  //         db.ref(`users/${currentUser.uid}`).set({
  //           user_id: `${currentUser.uid}`,
  //           user_name: `${currentUser.displayName}`,
  //           points: 0,
  //         });
  //       }
  //     });
  // }, [currentUser.uid, db, currentUser.displayName]);

  useEffect(() => {
    const addUserToRealtimeDatabase = () => {
      const users = db.ref("users");
      users
        .child(`${currentUser.uid}`)
        .once("value")
        .then((snapshot) => {
          if (snapshot.exists() && snapshot.val().user_name !== "null") {
            return;
          } else {
            db.ref(`users/${currentUser.uid}`).set({
              user_id: `${currentUser.uid}`,
              user_name: `${currentUser.displayName}`,
              points: 0,
            });
          }
        })
        .catch((error) => {
          setError(translate(error.message));
        });
    };
    addUserToRealtimeDatabase();
    setTimeout(() => {
      setLoadingBrowse(false);
    }, 800);
    return true;
  }, [setLoadingBrowse, currentUser.displayName, currentUser.uid, db]);

  return (
    <>
      {loadingBrowse ? <Loading /> : <Loading.ReleaseBody />}
      <HeaderVerificationContainer />
      <Form>
        <Form.Title>Weryfikacja</Form.Title>
        <Form.SubTitle>
          Cześć <Form.SubTitleSpan>{currentUser.displayName}</Form.SubTitleSpan>
          , sprawdź pocztę, zweryfikuj adres email i przejdź dalej. Link
          aktywacyjny został wysłany na adres:{" "}
          <Form.SubTitleSpan>{currentUser.email}</Form.SubTitleSpan>
        </Form.SubTitle>
        {error && <Form.Error>{error}</Form.Error>}
        <Form.VerificationSubmit type="submit" onClick={handleSubmit}>
          {loading ? (
            <Form.LoadingIcon>
              <Spinner
                radius={25}
                color={"#1d9cf0"}
                stroke={3}
                visible={true}
              />
            </Form.LoadingIcon>
          ) : (
            "Przejdź dalej"
          )}
        </Form.VerificationSubmit>
        <Form.Text>
          Wiadomość nie dotarła?{" "}
          <Form.Link to={ROUTES.BROWSE} onClick={resendVerificationEmail}>
            Prześlij ponownie link aktywacyjny.
          </Form.Link>
        </Form.Text>
      </Form>
      <FooterContainer />
    </>
  );
};

export default Verification;
