import React from "react";
import { Overview } from "../components";
import * as ROUTES from "../constants/routes";
import { BsArrowRight } from "react-icons/bs";
import { useAuth } from "../contexts/AuthContext";

export function OverviewContainer({ children }) {
  const { nextGame } = useAuth();

  // var endDate = new Date("2021-11-20T20:00:00").getTime();
  // const [active, setActive] = useState(false);
  // const [daysLeft, setDaysLeft] = useState("");
  // const [hoursLeft, setHoursLeft] = useState("");
  // const [minutesLeft, setMinutesLeft] = useState("");
  // const [secondsLeft, setSecondsLeft] = useState("");

  // useEffect(() => {
  //   if (componentMounted.current) {
  //     var countDownTimer = setInterval(() => {
  //       setActive(true);
  //       var now = new Date().getTime();
  //       var remainingTime = endDate - now;
  //       const second = 1000;
  //       const minute = second * 60;
  //       const hour = minute * 60;
  //       const day = hour * 24;
  //       setDaysLeft(Math.trunc(remainingTime / day));
  //       setHoursLeft(Math.trunc((remainingTime % day) / hour));
  //       setMinutesLeft(Math.trunc((remainingTime % hour) / minute));
  //       setSecondsLeft(Math.trunc((remainingTime % minute) / second));
  //       if (remainingTime <= 0) {
  //         clearInterval(countDownTimer);
  //         setActive(false);
  //       }
  //     }, 1000);
  //   }
  // }, [endDate]);

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
        <Overview.BetContainer>
          <p>{nextGame.date}</p>
        </Overview.BetContainer>
        {children}
      </Overview>
    </>
  );
}
