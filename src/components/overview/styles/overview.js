import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 450px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  width: 97.5%;
  margin: auto;
  padding: 60px 68px 40px;

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
