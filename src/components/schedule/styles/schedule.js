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
  @media (max-width: 300px) {
    font-size: 10px;
    bottom: 6px;
  }
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
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

  // padding-right: 45px;
  // @media (max-width: 970px) {
  //   padding-right: 25px;
  // }
  // @media (max-width: 950px) {
  //   padding-right: 0;
  // }
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

  @media (max-width: 374px) {
    display: ${({ position }) => (position ? "none" : "")};
  }

  @media (max-width: 950px) {
    display: ${({ search }) => (search ? "none" : "")};
  }
`;

export const ListContainer = styled.div`
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Selection = styled.p`
  cursor: pointer;
  color: #737373;
  color: ${({ isSelected }) => (isSelected ? "#ae8745" : "")};
  font-weight: ${({ isSelected }) => (isSelected ? "bold" : "")};
`;

export const SearchBar = styled.input`
  border-radius: 4px;
  padding: 7px;
  background: white;
  border: none;
  outline: none;
  color: grey;
  // width: ${({ small }) => (small ? "400px" : "")};

  @media (max-width: 950px) {
    display: ${({ small }) => (!small ? "none" : "")};
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchSmallContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: grey;
  border-radius: 4px;
  padding: 7px;
  margin-bottom: 10px;
  background: white;

  @media (min-width: 400px) {
    padding-left: 25px;
  }

  @media (min-width: 950px) {
    display: ${({ small }) => (small ? "none" : "")};
  }
`;

export const SearchIcon = styled.span`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  opacity: ${({ searchActive }) => (searchActive ? "0" : "100%")};
  // display: ${({ searchActive }) => (searchActive ? "none" : "")};
`;

export const EmptyResults = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  color: white;
  background: #022855;
  padding: 20px;
  border-radius: 4px;
`;
