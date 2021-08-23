import React from "react";
import {
  Container,
  Title,
} from "./styles/ranking";

export default function Ranking({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Ranking.Title = function RankingTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
