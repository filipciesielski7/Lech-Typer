import React from "react";
import { Ranking } from "../components";

export function RankingContainer({ children }) {
  return (
    <>
      <Ranking>
        <Ranking.Title>Ranking</Ranking.Title>
        {children}
      </Ranking>
    </>
  );
}
