import React from "react";
import {
  Container,
  Title,
  SubTitle,
  SettingSubTitle,
  SubTitleSpan,
  Text,
  AboutText,
  ContactText,
  Edit,
  Link,
  ExternalLink,
  TextSmall,
  Base,
  Input,
  InputForgotPassword,
  Submit,
  SubmitDeleteAccount,
  VerificationSubmit,
  SubmitTwitter,
  Error,
  Confirmation,
  ImageTwitter,
  Divider,
  Line,
  TextShortSmall,
  Recaptcha,
  LoadingIcon,
  SettingContainer,
  Username,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Recaptcha = function FormRecaptcha({ children, ...restProps }) {
  return <Recaptcha {...restProps}>{children}</Recaptcha>;
};

Form.SubTitle = function FormSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Form.SettingSubTitle = function FormSettingSubTitle({
  children,
  ...restProps
}) {
  return <SettingSubTitle {...restProps}>{children}</SettingSubTitle>;
};

Form.SubTitleSpan = function FormSubTitleSpan({ children, ...restProps }) {
  return <SubTitleSpan {...restProps}>{children}</SubTitleSpan>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.AboutText = function FormAboutText({ children, ...restProps }) {
  return <AboutText {...restProps}>{children}</AboutText>;
};

Form.ContactText = function FormContactText({ children, ...restProps }) {
  return <ContactText {...restProps}>{children}</ContactText>;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.ExternalLink = function FormExternalLink({ children, ...restProps }) {
  return <ExternalLink {...restProps}>{children}</ExternalLink>;
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

Form.Edit = function FormEdit({ children, ...restProps }) {
  return <Edit {...restProps}>{children}</Edit>;
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

Form.SubmitDeleteAccount = function FormSubmitDeleteAccount({
  children,
  ...restProps
}) {
  return <SubmitDeleteAccount {...restProps}>{children}</SubmitDeleteAccount>;
};

Form.VerificationSubmit = function FormVerificationSubmit({
  children,
  ...restProps
}) {
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

Form.LoadingIcon = function FormLoadingIcon({ children, ...restProps }) {
  return <LoadingIcon {...restProps}>{children}</LoadingIcon>;
};

Form.Username = function FormUsername({ children, ...restProps }) {
  return <Username {...restProps}>{children}</Username>;
};

Form.SettingContainer = function FormSettingContainer({
  children,
  ...restProps
}) {
  return <SettingContainer {...restProps}>{children}</SettingContainer>;
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
      src={process.env.PUBLIC_URL + "/images/twitter.png"}
      {...restProps}
    >
      {children}
    </ImageTwitter>
  );
};
