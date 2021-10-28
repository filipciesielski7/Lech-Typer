import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  @media (max-width: 950px) {
    justify-content: space-between;
  }
  align-items: center;

  padding: 40px;
  width: 100%;
  opacity: 0.8;

  &:hover {
    transform: scale(1.02);
    z-index: 1;
    opacity: 1;
    border-radius: 4px;
  }

  background: ${({ index }) => (index % 2 === 0 ? "#014B94" : "#022855")};
 
  border-top-left-radius: ${({ index}) =>
    index === 0 ? "4px" : "0px"};
  border-top-right-radius: ${({ index }) =>
    index === 0 ? "4px" : "0px"};
  border-bottom-left-radius: ${({ index, length }) =>
    index === length - 1 ? "4px" : "0px"};
  border-bottom-right-radius: ${({ index, length }) =>
    index === length - 1 ? "4px" : "0px"};
`;

export const TeamLogoContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TeamLogo = styled.img`
  margin-right: 50px;
  margin-left: 50px;
  @media (max-width: 400px) {
    margin-right: ${({ home }) => (home === true ? "70px" : "")};
    margin-left: ${({ home }) => (home === false ? "70px" : "")};
  }
`;

export const Round = styled.h3`
  margin-right: 50px;
  margin-left: 50px;
  @media (max-width: 950px) {
    display: none;
  }
`;

export const TeamInfo = styled.div`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: ${({ type }) => (type === "home" ? "end" : "start")};
  font-weight: ${({ winner }) => (winner === true ? "bold" : "")};
  @media (max-width: 950px) {
    display: none;
  }
`;

export const Result = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 950px) {
    width: 50%;
  }
  font-weight: ${({ home_score }) => (home_score !== "" ? "bold" : "")};
  font-size: ${({ home_score }) => (home_score !== "" ? "24px" : "16px")};
  @media (max-width: 950px) {
    font-size: ${({ home_score }) => (home_score !== "" ? "24px" : "15px")};
  }
  @media (max-width: 382px) {
    font-size: ${({ home_score }) => (home_score !== "" ? "24px" : "12px")};
  }
  @media (max-width: 300px) {
    display: ${({ home_score }) => (home_score !== "" ? "" : "none")};
  }
`;
