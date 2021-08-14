import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import { AuthProvider } from "./contexts/AuthContext";
import { PrivateRoute, LoggedInRoute } from "./helpers/routes";
import * as ROUTES from "./constants/routes";
import Browse from "./pages/browse";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <LoggedInRoute exact path={ROUTES.HOME} component={Home} />
          <LoggedInRoute path={ROUTES.SIGN_UP} component={Signup} />
          <LoggedInRoute path={ROUTES.SIGN_IN} component={Signin} />
          <PrivateRoute path={ROUTES.BROWSE} component={Browse} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
