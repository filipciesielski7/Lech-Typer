import React from "react";
import { Container, Title, Bar, BarSection } from "./styles/ranking";

export default function Ranking({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Ranking.Title = function RankingTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Ranking.Bar = function RankingBar({ children, ...restProps }) {
  return <Bar {...restProps}>{children}</Bar>;
};

Ranking.BarSection = function RankingBarSection({ children, ...restProps }) {
  return <BarSection {...restProps}>{children}</BarSection>;
};
