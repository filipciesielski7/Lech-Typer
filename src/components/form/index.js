import React from "react";
import {
  Container,
  Title,
  SubTitle,
  Text,
  Link,
  TextSmall,
  Base,
  Input,
  InputForgotPassword,
  Submit,
  Error,
  Confirmation,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.SubTitle = function FormSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.InputForgotPassword = function FormInputForgotPassword({
  children,
  ...restProps
}) {
  return <InputForgotPassword {...restProps}>{children}</InputForgotPassword>;
};

Form.Submit = function FormSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Confirmation = function FormConfirmation({ children, ...restProps }) {
  return <Confirmation {...restProps}>{children}</Confirmation>;
};
