import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import * as ROUTES from "../constants/routes";

export function LoggedInRoute({ component: Component, ...restProps }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...restProps}
      render={(props) => {
        return currentUser ? (
          <Redirect to={ROUTES.BROWSE} />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
}

export function PrivateRoute({ component: Component, ...restProps }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...restProps}
      render={(props) => {
        if (currentUser && currentUser.email === null) {
          return <Component {...props} />;
        }
        if (currentUser && currentUser.emailVerified) {
          return <Component {...props} />;
        } else {
          return currentUser ? (
            <Redirect to={ROUTES.VERIFICATION} />
          ) : (
            <Redirect to={ROUTES.SIGN_IN} />
          );
        }
      }}
    />
  );
}

export function VerificationRoute({ component: Component, ...restProps }) {
  const { currentUser } = useAuth();
  return (
    <Route
      {...restProps}
      render={(props) => {
        if (currentUser && currentUser.emailVerified) {
          return <Redirect to={ROUTES.BROWSE} />;
        } else {
          return currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect to={ROUTES.SIGN_IN} />
          );
        }
      }}
    />
  );
}
