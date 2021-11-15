import React from "react";
import { Overview } from "../components";
import { useAuth } from "../contexts/AuthContext";

export function OverviewContainer({ children }) {
  const { currentUserBetsList } = useAuth();

  return (
    <>
      <Overview>
        <Overview.Title>Przegląd</Overview.Title>
        <p>{currentUserBetsList["0"]}</p>
        {children}
      </Overview>
    </>
  );
}
