import React from "react";
import { Overview } from "../components";

export function OverviewContainer({ children }) {
  return (
    <>
      <Overview>
        <Overview.Title>Przegląd</Overview.Title>
        {children}
      </Overview>
    </>
  );
}
