import React from "react";
import {
  Container,
  Title,
  TitleBar,
  SubTitle,
  Timer,
  TimeLeftContainer,
  ScoreInput,
  Submit,
  Form,
  BallContainer,
  ScoreContainer,
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

Overview.Timer = function OverviewTimer({ children, ...restProps }) {
  return <Timer {...restProps}>{children}</Timer>;
};

Overview.ScoreInput = function OverviewScoreInput({ children, ...restProps }) {
  return <ScoreInput {...restProps}>{children}</ScoreInput>;
};

Overview.Submit = function OverviewSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Overview.BallContainer = function OverviewBallContainer({
  children,
  ...restProps
}) {
  return <BallContainer {...restProps}>{children}</BallContainer>;
};

Overview.Form = function OverviewForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

Overview.ScoreContainer = function OverviewScoreContainer({
  children,
  ...restProps
}) {
  return <ScoreContainer {...restProps}>{children}</ScoreContainer>;
};

Overview.TimeLeftContainer = function OverviewTimeLeftContainer({
  children,
  ...restProps
}) {
  return <TimeLeftContainer {...restProps}>{children}</TimeLeftContainer>;
};
