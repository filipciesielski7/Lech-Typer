import React from "react";
import {
  Container,
  Title,
  SubTitle,
  Bar,
  BarSection,
  TitleBar,
  ListContainer,
  Selection,
  SearchBar,
  SearchContainer,
  SearchSmallContainer,
  SearchIcon,
  EmptyResults,
} from "./styles/schedule";

export default function Schedule({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Schedule.Title = function ScheduleTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Schedule.SubTitle = function ScheduleSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Schedule.Bar = function ScheduleBar({ children, ...restProps }) {
  return <Bar {...restProps}>{children}</Bar>;
};

Schedule.BarSection = function ScheduleBarSection({ children, ...restProps }) {
  return <BarSection {...restProps}>{children}</BarSection>;
};

Schedule.TitleBar = function ScheduleTitleBar({ children, ...restProps }) {
  return <TitleBar {...restProps}>{children}</TitleBar>;
};

Schedule.Selection = function ScheduleSelection({ children, ...restProps }) {
  return <Selection {...restProps}>{children}</Selection>;
};

Schedule.SearchBar = function ScheduleSearchBar({ children, ...restProps }) {
  return <SearchBar {...restProps}>{children}</SearchBar>;
};

Schedule.EmptyResults = function ScheduleEmptyResults({
  children,
  ...restProps
}) {
  return <EmptyResults {...restProps}>{children}</EmptyResults>;
};

Schedule.SearchContainer = function ScheduleSearchContainer({
  children,
  ...restProps
}) {
  return <SearchContainer {...restProps}>{children}</SearchContainer>;
};

Schedule.SearchSmallContainer = function ScheduleSearchSmallContainer({
  children,
  ...restProps
}) {
  return <SearchSmallContainer {...restProps}>{children}</SearchSmallContainer>;
};

Schedule.SearchIcon = function ScheduleSearchIcon({ children, ...restProps }) {
  return <SearchIcon {...restProps}>{children}</SearchIcon>;
};

Schedule.ListContainer = function ScheduleListContainer({
  children,
  ...restProps
}) {
  return <ListContainer {...restProps}>{children}</ListContainer>;
};
