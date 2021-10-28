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
  border-radius: ${({ index, length }) =>
    index === length - 1 || index === 0 ? "4px" : "0px"};
  border-bottom-left-radius: ${({ index, length }) =>
    index === length - 2 || index === length - 1 ? "4px" : "0px"};
  border-bottom-right-radius: ${({ index, length }) =>
    index === length - 2 || index === length - 1 ? "4px" : "0px"};
`;

export const TeamLogoContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  // @media (max-width: 950px) {
  //   width: 30%;
  // }
`;

export const TeamLogo = styled.img`
  margin-right: 50px;
  margin-left: 50px;
  // @media (max-width: 950px) {
  //   display: none;
  // }
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
  @media (max-width: 950px) {
    width: 50%;
  }
  font-weight: bold;
  font-size: 24px;
`;

export const DateContainer = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-item: center;
  justify-content: center;
`;
