import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  width: 95%;
  margin: auto;
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

export const SubTitleSpan = styled.span`
  color: white;
  font-size: 19px;
  font-weight: bold;
`;

export const Text = styled.p`
  color: #737373;
  font-size: 16px;
  font-weight: 500;
`;

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: #8c8c8c;
`;

export const Link = styled(ReactRouterLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Input = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const InputForgotPassword = styled.input`
  background: #333;
  border-radius: 4px;
  border: 0;
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 0px;
`;

export const Submit = styled.button`
  background: white;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: #022855;
  cursor: pointer;
  border: 1px solid white;
  transition: 0.5s;
  &:disabled {
    opacity: 0.5;
    &:hover {
      background: white;
      color: #022855;
      border: 1px solid white;
    }
  }
  &:hover {
    background: rgba(0, 0, 0, 0);
    color: white;
    border: 1px solid white;
  }
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Confirmation = styled.div`
  background: #338a3e;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const SubmitTwitter = styled.button`
  background: #1d9cf0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 30px;
  padding: 16px;
  color: white;
  cursor: pointer;
  border: 1px solid white;
  transition: 0.5s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0);
  }
`;

export const ImageTwitter = styled.img`
  height: 18px;
  margin-right: 5px;
`;

export const Divider = styled.div`
  margin-bottom: 30px;
  display: flex;
  align-items: center;
`;

export const Line = styled.div`
  border-top: 1px solid #737373;
  width: 100%;
  height: 1px;
`;

export const TextShortSmall = styled.p`
  font-size: 13px;
  color: #8c8c8c;
  margin: 0px 10px;
`;

export const VerificationSubmit = styled.button`
  background: white;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 12px;
  padding: 16px;
  border: 0;
  color: #022855;
  cursor: pointer;
  border: 1px solid white;
  transition: 0.5s;
  &:disabled {
    opacity: 0.5;
    &:hover {
      background: white;
      color: #022855;
      border: 1px solid white;
    }
  }
  &:hover {
    background: rgba(0, 0, 0, 0);
    color: white;
    border: 1px solid white;
  }
`;

export const Recaptcha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  border-radius: 4px;
  overflow: hidden;

  @media (max-width: 375px) {
    justify-content: start;
  }
`;

export const LoadingIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  height: 18px;
`;
