import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Link,
  LogoLink,
  Profile,
  Username,
  Dropdown,
  Group,
  ProfileImage,
  IconDown,
} from "./styles/header";

export default function Header({ bg = false, children, ...restProps }) {
  return bg ? (
    <Background
      src={process.env.PUBLIC_URL + "/images/fans5.png"}
      {...restProps}
    >
      {children}
    </Background>
  ) : (
    children
  );
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.LogoLink = function HeaderLogoLink({ children, ...restProps }) {
  return <LogoLink {...restProps}>{children}</LogoLink>;
};

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>;
};

Header.Username = function HeaderUsername({ children, ...restProps }) {
  return <Username {...restProps}>{children}</Username>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Header.ProfileImage = function HeaderProfileImage({ children, ...restProps }) {
  return <ProfileImage {...restProps}>{children}</ProfileImage>;
};

Header.IconDown = function HeaderIconDown({ children, ...restProps }) {
  return <IconDown {...restProps}>{children}</IconDown>;
};