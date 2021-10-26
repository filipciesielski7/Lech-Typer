import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
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
  @media (max-width: 950px) {
    width: 40%;
  }
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
  @media (max-width: 950px) {
    display: none;
  }
  font-weight: bold;
`;

export const Result = styled.div`
  width: 10%;
  @media (max-width: 950px) {
    width: 20%;
  }
`;
