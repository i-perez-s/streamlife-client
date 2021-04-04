import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthRoutes } from "./AuthRoutes";
import { StreamRoutes } from "./StreamRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth" component={AuthRoutes} />
        <Route path="/" component={StreamRoutes} />
      </Switch>
    </Router>
  );
};
