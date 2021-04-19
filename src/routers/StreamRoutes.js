import React from "react";
import { Route, Switch } from "react-router-dom";

import { Navbar } from "../components/UI/Navbar";
import { SearchScreen } from "../components/search/SearchScreen";
import { HomeScreen } from "../components/stream/HomeScreen";
import { StreamScreen } from "../components/stream/StreamScreen";
import { MeScreen } from "../components/stream/MeScreen";

export const StreamRoutes = ({ history }) => {
  return (
    <>
      <Navbar history={history} />
      <div className="wp-content">
        <div className="container-fluid mt-5 principalContent">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/me" component={MeScreen} />
            <Route exact path="/stream/:id" component={StreamScreen} />
            <Route exact path="/search/:searchInput" component={SearchScreen} />
          </Switch>
        </div>
      </div>
    </>
  );
};
