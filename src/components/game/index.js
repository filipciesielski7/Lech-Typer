import React from "react";
import { Container, TeamLogo, TeamLogoContainer, TeamInfo, Result } from "./styles/game";

const Game = ({ index, game, length }) => {
  const {
    // away_score,
    away_team,
    away_team_logo,
    // date,
    // home_score,
    home_team,
    home_team_logo,
    // type,
    // type_logo,
  } = game;

  return (
    <Container index={index} length={length}>
      <TeamLogoContainer>
        <TeamLogo
          src={
            process.env.PUBLIC_URL +
            `/images/teams_logo/${home_team.replace(" ", "")}.png`
          }
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = { home_team_logo };
          }}
          alt={home_team}
        />
      </TeamLogoContainer>
      <TeamInfo type="home">{home_team}</TeamInfo>

      <Result></Result>

      <TeamInfo type="away">{game.away_team}</TeamInfo>
      <TeamLogoContainer>
        <TeamLogo
          src={
            process.env.PUBLIC_URL +
            `/images/teams_logo/${away_team.replace(" ", "")}.png`
          }
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = { away_team_logo };
          }}
          alt={away_team}
        />
      </TeamLogoContainer>
    </Container>
  );
};

export default Game;
