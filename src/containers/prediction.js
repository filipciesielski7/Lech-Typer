import React from "react";
import { Prediction } from "../components";

export function PredictionContainer({ children }) {
  return (
    <>
      <Prediction>
        <Prediction.Title>Następny mecz</Prediction.Title>
        {/* <Prediction.SubTitle>Następny mecz</Prediction.SubTitle> */}
        <Prediction.Text>
          PKO Ekstraklasa 12.09.2021 niedziela 17:30
        </Prediction.Text>
        <Prediction.GameContainer>
          <Prediction.Team>
            <Prediction.TeamLogo
              src="https://www.lechpoznan.pl/files/cache/7/5/rth_0x85_752d6e3b9f8fc1cc5865bb599b296e8c1540020634.png"
              alt="Raków"
            />
            <Prediction.TeamName>Raków Częstochowa</Prediction.TeamName>
          </Prediction.Team>

          <Prediction.Team>
            <Prediction.TeamLogo
              src="https://www.lechpoznan.pl/files/cache/f/6/rth_0x85_f6c7090f58925f0d927da070091dd0631625325501.png"
              alt="Lech"
            />
            <Prediction.TeamName>Lech Poznań</Prediction.TeamName>
          </Prediction.Team>
        </Prediction.GameContainer>
        {children}
      </Prediction>
    </>
  );
}
