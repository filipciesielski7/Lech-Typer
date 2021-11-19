import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  // position: relative;
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
