import React from "react";
import { Prediction } from "../components";
import { useAuth } from "../contexts/AuthContext";

export function PredictionContainer({ children }) {
  const { getGamesList } = useAuth();
  const nextGame = getGamesList().find((element) => element.home_score === "");

  return (
    <>
      <Prediction>
        <Prediction.Title>Następny mecz</Prediction.Title>
        {/* <Prediction.SubTitle>Następny mecz</Prediction.SubTitle> */}
        <Prediction.Text>
          {nextGame ? nextGame.type : null} {nextGame ? nextGame.date : null}
        </Prediction.Text>
        <Prediction.GameContainer>
          <Prediction.Team>
            <Prediction.TeamLogo
              src={nextGame ? nextGame.home_team_logo : null}
              alt={nextGame ? nextGame.home_team : null}
            />
            <Prediction.TeamName>
              {nextGame ? nextGame.home_team : null}
            </Prediction.TeamName>
          </Prediction.Team>

          <Prediction.Team>
            <Prediction.TeamLogo
              src={nextGame ? nextGame.away_team_logo : null}
              alt={nextGame ? nextGame.away_team : null}
            />
            <Prediction.TeamName>
              {nextGame ? nextGame.away_team : null}
            </Prediction.TeamName>
          </Prediction.Team>
        </Prediction.GameContainer>
        {children}
      </Prediction>
    </>
  );
}
