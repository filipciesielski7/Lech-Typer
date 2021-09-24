import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 385px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  width: 97.5%;
  margin: auto;
  padding: 60px 68px 40px;
  margin-bottom: 15px;

  @media (max-width: 950px) {
    max-width: 450px;
  }
  @media (max-width: 470px) {
    padding: 60px 28px 40px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const SubTitle = styled.h1`
  color: #8c8c8c;
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 375px) {
    font-size: 15px;
  }
`;

export const GameContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 8px;
  margin-top: 30px;
`;

export const Team = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

export const TeamLogo = styled.img``;

export const TeamName = styled.p`
  color: #737373;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;

  @media (max-width: 350px) {
    font-size: 15px;
  }
`;

export const ForwardIcon = styled.span`
  position: absolute;
  right: 5%;
  top: 25%;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;

  color: ${({ click }) => (click ? "white" : "grey")};
  cursor: ${({ click }) => (click ? "pointer" : "")};

  &:hover {
    transform: ${({ click }) => (click ? "scale(1.3)" : "")};
  }
`;
export const BackIcon = styled.span`
  position: absolute;
  left: 5%;
  top: 25%;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;

  color: ${({ click }) => (click ? "white" : "grey")};
  cursor: ${({ click }) => (click ? "pointer" : "")};

  &:hover {
    transform: ${({ click }) => (click ? "scale(1.3)" : "")};
  }
`;

export const Slider = styled.div`
  display: inline-flex;
  justify-content: center;
  // flex-direction: column;
  // align-items: center;
  overflow: hidden;
  height: 100%;
  // border: 1px solid white;
`;

export const Section = styled.div`
  width: 100%;
  display: ${({ active }) => (!active ? "none" : "")};
`;

export const Dots = styled.div`
  position: absolute;
  bottom: 5%;
  color: grey;
`;

export const ActiveIcon = styled.span`
  cursor: pointer;
  @media (min-width: 950px) {
    margin: 2px;
  }
`;

export const ScoreContainer = styled.div`
  min-width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Score = styled.h1`
  color: white;
  @media (max-width: 380px) {
    font-size: 28px;
  }
  @media (max-width: 350px) {
    font-size: 26px;
  }
  @media (max-width: 320px) {
    font-size: 24px;
  }
  @media (max-width: 300px) {
    font-size: 22px;
  }
`;

export const Info = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  width: 30%;
  margin: 0 auto;
`;
