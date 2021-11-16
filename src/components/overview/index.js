import React from "react";
import {
  Container,
  Title,
  TitleBar,
  SubTitle,
  TimeLeftContainer,
} from "./styles/overview";

export default function Overview({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Overview.Title = function OverviewTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Overview.SubTitle = function OverviewSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Overview.TitleBar = function OverviewTitleBar({ children, ...restProps }) {
  return <TitleBar {...restProps}>{children}</TitleBar>;
};

Overview.TimeLeftContainer = function OverviewTimeLeftContainer({
  children,
  ...restProps
}) {
  return <TimeLeftContainer {...restProps}>{children}</TimeLeftContainer>;
};
