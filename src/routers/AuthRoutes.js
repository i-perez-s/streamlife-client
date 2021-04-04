import React from "react";
import { Route, Switch } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { RegisterScreen } from "../components/login/RegisterScreen";

export const AuthRoutes = ({ history }) => {
  return (
    <>
      <div className="container">
        <Switch>
          <Route exact path="/auth/login" component={LoginScreen} />
          <Route exact path="/auth/register" component={RegisterScreen} />
        </Switch>
      </div>
    </>
  );
};
