import styled from "styled-components/macro";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 4px;
  margin-top: 5px;
  padding: 10px;
  width: 100%;

  border: 1px solid #737373
  border-radius: 4px;
  color: #737373;
  cursor:pointer;

  &:hover{
    color:white;
  }
`;

export const Username = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 62%;
  overflow: hidden;
`;

export const Points = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 5%;
`;

export const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-right: 5%;
  margin-left: 3%;
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
  @media (max-width: 350px) {
    display: none;
  }
`;
