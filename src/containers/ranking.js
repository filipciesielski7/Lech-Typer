import React, { useState, useEffect } from "react";
import { Ranking, User } from "../components";
import { useAuth } from "../contexts/AuthContext";

export function RankingContainer({ children }) {
  const { db } = useAuth();
  const [usersList, setUsersList] = useState([]);

  useEffect(() => {
    const usersArray = [];
    const users = db.ref("users");
    users.on("value", (snapshot) => {
      for (const [, value] of Object.entries(snapshot.val())) {
        usersArray.push({
          user_name: value.user_name,
          user_id: value.user_id,
          points: value.points,
        });
      }
    });
    setUsersList(usersArray);
  }, [db]);

  return (
    <>
      <Ranking>
        <Ranking.Title>Ranking</Ranking.Title>
        <Ranking.Bar>
          <Ranking.BarSection>Pozycja</Ranking.BarSection>
          <Ranking.BarSection>Nazwa uzytkownika</Ranking.BarSection>
          <Ranking.BarSection>Punkty</Ranking.BarSection>
        </Ranking.Bar>
        {usersList.map((user) => {
          return <User key={user.user_id} user={user} />;
        })}
        {children}
      </Ranking>
    </>
  );
}
