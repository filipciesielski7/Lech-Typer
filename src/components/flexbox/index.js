import React from "react";
import { Container, Row, Column } from "./styles/flexbox";

export default function Flexbox({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Flexbox.Row = function FlexboxRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Flexbox.Column = function FlexboxColumn({ children, ...restProps }) {
  return <Column {...restProps}>{children}</Column>;
};
