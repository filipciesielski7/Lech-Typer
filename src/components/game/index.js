import React from "react";
import {
  Container,
  TeamLogo,
  TeamLogoContainer,
  TeamInfo,
  Result,
  Round,
} from "./styles/game";

const Game = ({ index, game, length, betsList }) => {
  const {
    away_score,
    away_team,
    away_team_logo,
    date,
    home_score,
    home_team,
    home_team_logo,
    game_id,
    type,
    // type_logo,
  } = game;

  const [game_date, day_name] = date.split(" ");

  return (
    <Container index={index} length={length}>
      <Round>
        {type === "PKO EKSTRAKLASA" ? game_id.toString().concat(".") : game_id}
        {betsList[`${game_id}`]}
      </Round>
      <TeamInfo type="home" winner={away_score < home_score}>
        {home_team}
      </TeamInfo>
      <TeamLogoContainer>
        <TeamLogo
          home={true}
          src={
            process.env.PUBLIC_URL +
            `/images/teams_logo/${home_team.replace(" ", "")}.png`
          }
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `${home_team_logo}`;
          }}
          alt={home_team}
        />
      </TeamLogoContainer>

      <Result home_score={home_score}>
        {home_score}{" "}
        {home_score !== ""
          ? ":"
          : `${day_name} 
          ${"\n"} ${game_date}`}{" "}
        {away_score}
      </Result>

      <TeamLogoContainer>
        <TeamLogo
          home={false}
          src={
            process.env.PUBLIC_URL +
            `/images/teams_logo/${away_team.replace(" ", "")}.png`
          }
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `${away_team_logo}`;
          }}
          alt={away_team}
        />
      </TeamLogoContainer>
      <TeamInfo type="away" winner={away_score > home_score}>
        {game.away_team}
      </TeamInfo>
    </Container>
  );
};

export default Game;
