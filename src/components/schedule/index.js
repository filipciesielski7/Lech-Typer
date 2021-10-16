import React from "react";
import {
  Container,
  Title,
  SubTitle,
  TitleBar,
  ListContainer,
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

Schedule.TitleBar = function ScheduleTitleBar({ children, ...restProps }) {
  return <TitleBar {...restProps}>{children}</TitleBar>;
};

Schedule.ListContainer = function ScheduleListContainer({
  children,
  ...restProps
}) {
  return <ListContainer {...restProps}>{children}</ListContainer>;
};
