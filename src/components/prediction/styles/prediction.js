import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 360px;
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

export const TeamLogo = styled.img`

`;

export const TeamName = styled.p`
  color: #737373;
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  text-align: center;
`;
