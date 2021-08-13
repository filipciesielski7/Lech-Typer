import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 165px 45px;
`;

export const Title = styled.h1`
  color: white;
  max-width: 640px;
  font-size: 50px;
  font-weight: 500;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export const SubTitle = styled.h2`
  color: white;
  font-size: 26px;
  font-weight: normal;
  margin: 16px auto;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: white;
  color: #022855;
  width: 183px;
  height: fit-content;
  border: 0;
  font-size: 20px;
  border-radius: 4px;
  padding: 15px 17px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s;
  border: 1px solid white;

  margin: 35px auto;
  &:hover {
    background: #022855;
    color: white;
  }

  @media (max-width: 600px) {
    width: 163px;
    font-size: 16px;
  }
`;
