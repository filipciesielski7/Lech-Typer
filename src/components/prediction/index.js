import React from "react";
import {
  Container,
  Title,
  SubTitle,
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

Prediction.SubTitle = function PredictionSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Prediction.Text = function PredictionText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Prediction.GameContainer = function PredictionGameContainer({ children, ...restProps }) {
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