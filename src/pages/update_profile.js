import React, { useEffect, useState } from "react";
import { HeaderBrowseContainer } from "../containers/header-browse";
import FooterContainer from "../containers/footer";
import { Confirmation, Loading } from "../components";
import Form from "../components/form";
import { useAuth } from "../contexts/AuthContext";
import Spinner from "react-spinner-material";
import * as ROUTES from "../constants/routes";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { translate } from "../helpers/translate";
import { useHistory } from "react-router";

const UpdateProfile = () => {
  const history = useHistory();
  const {
    currentUser,
    loadingBrowse,
    setLoadingBrowse,
    setDeletedAccount,
    db,
  } = useAuth();
  const twitterUsername = JSON.parse(localStorage.getItem("twitterUsername"));

  const [wrongUsername, setWrongUsername] = useState(false);
  const [usernameLoading, setUsernameLoading] = useState(false);
  const [firstOnChange, setFirstOnChange] = useState(true);

  const [loading, setLoading] = useState(false);
  const [deleteAccount, setDeleteAccount] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [errorDeleteAccount, setErrorDeleteAccount] = useState("");

  const isTwitterUser = currentUser.email === null;

  // VALUES, CONFIRMATIONS AND ERRORS
  const [confirmation, setConfirmation] = useState("");
  const [error, setError] = useState("");

  const [firstName, setFirstName] = useState(
    currentUser.email === null ? "@" + twitterUsername : currentUser.displayName
  );
  const [confirmationFirstName, setConfirmationFirstName] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [showBackspaceFirstName, setShowBackspaceFirstName] = useState(false);

  const [emailAddress, setEmailAddress] = useState(currentUser.email);
  const [confirmationEmail, setConfirmationEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [showBackspaceEmail, setShowBackspaceEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [showBackspacePassword, setShowBackspacePassword] = useState(false);

  // PREVENTING FROM UPDATING TWO VALUES AT THE SAME TIME
  const [invalidUpdateFirstName, setInvalidUpdateFirstName] = useState(
    currentUser.email === null ? true : false
  );

  const [invalidUpdateEmail, setInvalidUpdateEmail] = useState(false);
  const [invalidUpdatePassword, setInvalidUpdatePassword] = useState(false);
  let message = "Najpierw zapisz aktualne zmiany.";

  const [isValid, setIsValid] = useState(false);

  function saveChanges(isValid, wrongUsername) {
    if (isValid && !wrongUsername && firstName !== "") {
      return false;
    } else {
      return true;
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoadingBrowse(false);
    }, 800);
  }, [setLoadingBrowse]);

  function ValidCheck(username, email, passwordProp) {
    clearAllMessages();
    setIsValid(true);
    if (currentUser.displayName !== username && username !== null) {
      setInvalidUpdateEmail(true);
      setInvalidUpdatePassword(true);
      setShowBackspaceFirstName(true);
      message =
        "Zapisz aktualną zmianę nazwy gracza, a następnie przejdź do edycji tej sekcji";
    } else if (currentUser.email !== email && email !== null) {
      setInvalidUpdateFirstName(true);
      setInvalidUpdatePassword(true);
      setShowBackspaceEmail(true);
      message =
        "Zapisz aktualną zmianę adresu email, a następnie przejdź do edycji tej sekcji";
    } else if (passwordProp !== "" && passwordProp !== null) {
      setInvalidUpdateFirstName(true);
      setInvalidUpdateEmail(true);
      setShowBackspacePassword(true);
      message =
        "Zapisz aktualną zmianę hasła, a następnie przejdź do edycji tej sekcji";
    } else {
      setInvalidUpdateFirstName(false);
      setInvalidUpdateEmail(false);
      setInvalidUpdatePassword(false);
      setShowBackspaceFirstName(false);
      setShowBackspaceEmail(false);
      setShowBackspacePassword(false);
      setIsValid(false);
    }
  }

  function clearAllMessages() {
    setConfirmation("");
    setError("");
    setConfirmationFirstName("");
    setErrorFirstName("");
    setConfirmationEmail("");
    setErrorEmail("");
    setConfirmationPassword("");
    setErrorPassword("");
  }

  async function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    clearAllMessages();

    if (currentUser.emailVerified) {
      if (
        currentUser.displayName === firstName &&
        currentUser.email === emailAddress &&
        password === ""
      ) {
        setError("Nie dokonano żadnych zmian.");
      } else if (currentUser.displayName !== firstName) {
        currentUser
          .updateProfile({
            displayName: firstName,
          })
          .then(() => {
            const users = db.ref("users");
            users.child(`${currentUser.uid}`).set({
              user_id: `${currentUser.uid}`,
              user_name: `${currentUser.displayName}`,
              points: 0,
            });
          })
          .then(() => {
            setConfirmationFirstName("Zmieniono nazwę gracza.");
          })
          .catch((error) => {
            setFirstName(currentUser.displayName);
            setErrorFirstName(translate(error.message));
          });
      } else if (currentUser.email !== emailAddress) {
        currentUser
          .updateEmail(emailAddress)
          .then(() => currentUser.sendEmailVerification())
          .then(() => {
            setConfirmationEmail(
              "Zmieniono adres email. Sprawdź pocztę, aby zweryfikować nowy adres email."
            );
          })
          .catch((error) => {
            setEmailAddress(currentUser.email);
            setErrorEmail(translate(error.message));
          });
      } else if (password !== "") {
        currentUser
          .updatePassword(password)
          .then(() => currentUser.sendEmailVerification())
          .then(() => {
            setConfirmationPassword("Zaktualizowano hasło.");
          })
          .catch((error) => {
            setErrorPassword(translate(error.message));
          });
      }
    } else {
      setFirstName(currentUser.displayName);
      setEmailAddress(currentUser.email);
      setError(
        "Zweryfikuj nowy adres email, a następnie odśwież tę stronę, aby móc dokonać zmian."
      );
    }
    setPassword("");
    setInvalidUpdateFirstName(false);
    setInvalidUpdateEmail(false);
    setInvalidUpdatePassword(false);
    setShowBackspaceFirstName(false);
    setShowBackspaceEmail(false);
    setShowBackspacePassword(false);
    setIsValid(false);
    setLoading(false);
  }

  function handleDeleteButton(event) {
    setLoading2(true);
    event.preventDefault();
    setErrorDeleteAccount("");
    setLoading2(false);
    setDeleteAccount(true);
  }

  function rejectDeleteAccount(event) {
    event.preventDefault();
    setDeleteAccount(false);
  }

  function confirmDeleteAccount(event) {
    event.preventDefault();
    currentUser
      .delete()
      .then(() => {
        const users = db.ref("users");
        users.child(`${currentUser.uid}`).remove();
      })
      .then(() => {
        setDeletedAccount(true);
        history.push(ROUTES.DELETED_ACCOUNT);
      })
      .catch((error) => setErrorDeleteAccount(translate(error.message)));
  }

  async function isUsernameValid(name) {
    setUsernameLoading(!usernameLoading);
    setUsernameLoading(true);
    setErrorFirstName("");
    setWrongUsername(false);
    const usersArray = [];
    const users = db.ref("users");
    await users.on("value", (snapshot) => {
      for (const [, value] of Object.entries(snapshot.val())) {
        if (value.user_name !== currentUser.displayName) {
          usersArray.push(value.user_name);
          if (value.user_name === name && firstOnChange) {
            setWrongUsername(true);
            setErrorFirstName(translate("Nazwa użytkownika jest już zajęta."));
          }
        }
      }
    });
    if (name.length < 3 && name.length > 0) {
      setWrongUsername(true);
      setErrorFirstName(
        translate("Nazwa użytkownika musi zawierać minimum 3 znaki.")
      );
    } else if (usersArray.includes(name)) {
      setWrongUsername(true);
      setErrorFirstName(translate("Nazwa użytkownika jest już zajęta."));
    } else if (
      name.match("^[a-zA-Z0-9ęółśążźćńĘÓŁŚĄŻŹĆŃ]+$") === null &&
      name !== ""
    ) {
      setWrongUsername(true);
      setErrorFirstName(translate("Nazwa użytkownika ma zły format."));
    }
    setFirstName(name);
    setFirstOnChange(false);
    setUsernameLoading(false);
  }

  return (
    <>
      {loadingBrowse ? <Loading /> : <Loading.ReleaseBody />}
      {deleteAccount ? (
        <Confirmation>
          <Confirmation.ChoiceContainer>
            <Confirmation.Title>
              Potwierdzenie usunięcia konta
            </Confirmation.Title>
            {errorDeleteAccount && (
              <Form.Error>{errorDeleteAccount}</Form.Error>
            )}
            <Confirmation.SubTitle>
              Czy jesteś pewien, że chcesz trwale usunąć swoje konto wraz z
              przypisanymi do niego wszystkimi danymi?
            </Confirmation.SubTitle>
            <Confirmation.ButtonsContainer>
              <Confirmation.ConfirmDeleteAccountButton
                onClick={confirmDeleteAccount}
              >
                Tak
              </Confirmation.ConfirmDeleteAccountButton>
              <Confirmation.RejectDeleteAccountButton
                onClick={rejectDeleteAccount}
              >
                Nie
              </Confirmation.RejectDeleteAccountButton>
            </Confirmation.ButtonsContainer>
            <Confirmation.Text>
              Ta operacja jest nieodwracalna.{" "}
              <Form.Link to={ROUTES.BROWSE}>
                Powrót do strony głównej.
              </Form.Link>
            </Confirmation.Text>
          </Confirmation.ChoiceContainer>
        </Confirmation>
      ) : (
        <Confirmation.ReleaseBody />
      )}
      <HeaderBrowseContainer />

      <Form>
        <Form.Title>Ustawienia konta</Form.Title>

        {error && <Form.Error>{error}</Form.Error>}
        {confirmation && <Form.Confirmation>{confirmation}</Form.Confirmation>}

        {isTwitterUser ? null : (
          <>
            <Form.Text>
              Na tej stronie możesz zmienić dane powiązane z Twoim kontem w Lech
              Typer. Wszystkie zmiany należy wykonywać pojedyńczo.
            </Form.Text>
            <Form.TextSmall></Form.TextSmall>
            <Form.TextSmall></Form.TextSmall>
            <Form.TextSmall></Form.TextSmall>
          </>
        )}

        <Form.Base method="POST" onSubmit={handleSubmit}>
          <Form.SettingContainer>
            <Form.SettingSubTitle>Nazwa gracza</Form.SettingSubTitle>
            {isTwitterUser ? (
              <></>
            ) : invalidUpdateFirstName ||
              invalidUpdateFirstName ||
              invalidUpdatePassword ? null : (
              <>
                <Form.Edit
                  onClick={() => {
                    clearAllMessages();
                    if (invalidUpdateFirstName) {
                      setError(message);
                    }
                  }}
                  htmlFor="FirstName"
                >
                  <FaEdit />
                  <p>edytuj</p>
                </Form.Edit>
              </>
            )}

            {isTwitterUser ? (
              <></>
            ) : showBackspaceFirstName ? (
              <>
                <Form.Edit
                  onClick={() => {
                    isUsernameValid(currentUser.displayName);
                    // setFirstName(currentUser.displayName);
                    ValidCheck(currentUser.displayName, null, null);
                  }}
                >
                  <MdDeleteForever />
                  <p>cofnij zmiany</p>
                </Form.Edit>
              </>
            ) : null}
          </Form.SettingContainer>
          <Form.Input
            placeholder={
              currentUser.email === null
                ? "@" + twitterUsername
                : currentUser.displayName
            }
            disabled={invalidUpdateFirstName}
            value={firstName}
            autoComplete="off"
            id="FirstName"
            onChange={({ target }) => {
              isUsernameValid(target.value);
              // setFirstName(target.value);
              ValidCheck(target.value, null, null);
            }}
          />

          {isTwitterUser ? null : (
            <>
              {" "}
              {confirmationFirstName && (
                <Form.Confirmation>{confirmationFirstName}</Form.Confirmation>
              )}
              {errorFirstName && <Form.Error>{errorFirstName}</Form.Error>}
              <Form.SettingContainer>
                <Form.SettingSubTitle>Adres email</Form.SettingSubTitle>
                {invalidUpdateFirstName ||
                invalidUpdateFirstName ||
                invalidUpdatePassword ? null : (
                  <>
                    <Form.Edit
                      onClick={() => {
                        clearAllMessages();
                        if (invalidUpdateEmail) {
                          setError(message);
                        }
                      }}
                      htmlFor="Email"
                    >
                      <FaEdit />
                      <p>edytuj</p>
                    </Form.Edit>
                  </>
                )}
                {showBackspaceEmail ? (
                  <>
                    <Form.Edit
                      onClick={() => {
                        setEmailAddress(currentUser.email);
                        ValidCheck(null, currentUser.email, null);
                      }}
                    >
                      <MdDeleteForever />
                      <p>cofnij zmiany</p>
                    </Form.Edit>
                  </>
                ) : null}
              </Form.SettingContainer>
              <Form.Input
                placeholder={currentUser.email}
                type="email"
                value={emailAddress}
                disabled={invalidUpdateEmail}
                id="Email"
                onChange={({ target }) => {
                  setEmailAddress(target.value);
                  ValidCheck(null, target.value, null);
                }}
              />
            </>
          )}

          {isTwitterUser ? null : (
            <>
              {" "}
              {confirmationEmail && (
                <Form.Confirmation>{confirmationEmail}</Form.Confirmation>
              )}
              {errorEmail && <Form.Error>{errorEmail}</Form.Error>}
              <Form.SettingContainer>
                <Form.SettingSubTitle>Zmień hasło</Form.SettingSubTitle>
                {invalidUpdateFirstName ||
                invalidUpdateFirstName ||
                invalidUpdatePassword ? null : (
                  <>
                    <Form.Edit
                      onClick={() => {
                        clearAllMessages();
                        if (invalidUpdatePassword) {
                          setError(message);
                        }
                      }}
                      htmlFor="Password"
                    >
                      <FaEdit />
                      <p>edytuj</p>
                    </Form.Edit>
                  </>
                )}
                {showBackspacePassword ? (
                  <>
                    <Form.Edit
                      onClick={() => {
                        setPassword("");
                        ValidCheck(null, null, "");
                      }}
                    >
                      <MdDeleteForever />
                      <p>cofnij zmiany</p>
                    </Form.Edit>
                  </>
                ) : null}
              </Form.SettingContainer>
              <Form.Input
                type="password"
                autoComplete="off"
                placeholder="Hasło"
                value={password}
                disabled={invalidUpdatePassword}
                id="Password"
                onChange={({ target }) => {
                  setPassword(target.value);
                  ValidCheck(null, null, target.value);
                }}
              />
            </>
          )}

          {isTwitterUser ? (
            <Form.Text>
              Nie możesz dokonać żadnych zmian w tej sekcji, ponieważ zostałeś
              zarejestrowany do Lech Typera przy pomocy Twittera. Poniżej możesz
              jedynie trwale usunąć swoje konto. Mamy jednak nadzieje, że grasz
              z nami dalej!{" "}
              <Form.Link to={ROUTES.BROWSE}>
                Powrót do strony głównej.
              </Form.Link>
            </Form.Text>
          ) : (
            <>
              {confirmationPassword && (
                <Form.Confirmation>{confirmationPassword}</Form.Confirmation>
              )}
              {errorPassword && <Form.Error>{errorPassword}</Form.Error>}
              <Form.Submit
                disabled={saveChanges(isValid, wrongUsername)}
                type="submit"
                // onClick={handleSubmit}
              >
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
                  "Zapisz zmianę"
                )}
              </Form.Submit>
              <Form.Text>
                Zapisano ustawienia?{" "}
                <Form.Link to={ROUTES.BROWSE}>
                  Powrót do strony głównej.
                </Form.Link>
              </Form.Text>
              <Form.TextSmall></Form.TextSmall>
              <Form.Text>
                Poniżej możesz trwale usunąć swoje konto. Mamy jednak nadzieje,
                że grasz z nami dalej!{" "}
              </Form.Text>
            </>
          )}

          <Form.SubmitDeleteAccount type="submit" onClick={handleDeleteButton}>
            {loading2 ? (
              <Form.LoadingIcon>
                <Spinner
                  radius={25}
                  color={"#1d9cf0"}
                  stroke={3}
                  visible={true}
                />
              </Form.LoadingIcon>
            ) : (
              "Usuń konto"
            )}
          </Form.SubmitDeleteAccount>
        </Form.Base>
      </Form>
      <FooterContainer />
    </>
  );
};

export default UpdateProfile;
