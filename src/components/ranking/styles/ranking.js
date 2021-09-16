import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  width: 97.5%;
  margin: auto;
  padding: 60px 68px 40px;

  @media (max-width: 950px) {
    margin-bottom: 15px;
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

export const SubTitle = styled(ReactRouterLink)`
  color: #737373;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 28px;
  display: flex;
  align-items: center;

  &:hover {
    color: white;
  }
  @media (max-width: 470px) {
    font-size: 12px;
  }
  @media (max-width: 300px) {
    font-size: 10px;
  }
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 950px) {
    align-items: center;
  }
`;

export const Bar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  padding: 7px;
  margin-bottom: 10px;
  background: white;
`;

export const BarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #737373;
  font-size: 14px;
  font-weight: 500;
  margin: 10px;
`;

export const ListContainer = styled.div`
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const ListBreak = styled(ReactRouterLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  color: white;

  &:hover {
    transform: scale(1.3);
  }
`;
