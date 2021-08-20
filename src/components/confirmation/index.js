import React from "react";
import {
  LockBody,
  ReleaseBody,
  Container,
  ChoiceContainer,
  DeleteContainer,
  Title,
  SubTitle,
  TextSmall,
  Text,
  ButtonsContainer,
  RejectDeleteAccountButton,
  ConfirmDeleteAccountButton,
} from "./styles/confirmation";

export default function Confirmation({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <LockBody />
      {children}
    </Container>
  );
}

Confirmation.ReleaseBody = function ConfirmationReleaseBody() {
  return <ReleaseBody />;
};

Confirmation.Title = function ConfirmationTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Confirmation.Container = function ConfirmationContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Confirmation.SubTitle = function ConfirmationSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Confirmation.ChoiceContainer = function ConfirmationChoiceContainer({
  children,
  ...restProps
}) {
  return <ChoiceContainer {...restProps}>{children}</ChoiceContainer>;
};

Confirmation.DeleteContainer = function ConfirmationDeleteContainer({
  children,
  ...restProps
}) {
  return <DeleteContainer {...restProps}>{children}</DeleteContainer>;
};

Confirmation.TextSmall = function ConfirmationTextSmall({
  children,
  ...restProps
}) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};

Confirmation.Text = function ConfirmationText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Confirmation.ButtonsContainer = function ConfirmationButtonsContainer({
  children,
  ...restProps
}) {
  return <ButtonsContainer {...restProps}>{children}</ButtonsContainer>;
};

Confirmation.RejectDeleteAccountButton =
  function ConfirmationRejectDeleteAccountButton({ children, ...restProps }) {
    return (
      <RejectDeleteAccountButton {...restProps}>
        {children}
      </RejectDeleteAccountButton>
    );
  };

Confirmation.ConfirmDeleteAccountButton =
  function ConfirmationConfirmDeleteAccountButton({ children, ...restProps }) {
    return (
      <ConfirmDeleteAccountButton {...restProps}>
        {children}
      </ConfirmDeleteAccountButton>
    );
  };
