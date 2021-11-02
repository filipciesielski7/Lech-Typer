import React from "react";
import { Overview } from "../components";
// import { useAuth } from "../contexts/AuthContext";

export function OverviewContainer({ children }) {
  // const { betsList } = useAuth();

  return (
    <>
      <Overview>
        <Overview.Title>Przegląd</Overview.Title>
        {/* <p>{betsList[0] !== undefined ? betsList[0].user : null}</p> */}
        {children}
      </Overview>
    </>
  );
}
