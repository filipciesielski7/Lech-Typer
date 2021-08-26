import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  margin-top: 5px;
  padding: 10px;
  width: 100%;
`;

export const Username = styled.div`
  display: flex;
  width: 50%;
  margin-right: 20px;
  overflow: hidden;
`;

export const Points = styled.div`
  display: flex;
  width: 30%;
`;

export const Position = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 20%;
`;
