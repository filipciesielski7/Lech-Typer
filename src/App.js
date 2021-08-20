import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import { AuthProvider } from "./contexts/AuthContext";
import {
  PrivateRoute,
  LoggedInRoute,
  VerificationRoute,
  DeleteAccountRoute,
} from "./helpers/routes";
import * as ROUTES from "./constants/routes";
import Browse from "./pages/browse";
import Verification from "./pages/verification";
import ForgotPassword from "./pages/forgot_password";
import UpdateProfile from "./pages/update_profile";
import DeletedAccount from "./pages/deleted_account";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <LoggedInRoute exact path={ROUTES.HOME} component={Home} />
          <LoggedInRoute path={ROUTES.SIGN_UP} component={Signup} />
          <LoggedInRoute path={ROUTES.SIGN_IN} component={Signin} />
          <LoggedInRoute
            path={ROUTES.FORGOT_PASSWORD}
            component={ForgotPassword}
          />
          <PrivateRoute path={ROUTES.BROWSE} component={Browse} />
          <PrivateRoute
            path={ROUTES.UPDATE_PROFILE}
            component={UpdateProfile}
          />
          <VerificationRoute
            path={ROUTES.VERIFICATION}
            component={Verification}
          />
          <DeleteAccountRoute // zmienic na tylko po linku
            path={ROUTES.DELETED_ACCOUNT}
            component={DeletedAccount}
          />
          <LoggedInRoute exact path="*" component={Home} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
