import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";

import { AuthRoutes } from "./AuthRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { StreamRoutes } from "./StreamRoutes";

export const AppRouter = () => {
  const { _id } = useSelector((state) => state.auth.user);

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/auth"
            component={AuthRoutes}
            isAuthenticated={!!_id}
          />

          <PrivateRoute
            path="/"
            component={StreamRoutes}
            isAuthenticated={!!_id}
          />

          <Redirect to="/auth" />
        </Switch>
      </div>
    </Router>
  );
};
