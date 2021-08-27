import React from "react";
import { Ranking, User } from "../components";
import { useAuth } from "../contexts/AuthContext";

export function RankingContainer({ children }) {
  const { getUsersList } = useAuth();

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
      return a.points > b.points ? 1 : -1;
    });

    const sortedArray = array.slice(0, 7);
    // sortedArray.push(array[array.length - 1]);
    return sortedArray;
  }

  return (
    <>
      <Ranking>
        <Ranking.Title>Ranking</Ranking.Title>
        <Ranking.Bar>
          <Ranking.BarSection>Pozycja</Ranking.BarSection>
          <Ranking.BarSection>Nazwa uzytkownika</Ranking.BarSection>
          <Ranking.BarSection>Punkty</Ranking.BarSection>
        </Ranking.Bar>
        {usersArray().map((user, index) => {
          if (user) {
            return <User key={index} user={user} photoURL={user.photoURL} />;
          } else {
            return null;
          }
        })}
        {children}
      </Ranking>
    </>
  );
}
