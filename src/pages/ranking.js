import React, { useEffect } from "react";
import { HeaderBrowseContainer } from "../containers/header-browse";
import FooterContainer from "../containers/footer";
import { Loading, Ranking, User } from "../components";
import { useAuth } from "../contexts/AuthContext";

const RankingPage = () => {
  const { loadingBrowse, setLoadingBrowse, getUsersList, currentUser } =
    useAuth();

  useEffect(() => {
    setTimeout(() => {
      setLoadingBrowse(false);
    }, 800);
  }, [setLoadingBrowse]);

  const twitterUsername = JSON.parse(localStorage.getItem("twitterUsername"));
  const isTwitterUser = currentUser.email === null;

  const username = isTwitterUser
    ? "@" + twitterUsername
    : currentUser.displayName;
  let currentUserIndex;

  function addPositionsToArray(array, username, max_size) {
    let points;
    let position = 1;
    points = array[0].points;
    array.forEach((element, index) => {
      if (element) {
        if (index === 0) {
          element.position = position;
        } else if (element.points === points) {
          if (element.user_name === username && index > max_size) {
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

  function usersArray() {
    const array = getUsersList();
    array.sort((a, b) => {
      if (a.points === b.points) {
        return a.user_name.toUpperCase() > b.user_name.toUpperCase()
          ? 1
          : b.user_name.toUpperCase() > a.user_name.toUpperCase()
          ? -1
          : 0;
      }
      return a.points < b.points ? 1 : -1;
    });

    let sortedArray = [];
    if (array[0] !== undefined) {
      const max_size = array.length + 1; // RANKING LIST SIZE

      const newArray = addPositionsToArray(array, username, max_size);
      sortedArray = newArray.slice(0);

      newArray.forEach((element) => {
        if (element.user_name === username) {
          currentUserIndex = sortedArray.indexOf(element);
        }
      });
    }

    return sortedArray;
  }

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
          </Ranking.TitleBar>

          <Ranking.Bar>
            <Ranking.BarSection>Pozycja</Ranking.BarSection>
            <Ranking.BarSection>Nazwa użytkownika</Ranking.BarSection>
            <Ranking.BarSection>Punkty</Ranking.BarSection>
          </Ranking.Bar>

          <Ranking.ListContainer>
            {usersArray().map((user, index) => {
              const currentUserRanking = index === currentUserIndex;
              if (user && index < usersArray().length) {
                return (
                  <User
                    key={index}
                    user={user}
                    index={index}
                    currentUserRanking={currentUserRanking}
                    length={usersArray().length}
                    photoURL={user.photoURL}
                  />
                );
              } else {
                return null;
              }
            })}
          </Ranking.ListContainer>
        </Ranking>
      </div>
      <FooterContainer />
    </>
  );
};

export default RankingPage;
