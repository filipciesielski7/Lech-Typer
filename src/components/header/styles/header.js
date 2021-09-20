import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.8),
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.8)
    ),
    url(${({ src }) => (src ? `${src}` : "/images/misc/home-bg.jpg")}) top left /
      cover no-repeat;
  @media (max-width: 1100px) {
    ${({ dontShowOnSmallViewPort }) =>
      dontShowOnSmallViewPort && `background: none;`}
  }
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Logo = styled.img`
  height: 36px;
  width: 134px;
  margin-right: 40px;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: white;
  color: #022855;
  width: 114px;
  height: fit-content;
  border: 0;
  font-size: 15px;
  border-radius: 4px;
  padding: 8px 17px;
  cursor: pointer;
  border: 1px solid white;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    background: #022855;
    color: white;
    border: 1px solid white;
    // transform: scale(1.1);
  }

  @media (max-width: 375px) {
    padding: 8px 10px;
    font-size: 13px;
    display: none !important;
  }
`;

export const LogoLink = styled(ReactRouterLink)`
  color: white;
  @media (min-width: 376px) {
    display: none !important;
  }
`;

export const Username = styled.p`
  padding: 5px;
  opacity: 0.8;
  @media (max-width: 500px) {
    display: none !important;
  }
`;

// const arrow = keyframes`
// 0% {transform: translateY(-5px);
// opacity: 0;}
// 100% {transform: translateY(5px);
// opacity: 1;}
// `;

export const IconDown = styled.span`
  opacity: 0.8;
`;

export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  border-radius: 4px;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:hover > ${IconDown} {
    opacity: 1;
  }
  &:hover > ${Username} {
    opacity: 1;
  }
`;

export const ProfileImage = styled.img`
  border-radius: 4px;
  height: 35px;
  margin-right: 5px;
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  color: white;
  transition: 0.5s;
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  height: 35px;
  padding: 20px;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 4px;

  &:hover {
    background: white;
    color: #022855;
  }
  &:hover > ${Link} {
    color: #022855;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  color: white;
  width: 190px;
  top: 80px;
  background: #022855;
  z-index: 1000;
  color: white;
  border-radius: 4px;
  box-shadow: 0px 0px 3px white;

  right: 56px;
  @media (max-width: 1000px) {
    right: 30px;
  }
  p {
    font-size: 15px;
    margin-left: 10px;
  }
`;
