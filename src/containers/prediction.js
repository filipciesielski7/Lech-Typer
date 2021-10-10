import React, { useState, useEffect } from "react";
import { Prediction } from "../components";
import { useAuth } from "../contexts/AuthContext";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import * as ROUTES from "../constants/routes";
import {
  RiCheckboxBlankCircleFill,
  RiCheckboxBlankCircleLine,
} from "react-icons/ri";

export function PredictionContainer({ children }) {
  const { getGamesList } = useAuth();
  const [active, setActive] = useState(0);
  const [activeDot, setActiveDot] = useState(2);
  const nextGame = getGamesList().find((element) => element.home_score === "");

  useEffect(() => {
    const nextGame = getGamesList().find(
      (element) => element.home_score === ""
    );
    setActive(
      getGamesList().findIndex(
        (element) => element.game_id === nextGame.game_id
      )
    );
  }, [getGamesList]);

  let nextGameIndex = getGamesList().findIndex(
    (element) => element.game_id === nextGame.game_id
  );
  const numberOfNextAndPreviousGames = 2;

  let numberOfGames;
  if (nextGameIndex >= 2) {
    numberOfGames = 5;
  } else {
    numberOfGames = nextGameIndex + 3;
  }

  return (
    <>
      <Prediction>
        <Prediction.Slider>
          {getGamesList().map((Game, index) => {
            let indexArray = [nextGameIndex];
            for (let i = 1; i <= numberOfNextAndPreviousGames; i++) {
              indexArray.push(nextGameIndex - i);
              indexArray.push(nextGameIndex + i);
            }
            if (indexArray.includes(index) && !Game.date.includes("00:00")) {
              return (
                <Prediction.Section
                  key={Game.game_id}
                  active={index === active}
                >
                  <Prediction.TitleBar>
                    {index === nextGameIndex ? (
                      <Prediction.Title>Następny mecz</Prediction.Title>
                    ) : null}
                    {index < nextGameIndex ? (
                      <Prediction.Title>Poprzedni mecz</Prediction.Title>
                    ) : null}
                    {index > nextGameIndex ? (
                      <Prediction.Title>Kolejny mecz</Prediction.Title>
                    ) : null}

                    <Prediction.SubTitle2 to={ROUTES.SCHEDULE}>
                      Pełny terminarz
                      <BsArrowRight
                        style={{
                          marginLeft: "5px",
                        }}
                      />
                    </Prediction.SubTitle2>
                  </Prediction.TitleBar>

                  <Prediction.Text>
                    {Game ? Game.type : null} {Game ? Game.date : null}
                  </Prediction.Text>

                  {/* <Prediction.Info>
                    <Prediction.TeamLogo
                      src={Game ? Game.type_logo : null}
                      alt={Game ? Game.type : null}
                    />
                  </Prediction.Info> */}

                  <Prediction.GameContainer>
                    <Prediction.Team>
                      <Prediction.TeamLogo
                        src={Game ? Game.home_team_logo : null}
                        alt={Game ? Game.home_team : null}
                      />
                      <Prediction.TeamName>
                        {Game ? Game.home_team : null}
                      </Prediction.TeamName>
                    </Prediction.Team>

                    <Prediction.ScoreContainer>
                      {index < nextGameIndex ? (
                        Game ? (
                          <Prediction.Score>
                            {`${Game.home_score} : ${Game.away_score}`}
                          </Prediction.Score>
                        ) : null
                      ) : null}
                    </Prediction.ScoreContainer>

                    <Prediction.Team>
                      <Prediction.TeamLogo
                        src={Game ? Game.away_team_logo : null}
                        alt={Game ? Game.away_team : null}
                      />
                      <Prediction.TeamName>
                        {Game ? Game.away_team : null}
                      </Prediction.TeamName>
                    </Prediction.Team>
                  </Prediction.GameContainer>
                </Prediction.Section>
              );
            } else {
              return null;
            }
          })}
          <Prediction.Dots>
            {[...Array(numberOfGames)].map((element, index) => {
              if (numberOfGames < 5) {
                return (
                  <Prediction.ActiveIcon key={index}>
                    {index === active ? (
                      <RiCheckboxBlankCircleFill color={"white"} />
                    ) : (
                      <RiCheckboxBlankCircleLine
                        onClick={() => {
                          setActive(nextGameIndex + index - 2);
                          setActiveDot(index);
                        }}
                      />
                    )}
                  </Prediction.ActiveIcon>
                );
              } else {
                return (
                  <Prediction.ActiveIcon key={index}>
                    {index === activeDot ? (
                      <RiCheckboxBlankCircleFill color={"white"} />
                    ) : (
                      <RiCheckboxBlankCircleLine
                        onClick={() => {
                          setActive(nextGameIndex + index - 2);
                          setActiveDot(index);
                        }}
                      />
                    )}
                  </Prediction.ActiveIcon>
                );
              }
            })}
          </Prediction.Dots>
        </Prediction.Slider>
        <Prediction.ForwardIcon
          onClick={() => {
            if (active < nextGameIndex + numberOfNextAndPreviousGames) {
              setActive(active + 1);
              setActiveDot(activeDot + 1);
            }
          }}
          click={active < nextGameIndex + numberOfNextAndPreviousGames}
        >
          <IoIosArrowForward />
        </Prediction.ForwardIcon>
        <Prediction.BackIcon
          onClick={() => {
            if (
              active > 0 &&
              active > nextGameIndex - numberOfNextAndPreviousGames
            ) {
              setActive(active - 1);
              setActiveDot(activeDot - 1);
            }
          }}
          click={
            active > 0 && active > nextGameIndex - numberOfNextAndPreviousGames
          }
        >
          <IoIosArrowBack />
        </Prediction.BackIcon>
        {children}
      </Prediction>
    </>
  );
}
