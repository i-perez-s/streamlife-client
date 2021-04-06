import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { isLogged } from "../helpers/authHelpers";

import { AuthRoutes } from "./AuthRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { StreamRoutes } from "./StreamRoutes";

export const AppRouter = () => {
  const isAuthenticated = isLogged();

  return (
    <Router>
      <Switch>
        {/* <Route path="/auth" component={AuthRoutes} />
        <Route path="/" component={StreamRoutes} /> */}

        <PublicRoute
          path="/auth"
          component={AuthRoutes}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute
          path="/"
          component={StreamRoutes}
          isAuthenticated={isAuthenticated}
        />
        <PrivateRoute />
      </Switch>
    </Router>
  );
};
