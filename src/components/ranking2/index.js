import React from "react";
import {
  Container,
  Title,
  SubTitle,
  TitleBar,
  Bar,
  EmptyResults,
  SearchBar,
  SearchIcon,
  SearchContainer,
  SearchSmallContainer,
  BarSection,
  ListContainer,
  Selection,
  ListBreak,
} from "./styles/ranking";

export default function Ranking({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Ranking.Title = function RankingTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Ranking.SubTitle = function RankingSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Ranking.TitleBar = function RankingTitleBar({ children, ...restProps }) {
  return <TitleBar {...restProps}>{children}</TitleBar>;
};

Ranking.EmptyResults = function RankingEmptyResults({
  children,
  ...restProps
}) {
  return <EmptyResults {...restProps}>{children}</EmptyResults>;
};

Ranking.Bar = function RankingBar({ children, ...restProps }) {
  return <Bar {...restProps}>{children}</Bar>;
};

Ranking.SearchBar = function RankingSearchBar({ children, ...restProps }) {
  return <SearchBar {...restProps}>{children}</SearchBar>;
};

Ranking.SearchIcon = function RankingSearchIcon({ children, ...restProps }) {
  return <SearchIcon {...restProps}>{children}</SearchIcon>;
};

Ranking.SearchContainer = function RankingSearchContainer({
  children,
  ...restProps
}) {
  return <SearchContainer {...restProps}>{children}</SearchContainer>;
};

Ranking.SearchSmallContainer = function RankingSearchSmallContainer({
  children,
  ...restProps
}) {
  return <SearchSmallContainer {...restProps}>{children}</SearchSmallContainer>;
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

Ranking.Selection = function RankingSelection({ children, ...restProps }) {
  return <Selection {...restProps}>{children}</Selection>;
};

Ranking.ListBreak = function RankingListBreak({ children, ...restProps }) {
  return <ListBreak {...restProps}>{children}</ListBreak>;
};
