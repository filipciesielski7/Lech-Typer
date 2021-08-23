import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 1030px;
  max-width: 1149px;
  margin: 0 auto;
  justify-content: center;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
