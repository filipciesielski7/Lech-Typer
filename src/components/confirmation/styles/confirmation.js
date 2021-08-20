import styled, { createGlobalStyle } from "styled-components";

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ReleaseBody = createGlobalStyle`
  body {
    overflow: visible;
  }
`;

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #022855;
  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChoiceContainer = styled.div`
  position: absolute;
  top: 100px;
  display: flex;
  flex-direction: column;
  min-height: 460px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  width: 95%;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 0px;
  @media (max-width: 470px) {
    padding: 60px 28px 40px;
  }
`;

export const DeleteContainer = styled.div`
  position: absolute;
  top: 0px;
  display: flex;
  flex-direction: column;
  min-height: 460px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  width: 95%;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 0px;
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

export const SubTitle = styled.h1`
  color: #8c8c8c;
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
`;

export const RejectDeleteAccountButton = styled.button`
  display: block;
  background-color: white;
  color: #022855;
  width: 114px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 4px;
  padding: 16px;
  cursor: pointer;
  border: 1px solid white;
  text-decoration: none;
  transition: 0.5s;
  margin: 0 10px;

  &:hover {
    background: #022855;
    color: white;
    border: 1px solid white;
  }
`;

export const ConfirmDeleteAccountButton = styled.button`
  background: #cc0000;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  padding: 12px;
  cursor: pointer;
  border: 1px solid white;
  transition: 0.5s;
  margin: 0 10px;

  &:hover {
    background: #ed4337;
  }
`;
