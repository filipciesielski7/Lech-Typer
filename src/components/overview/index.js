import React from "react";
import {
  Container,
  Title,
} from "./styles/overview";

export default function Overview({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Overview.Title = function OverviewTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
