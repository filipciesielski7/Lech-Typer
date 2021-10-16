import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import ScrollToTop from "./helpers/scrollToTop";
import { AuthProvider } from "./contexts/AuthContext";
import {
  PrivateRoute,
  LoggedInRoute,
  VerificationRoute,
  DeleteAccountRoute,
} from "./helpers/routes";
import Home from "./pages/home";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Browse from "./pages/browse";
import Verification from "./pages/verification";
import ForgotPassword from "./pages/forgot_password";
import UpdateProfile from "./pages/update_profile";
import DeletedAccount from "./pages/deleted_account";
import SchedulePage from "./pages/schedule";
import RankingPage from "./pages/ranking";

function App() {
  return (
    <Router>
      <ScrollToTop />
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
          <PrivateRoute path={ROUTES.RANKING} component={RankingPage} />
          <PrivateRoute path={ROUTES.SCHEDULE} component={SchedulePage} />
          <VerificationRoute
            path={ROUTES.VERIFICATION}
            component={Verification}
          />
          <DeleteAccountRoute
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
