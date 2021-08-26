import styled from "styled-components/macro";

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

export const Bar = styled.div`
  display: flex;
  background: white;
  width: 100%;
  border-radius: 4px;
`;

export const BarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #737373;
  font-size: 12px;
  font-weight: 500;
  margin: 10px;
`;
