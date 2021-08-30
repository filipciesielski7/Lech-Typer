import React from "react";
import {
  Container,
  Title,
  Bar,
  BarSection,
  ListContainer,
  ListBreak,
} from "./styles/ranking";

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

Ranking.ListContainer = function RankingListContainer({
  children,
  ...restProps
}) {
  return <ListContainer {...restProps}>{children}</ListContainer>;
};

Ranking.ListBreak = function RankingListBreak({
  children,
  ...restProps
}) {
  return <ListBreak {...restProps}>{children}</ListBreak>;
};
