import React from "react";
import { Prediction, Flexbox } from "../components";

export function PredictionContainer({ children }) {
  return (
    <>
      <Prediction>
        <Prediction.Title>Następny mecz</Prediction.Title>
        {/* <Prediction.SubTitle>Następny mecz</Prediction.SubTitle> */}
        <Prediction.Text>
          PKO Ekstraklasa 28.08.2021 sobota 17:30
        </Prediction.Text>
        <Prediction.GameContainer>
          <Prediction.Team>
            <Prediction.TeamLogo
              src="https://www.lechpoznan.pl/files/cache/f/6/rth_0x103_f6c7090f58925f0d927da070091dd0631625325501.png"
              alt="Lech"
            />
            <Prediction.TeamName>Lech Poznań</Prediction.TeamName>
          </Prediction.Team>

          <Prediction.Team>
            <Prediction.TeamLogo
              src="https://www.lechpoznan.pl/files/cache/7/b/rth_0x103_7bb17a5b5a7ea6663cc54581683840e41614764734.png"
              alt="Pogoń"
            />
            <Prediction.TeamName>Pogoń Szczecin</Prediction.TeamName>
          </Prediction.Team>
        </Prediction.GameContainer>
        {children}
      </Prediction>
    </>
  );
}
