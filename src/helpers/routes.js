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
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect to={ROUTES.SIGN_IN} />
        );
      }}
    />
  );
}
