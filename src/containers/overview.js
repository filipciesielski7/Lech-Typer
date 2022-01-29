import React, { useEffect, useState } from "react";
import { Form, Overview, Prediction } from "../components";
import * as ROUTES from "../constants/routes";
import { BsArrowRight } from "react-icons/bs";
import { useAuth } from "../contexts/AuthContext";
import Spinner from "react-spinner-material";
import { translate } from "../helpers/translate";

import { Suspense } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

// import { useLoader } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// const BallModel = () => {
//   const gltf = useLoader(GLTFLoader, "./images/model3D/ball.gltf");
//   return (
//     <>
//       <primitive object={gltf.scene} scale={1.5} />
//     </>
//   );
// };

const Scene = () => {
  return (
    <Canvas camera={{ position: [-15, -2, 0] }}>
      <Suspense fallback={null}>
        {/* <BallModel /> */}
        <OrbitControls />
        <Environment files={"./images/model3D/stadium.pic"} background />
      </Suspense>
    </Canvas>
  );
};

const defaultRemainingTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export function OverviewContainer({ children }) {
  const { nextGame, endDate, betsList, currentUser, currentUserBetsList, db } =
    useAuth();
  const [loading, setLoading] = useState(false);
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  const [active, setActive] = useState(false);
  const [homeScore, setHomeScore] = useState("");
  const [awayScore, setAwayScore] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event) {
    setLoading(true);
    event.preventDefault();
    setError("");

    if (homeScore === "" && awayScore !== "") {
      setHomeScore(
        currentUserBetsList && nextGame
          ? currentUserBetsList[nextGame.game_id].slice(
              0,
              currentUserBetsList[nextGame.game_id].indexOf(":")
            )
          : null
      );
    }
    if (awayScore === "" && homeScore !== "") {
      setAwayScore(
        currentUserBetsList && nextGame
          ? currentUserBetsList[nextGame.game_id].slice(
              currentUserBetsList[nextGame.game_id].indexOf(":") + 1
            )
          : null
      );
    }

    if (homeScore !== "" && awayScore !== "") {
      const bets = db.ref("bets");
      bets
        .child(`${currentUser.uid}/${nextGame.game_id}`)
        .set(`${homeScore}:${awayScore}`)
        .then(() => {
          window.location.reload();
        })
        .catch((error) => {
          setError(translate(error.message));
        });
    } else if (
      homeScore === "" &&
      awayScore !== "" &&
      currentUserBetsList[nextGame.game_id] !== ""
    ) {
      setError(
        `Czy na pewno chcesz wykorzystać poprzednio ustawioną liczbę goli dla zespołu ${nextGame.home_team}?`
      );
    } else if (
      homeScore !== "" &&
      awayScore === "" &&
      currentUserBetsList[nextGame.game_id] !== ""
    ) {
      setError(
        `Czy na pewno chcesz wykorzystać poprzednio ustawioną liczbę goli dla zespołu ${nextGame.away_team}?`
      );
    } else {
      setError("Uzupełnij wynik meczu");
    }

    setLoading(false);
  }

  useEffect(() => {
    var countDownTimer = setInterval(() => {
      if (endDate !== undefined) {
        setActive(true);
        var now = new Date().getTime();
        var remainingTime = endDate - now;
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const tempDefaultRemainingTime = {
          days: Math.trunc(remainingTime / day),
          hours: Math.trunc((remainingTime % day) / hour),
          minutes: Math.trunc((remainingTime % hour) / minute),
          seconds: Math.trunc((remainingTime % minute) / second),
        };
        setRemainingTime(tempDefaultRemainingTime);

        if (remainingTime <= 0) {
          clearInterval(countDownTimer);
          setRemainingTime(defaultRemainingTime);
          setActive(false);
        }
      }
    }, 100);
    return () => clearInterval(countDownTimer);
  }, [endDate, nextGame, betsList, currentUser]);

  return (
    <>
      <Overview style={{ position: "relative", overflow: "hidden" }}>
        <Overview.TitleBar>
          <Overview.Title>Typowanie</Overview.Title>
          <Overview.SubTitle to={ROUTES.SCHEDULE}>
            Pełny terminarz
            <BsArrowRight
              style={{
                marginLeft: "5px",
              }}
            />
          </Overview.SubTitle>
        </Overview.TitleBar>
        <Overview.TimeLeftContainer active={true}>
          {active
            ? "Typowanie aktywne. Do nastepnego meczu pozostało:"
            : "Typowanie nieaktywne. Mecz rozpoczął się:"}
          <Overview.Timer
            remainingTime={
              remainingTime.days === 0 &&
              remainingTime.hours === 0 &&
              remainingTime.minutes === 0 &&
              remainingTime.seconds > 0
            }
          >
            {remainingTime.days === 0 &&
            remainingTime.hours === 0 &&
            remainingTime.minutes === 0 &&
            remainingTime.seconds === 0
              ? nextGame
                ? nextGame.date.slice(0, 10) +
                  " o godzinie " +
                  nextGame.date.slice(-5)
                : null
              : remainingTime.days +
                " dni " +
                remainingTime.hours +
                " godzin " +
                remainingTime.minutes +
                " minut i " +
                remainingTime.seconds +
                " sekund "}
          </Overview.Timer>
        </Overview.TimeLeftContainer>
        <Prediction.GameContainer>
          <Prediction.Team>
            <Prediction.TeamLogo
              src={
                process.env.PUBLIC_URL +
                `/images/teams_logo/${
                  nextGame ? nextGame.home_team.replace(" ", "") : null
                }.png`
              }
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `${nextGame ? nextGame.home_team_logo : null}`;
              }}
              alt={nextGame ? nextGame.home_team : null}
            />
            <Prediction.TeamName>
              {nextGame ? nextGame.home_team : null}
            </Prediction.TeamName>
          </Prediction.Team>

          <Prediction.Team>
            <Prediction.TeamLogo
              src={
                process.env.PUBLIC_URL +
                `/images/teams_logo/${
                  nextGame ? nextGame.away_team.replace(" ", "") : null
                }.png`
              }
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `${nextGame ? nextGame.away_team_logo : null}`;
              }}
              alt={nextGame ? nextGame.away_team : null}
            />
            <Prediction.TeamName>
              {nextGame ? nextGame.away_team : null}
            </Prediction.TeamName>
          </Prediction.Team>
        </Prediction.GameContainer>
        <Form.Base method="POST" onSubmit={handleSubmit}>
          <Overview.ScoreContainer>
            <Overview.ScoreInput
              value={homeScore}
              id="HomeScore"
              onChange={({ target }) => {
                setHomeScore(target.value);
              }}
              placeholder={
                currentUserBetsList && nextGame
                  ? currentUserBetsList[nextGame.game_id].slice(
                      0,
                      currentUserBetsList[nextGame.game_id].indexOf(":")
                    )
                  : null
              }
            ></Overview.ScoreInput>
            <Prediction.Score>{" : "}</Prediction.Score>
            <Overview.ScoreInput
              value={awayScore}
              id="AwayScore"
              onChange={({ target }) => {
                setAwayScore(target.value);
              }}
              placeholder={
                currentUserBetsList && nextGame
                  ? currentUserBetsList[nextGame.game_id].slice(
                      currentUserBetsList[nextGame.game_id].indexOf(":") + 1
                    )
                  : null
              }
            ></Overview.ScoreInput>
          </Overview.ScoreContainer>
          <Form.Submit type="submit" disabled={!active}>
            {loading ? (
              <Form.LoadingIcon>
                <Spinner
                  radius={25}
                  color={"#1d9cf0"}
                  stroke={3}
                  visible={true}
                />
              </Form.LoadingIcon>
            ) : currentUserBetsList && nextGame ? (
              currentUserBetsList[nextGame.game_id] !== "" ? (
                "Zaktualizuj wynik"
              ) : (
                "Obstaw wynik"
              )
            ) : null}
          </Form.Submit>
        </Form.Base>
        {error && <Form.Error>{error}</Form.Error>}

        <Overview.BallContainer style={{ marginTop: "20px" }}>
          <Scene />
        </Overview.BallContainer>

        {children}
      </Overview>
    </>
  );
}
