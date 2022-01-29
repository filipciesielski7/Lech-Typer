import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  // position: relative;
  // justify-content: space-around;
  flex-direction: column;
  height: 100%;
  min-height: 450px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  width: 97.5%;
  margin: auto;
  padding: 60px 68px 40px;

  @media (max-width: 950px) {
    max-width: 450px;
  }
  @media (max-width: 470px) {
    padding: 60px 28px 40px;
  }
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const SubTitle = styled(ReactRouterLink)`
  color: #737373;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 28px;
  display: flex;
  align-items: center;

  position: absolute;
  bottom: 4px;
  right: 0;

  &:hover {
    color: white;
  }
  @media (max-width: 470px) {
    bottom: 5px;
    font-size: 12px;
  }
  @media (max-width: 350px) {
    bottom: -20px;
    font-size: 10px;
  }
`;

export const TimeLeftContainer = styled.div`
  display ${({ active }) => (active ? "" : "none")};
  color: #737373;
  font-size: 16px;
  font-weight: 500;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

export const Timer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 7px;
  border-radius: 4px;
  background: white;
  margin: 20px auto;

  color: rgba(0, 0, 0, 0.75);
  font-weight: bold;

  @media (max-width: 950px) {
    font-size: 14px;
  }
  @media (max-width: 320px) {
    font-size: 12px;
  }

  color: ${({ remainingTime }) =>
    remainingTime ? "#ed4337" : "rgba(0, 0, 0, 0.75)"};
  animation: ${({ remainingTime }) =>
    remainingTime ? "pulse 1.8s infinite" : ""};

  @keyframes pulse {
    0% {
      transform: scale(0.96);
      box-shadow: 0 0 0 0 #ed4337;
    }

    50% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }

    100% {
      transform: scale(0.96);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
`;

export const ScoreInput = styled.input.attrs({ type: "number", min: "0" })`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  width: 20%;
  line-height: 50px;
  margin: 0 5%;
  &:disabled {
    cursor: not-allowed;
  }
  font-weight: bold;
  text-align: center;
  font-size: 27px;

  :not([step="any"])::-webkit-inner-spin-button,
  :not([step="any"])::-webkit-outer-spin-button {
    opacity: 1;
    border-left: 2px solid #bbb;
    opacity: 0.3;
  }
`;

export const Submit = styled.button`
  background: white;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: #022855;
  cursor: pointer;
  border: 1px solid white;
  transition: 0.5s;
  &:disabled {
    opacity: 0.5;
    &:hover {
      background: white;
      color: #022855;
      border: 1px solid white;
    }
  }
  &:hover {
    background: rgba(0, 0, 0, 0);
    color: white;
    border: 1px solid white;
  }
`;

export const ScoreContainer = styled.div`
  min-width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  text: center;
  margin-top: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const BallContainer = styled.div`
  // height: 400px;
  // width: 1600px;
  // border-radius: 8px;
  // position: absolute;
  // bottom: -10%;
  // left: 50%",
  // transform: translate(-50%, -50%);
  // border: 3px solid white;
  margin-top: 0px;
  height: 41%;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 950px) {
    display: none;
  }
`;
