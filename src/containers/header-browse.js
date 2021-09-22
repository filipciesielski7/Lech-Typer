import React, { useState } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import Form from "../components/form";
import { CgProfile } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { FaListOl } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { translate } from "../helpers/translate";

export function HeaderBrowseContainer({ bg, children }) {
  const history = useHistory();

  const { logout, currentUser, getUsersList } = useAuth();
  const [error, setError] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const twitterUsername = JSON.parse(localStorage.getItem("twitterUsername"));
  // const twitterProfileImage = JSON.parse(
  //   localStorage.getItem("twitterProfileImage")
  // );

  let twitterProfileImage;
  getUsersList().forEach((element) => {
    if (element.user_name === "@".concat(twitterUsername)) {
      twitterProfileImage = element.photoURL;
    }
  });

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

          <Header.Profile onClick={() => setIsProfileOpen(!isProfileOpen)}>
            {currentUser.email === null ? (
              <Header.ProfileImage src={twitterProfileImage} />
            ) : (
              <CgProfile size="2em" />
            )}
            <Header.Username>
              {currentUser.email === null
                ? twitterUsername
                : currentUser.displayName}
            </Header.Username>
            {isProfileOpen ? (
              <AiOutlineUp />
            ) : (
              <Header.IconDown>
                <AiOutlineDown />
              </Header.IconDown>
            )}
          </Header.Profile>
          {isProfileOpen ? (
            <Header.Dropdown>
              <Header.Group>
                <Header.Link to={ROUTES.RANKING}>
                  <FaListOl />
                  <p>Ranking</p>
                </Header.Link>
              </Header.Group>
              <Header.Group>
                <Header.Link to={ROUTES.UPDATE_PROFILE}>
                  <FiSettings />
                  <p>Ustawienia konta</p>
                </Header.Link>
              </Header.Group>
              <Header.Group onClick={handleLogout}>
                <BiLogOut />
                <p>Wyloguj się</p>
              </Header.Group>
            </Header.Dropdown>
          ) : null}
        </Header.Frame>
        {error && <Form.Error>{error}</Form.Error>}
        {children}
      </Header>
    </>
  );
}
