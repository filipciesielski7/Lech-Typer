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

export const TeamLogo = styled.img`
  margin-right: 50px;
  margin-left: 50px;
  @media (max-width: 950px) {
    display: none;
  }
`;

export const Round = styled.h3`
  margin-right: 50px;
  margin-left: 50px;
  @media (max-width: 950px) {
    display: none;
  }
`;

export const Username = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 62%;
  overflow: hidden;
  @media (max-width: 355px) {
    width: 62%;
  }
`;

export const Points = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 5%;
  @media (max-width: 355px) {
    margin-left: 20%;
  }
`;

export const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-right: 5%;
  margin-left: 3%;

  visibility: ${({ position }) => (position ? "" : "hidden")};
`;

export const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 4px;
`;

export const ProfileImageContainer = styled.div`
  position: absolute;
  border-radius: 4px;
  background: #737373;
  width: 35px;
  height: 35px;
  right: 5px;
  @media (max-width: 355px) {
    display: none;
  }
`;
