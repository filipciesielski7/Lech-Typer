import React from "react";
import { translate } from "../../helpers/translate";
import {
  Container,
  TeamLogo,
  TeamLogoContainer,
  TeamInfo,
  Result,
  DateContainer,
} from "./styles/game";

const Game = ({ index, game, length }) => {
  const {
    away_score,
    away_team,
    away_team_logo,
    date,
    home_score,
    home_team,
    home_team_logo,
    // type,
    type_logo,
  } = game;

  const [game_date, day_name, time] = date.split(" ");
  console.log(game_date);
  const [day_date, month, year] = game_date.split(".");
  console.log(day_date);

  return (
    <Container index={index} length={length}>
      {/* {home_score === "" ? (
        <DateContainer>
          {day_name.toUpperCase()} {day_date} {translate(month)} {year}{" "}
          {time !== "00:00" ? time : null}
        </DateContainer>
      ) : null} */}
      <TeamInfo type="home" winner={away_score < home_score}>
        {home_team}
      </TeamInfo>
      <TeamLogoContainer>
        <TeamLogo
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

      <Result>
        {home_score} {home_score !== "" ? ":" : null} {away_score}
      </Result>

      <TeamLogoContainer>
        <TeamLogo
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
