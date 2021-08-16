import React from "react";
import {
  Container,
  Title,
  SubTitle,
  SubTitleSpan,
  Text,
  Link,
  TextSmall,
  Base,
  Input,
  InputForgotPassword,
  Submit,
  VerificationSubmit,
  SubmitTwitter,
  Error,
  Confirmation,
  ImageTwitter,
  Divider,
  Line,
  TextShortSmall,
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

Form.SubTitleSpan = function FormSubTitleSpan({ children, ...restProps }) {
  return <SubTitleSpan {...restProps}>{children}</SubTitleSpan>;
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

Form.VerificationSubmit = function FormVerificationSubmit({ children, ...restProps }) {
  return <VerificationSubmit {...restProps}>{children}</VerificationSubmit>;
};

Form.SubmitTwitter = function FormSubmitTwitter({ children, ...restProps }) {
  return <SubmitTwitter {...restProps}>{children}</SubmitTwitter>;
};

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Confirmation = function FormConfirmation({ children, ...restProps }) {
  return <Confirmation {...restProps}>{children}</Confirmation>;
};

Form.Divider = function FormDivider({ children, ...restProps }) {
  return (
    <Divider {...restProps}>
      <Line></Line>
      <TextShortSmall>{children}</TextShortSmall>
      <Line></Line>
    </Divider>
  );
};

Form.ImageTwitter = function FormImageTwitter({ children, ...restProps }) {
  return (
    <ImageTwitter
      src={process.env.PUBLIC_URL + "/images/Twitter3.png"}
      {...restProps}
    >
      {children}
    </ImageTwitter>
  );
};
