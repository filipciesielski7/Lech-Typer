import React from "react";
import {
  Container,
  Title,
  TitleBar,
  SubTitle,
  SubTitle2,
  Slider,
  Dots,
  Score,
  ActiveIcon,
  Section,
  Info,
  ScoreContainer,
  ForwardIcon,
  BackIcon,
  Text,
  GameContainer,
  Team,
  TeamLogo,
  TeamName,
} from "./styles/prediction";

export default function Prediction({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Prediction.Title = function PredictionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Prediction.TitleBar = function PredictionTitleBar({ children, ...restProps }) {
  return <TitleBar {...restProps}>{children}</TitleBar>;
};

Prediction.SubTitle2 = function PredictionSubTitle2({
  children,
  ...restProps
}) {
  return <SubTitle2 {...restProps}>{children}</SubTitle2>;
};

Prediction.Slider = function PredictionSlider({ children, ...restProps }) {
  return <Slider {...restProps}>{children}</Slider>;
};

Prediction.Info = function PredictionInfo({ children, ...restProps }) {
  return <Info {...restProps}>{children}</Info>;
};

Prediction.ScoreContainer = function PredictionScoreContainer({
  children,
  ...restProps
}) {
  return <ScoreContainer {...restProps}>{children}</ScoreContainer>;
};

Prediction.Dots = function PredictionDots({ children, ...restProps }) {
  return <Dots {...restProps}>{children}</Dots>;
};

Prediction.Score = function PredictionScore({ children, ...restProps }) {
  return <Score {...restProps}>{children}</Score>;
};

Prediction.ActiveIcon = function PredictionActiveIcon({
  children,
  ...restProps
}) {
  return <ActiveIcon {...restProps}>{children}</ActiveIcon>;
};

Prediction.ForwardIcon = function PredictionForwardIcon({
  children,
  ...restProps
}) {
  return <ForwardIcon {...restProps}>{children}</ForwardIcon>;
};

Prediction.BackIcon = function PredictionBackIcon({ children, ...restProps }) {
  return <BackIcon {...restProps}>{children}</BackIcon>;
};

Prediction.Section = function PredictionSection({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};

Prediction.SubTitle = function PredictionSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Prediction.Text = function PredictionText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Prediction.GameContainer = function PredictionGameContainer({
  children,
  ...restProps
}) {
  return <GameContainer {...restProps}>{children}</GameContainer>;
};

Prediction.Team = function PredictionTeam({ children, ...restProps }) {
  return <Team {...restProps}>{children}</Team>;
};

Prediction.TeamLogo = function PredictionTeamLogo({ children, ...restProps }) {
  return <TeamLogo {...restProps}>{children}</TeamLogo>;
};

Prediction.TeamName = function PredictionTeamName({ children, ...restProps }) {
  return <TeamName {...restProps}>{children}</TeamName>;
};
