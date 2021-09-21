import React from "react";
import { Ranking, User } from "../components";
import { useAuth } from "../contexts/AuthContext";
import { BsThreeDots, BsArrowRight } from "react-icons/bs";
import * as ROUTES from "../constants/routes";
import { ImTwitter } from "react-icons/im";

export function RankingContainer({ children }) {
  const { getUsersList, currentUser } = useAuth();
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
      const max_size = 5; // RANKING LIST SIZE
      const newArray = addPositionsToArray(array, username, max_size);

      sortedArray = newArray.slice(0, max_size);

      newArray.forEach((element) => {
        if (element.user_name === username) {
          if (sortedArray.includes(element) && array.length > max_size) {
            currentUserIndex = sortedArray.indexOf(element);
            sortedArray.push(array[array.length - 1]);
          } else if (array.length > max_size) {
            currentUserIndex = sortedArray.length;
            sortedArray.push(element);
          }
        }
      });
    }

    return sortedArray;
  }

  return (
    <>
      <Ranking>
        <Ranking.TitleBar>
          <Ranking.Title>Ranking</Ranking.Title>
          <Ranking.SubTitle to={ROUTES.RANKING}>
            Pokaż całość
            <BsArrowRight
              style={{
                marginLeft: "5px",
              }}
            />
          </Ranking.SubTitle>
        </Ranking.TitleBar>

        <Ranking.Bar>
          <Ranking.BarSection>Pozycja</Ranking.BarSection>
          <Ranking.BarSection>Nazwa użytkownika</Ranking.BarSection>
          <Ranking.BarSection>Punkty</Ranking.BarSection>
          <ImTwitter
            size="20px"
            className="twitterLogo"
          />
        </Ranking.Bar>
        <Ranking.ListContainer>
          {usersArray().map((user, index) => {
            const currentUserRanking = index === currentUserIndex;
            if (user && index < usersArray().length - 1) {
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
            } else if (user && index === usersArray().length - 1) {
              return (
                <React.Fragment key={index}>
                  <Ranking.ListBreak to={ROUTES.RANKING}>
                    <BsThreeDots />
                  </Ranking.ListBreak>
                  <User
                    key={index}
                    user={user}
                    index={index}
                    currentUserRanking={currentUserRanking}
                    length={usersArray().length}
                    photoURL={user.photoURL}
                  />
                </React.Fragment>
              );
            } else {
              return null;
            }
          })}
        </Ranking.ListContainer>

        {children}
      </Ranking>
    </>
  );
}
