import React, { useEffect, useState } from "react";
import { Overview } from "../components";
import * as ROUTES from "../constants/routes";
import { BsArrowRight } from "react-icons/bs";
import { useAuth } from "../contexts/AuthContext";

const defaultRemainingTime = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

export function OverviewContainer({ children }) {
  const { nextGame, endDate } = useAuth();
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
  const [active, setActive] = useState(false);

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
          setActive(false);
        }
      }
    }, 100);
    return () => clearInterval(countDownTimer);
  }, [endDate, nextGame]);

  return (
    <>
      <Overview>
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
        <Overview.TimeLeftContainer active={active}>
          <p>Typowanie aktywne. Do meczu nr. {nextGame.game_id} pozostało:</p>
          <p>
            {remainingTime.days + " dni "}
            {remainingTime.hours + " godzin "}
            {remainingTime.minutes + " minut i "}
            {remainingTime.seconds + " sekund "}
          </p>
        </Overview.TimeLeftContainer>
        {children}
      </Overview>
    </>
  );
}
