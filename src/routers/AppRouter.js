import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  browserHistory,
} from "react-router-dom";
import { renewToken } from "../actions/auth";

import { AuthRoutes } from "./AuthRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { StreamRoutes } from "./StreamRoutes";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { _id } = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(renewToken());
    }
  }, [dispatch]);

  return (
    <Router history={browserHistory}>
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
