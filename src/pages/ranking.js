import React, { useEffect, useState } from "react";
import { HeaderBrowseContainer } from "../containers/header-browse";
import FooterContainer from "../containers/footer";
import { Loading, Ranking2 as Ranking, User2 as User } from "../components";
import { useAuth } from "../contexts/AuthContext";
import { BsArrowLeft } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch, FaArrowDown } from "react-icons/fa";
import { ImTwitter } from "react-icons/im";
import * as ROUTES from "../constants/routes";
import Switch from "@mui/material/Switch";

const RankingPage = () => {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [onlyTwitter, setOnlyTwitter] = useState(false);
  const [sortByPoints, setSortByPoints] = useState(true);
  const [selected, setSelected] = useState(3);
  const [searchActive, setSearchActive] = useState(false);

  const { loadingBrowse, getUsersList, currentUser, loadData } = useAuth();

  useEffect(() => {
    loadData();
  }, [loadData]);

  const twitterUsername = JSON.parse(localStorage.getItem("twitterUsername"));
  const isTwitterUser = currentUser.email === null;

  const username = isTwitterUser
    ? "@" + twitterUsername
    : currentUser.displayName;

  function addPositionsToArray(
    array,
    username,
    max_size,
    sortByPoints,
    searching
  ) {
    let points;
    let position = 1;
    points = array[0].points;
    array.forEach((element, index) => {
      if (element) {
        if (index === 0) {
          element.position = position;
        } else if (element.points === points) {
          if (
            (element.user_name === username && index > max_size) ||
            !sortByPoints ||
            searching
          ) {
            element.position = position;
          } else if (index === array.length - 1 && index > max_size) {
            element.position = position;
          } else {
            element.position = null;
          }
        } else {
          element.position = ++position;
          points = element.points;
        }
      }
    });

    return array;
  }

  function usersArray(
    onlyTwitter = false,
    sortByPoints = true,
    searching = false
  ) {
    let array = getUsersList();
    let twitterArray = array;
    if (onlyTwitter) {
      twitterArray = [];
      array.forEach((user) => {
        if (user.user_name.includes("@")) {
          twitterArray.push(user);
        }
      });
    }
    array = twitterArray;

    array.sort((a, b) => {
      if (a.points === b.points) {
        const user1 = a.user_name.includes("@")
          ? a.user_name.slice(1)
          : a.user_name;
        const user2 = b.user_name.includes("@")
          ? b.user_name.slice(1)
          : b.user_name;
        return user1.toUpperCase() > user2.toUpperCase()
          ? 1
          : user2.toUpperCase() > user1.toUpperCase()
          ? -1
          : 0;
      }
      return a.points < b.points ? 1 : -1;
    });

    let sortedArray = [];
    if (array[0] !== undefined) {
      const max_size = array.length + 1;

      const newArray = addPositionsToArray(
        array,
        username,
        max_size,
        sortByPoints,
        searching
      );
      if (sortByPoints) {
        sortedArray = newArray.slice(0);
      } else {
        sortedArray = newArray.sort((a, b) => {
          if (a.points === b.points || !sortByPoints) {
            const user1 = a.user_name.includes("@")
              ? a.user_name.slice(1)
              : a.user_name;
            const user2 = b.user_name.includes("@")
              ? b.user_name.slice(1)
              : b.user_name;
            return user1.toUpperCase() > user2.toUpperCase()
              ? 1
              : user2.toUpperCase() > user1.toUpperCase()
              ? -1
              : 0;
          }
          return a.points < b.points ? 1 : -1;
        });
      }
    }

    return sortedArray;
  }

  const [searchTerm, setSearchTerm] = useState("");
  const array = usersArray(onlyTwitter, sortByPoints, searchTerm !== "").filter(
    (element) =>
      element.user_name.toUpperCase().includes(searchTerm.toUpperCase())
  );

  return (
    <>
      {loadingBrowse ? <Loading /> : <Loading.ReleaseBody />}
      <HeaderBrowseContainer />
      <div
        style={{
          maxWidth: "1164px",
          margin: "0 auto",
        }}
      >
        <Ranking>
          <Ranking.TitleBar>
            <Ranking.Title>Ranking</Ranking.Title>
            <Ranking.SubTitle to={ROUTES.BROWSE}>
              <BsArrowLeft
                style={{
                  marginRight: "5px",
                }}
              />
              Powrót
            </Ranking.SubTitle>
          </Ranking.TitleBar>

          <Ranking.Bar>
            <Ranking.BarSection position={true}>Pozycja</Ranking.BarSection>
            <Ranking.BarSection>
              <Ranking.Selection
                isSelected={selected === 2}
                onClick={() => {
                  setSelected(2);
                  setSortByPoints(false);
                }}
              >
                Nazwa użytkownika{" "}
                {selected === 2 ? (
                  <FaArrowDown className="arrow" size="10px" />
                ) : null}
              </Ranking.Selection>
            </Ranking.BarSection>
            <Ranking.BarSection>
              <Ranking.Selection
                isSelected={selected === 3}
                onClick={() => {
                  setSelected(3);
                  setSortByPoints(true);
                }}
              >
                Punkty{" "}
                {selected === 3 ? (
                  <FaArrowDown className="arrow" size="10px" />
                ) : null}
              </Ranking.Selection>
            </Ranking.BarSection>
            <Ranking.BarSection>
              <Switch
                {...label}
                id="Email"
                size="small"
                onChange={() => setOnlyTwitter(!onlyTwitter)}
                checked={onlyTwitter}
              />
              <ImTwitter
                size="22px"
                color={onlyTwitter ? "#1976D2" : ""}
                onClick={() => setOnlyTwitter(!onlyTwitter)}
                style={{ cursor: "pointer" }}
              />
            </Ranking.BarSection>
            <Ranking.BarSection search={true}>
              <Ranking.SearchContainer>
                <label htmlFor="user">
                  <Ranking.SearchIcon>
                    <FaSearch
                      size="18px"
                      onClick={() => setSearchActive(true)}
                    />
                  </Ranking.SearchIcon>
                </label>
                <Ranking.SearchBar
                  type="text"
                  id="user"
                  autoComplete="off"
                  placeholder="Nazwa użytkownika"
                  searchActive={searchActive}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                />
                <Ranking.SearchIcon searchActive={searchTerm === ""}>
                  <AiOutlineClose
                    size="18px"
                    onClick={() => setSearchTerm("")}
                  />
                </Ranking.SearchIcon>
              </Ranking.SearchContainer>
            </Ranking.BarSection>
          </Ranking.Bar>

          <Ranking.SearchSmallContainer small={true}>
            <label htmlFor="user2">
              <Ranking.SearchIcon>
                <FaSearch size="18px" onClick={() => setSearchActive(true)} />
              </Ranking.SearchIcon>
            </label>
            <Ranking.SearchBar
              type="text"
              id="user2"
              autoComplete="off"
              placeholder="Nazwa użytkownika"
              small={true}
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
            <Ranking.SearchIcon searchActive={searchTerm === ""}>
              <AiOutlineClose size="18px" onClick={() => setSearchTerm("")} />
            </Ranking.SearchIcon>
          </Ranking.SearchSmallContainer>

          <Ranking.ListContainer>
            {array.map((user, index) => {
              if (user && index < usersArray().length) {
                return (
                  <User
                    key={index}
                    user={user}
                    index={index}
                    currentUserRanking={user.user_name === username}
                    length={usersArray(onlyTwitter).length}
                    photoURL={user.photoURL}
                  />
                );
              } else {
                return null;
              }
            })}
            {array.length === 0 ? (
              <Ranking.EmptyResults>
                Żaden z użytkowników nie spełniała Twoich kryteriów wyszukiwania
              </Ranking.EmptyResults>
            ) : null}
          </Ranking.ListContainer>
        </Ranking>
      </div>
      <FooterContainer />
    </>
  );
};

export default RankingPage;
