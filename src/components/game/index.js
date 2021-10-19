import React from "react";
import {
  Container,
  TeamLogo,
  Round,
  // Username,
  // Points,
  // Position,
  // ProfileImage,
  // ProfileImageContainer,
} from "./styles/game";

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
    // <Container
    //   index={index}
    //   length={length}
    //   currentUserRanking={currentUserRanking}
    // >
    //   <Position position={position}>
    //     <p>{position ? `${position}.` : "0."}</p>
    //   </Position>
    //   <Username>
    //     <p>{user_name}</p>
    //   </Username>
    //   <Points>
    //     <p>{points}</p>
    //   </Points>

    //   {photoURL ? (
    //     <ProfileImageContainer>
    //       <ProfileImage src={photoURL} alt={user_name}></ProfileImage>
    //     </ProfileImageContainer>
    //   ) : null}
    // </Container>
    <Container index={index} length={length}>
      <Round>{index + 1}.</Round>
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

      <h3>
        {home_team} vs {game.away_team}
      </h3>

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
    </Container>
  );
};

export default Game;
