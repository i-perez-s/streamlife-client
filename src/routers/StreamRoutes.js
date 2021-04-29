import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { Navbar } from "../components/UI/Navbar";
import { SearchScreen } from "../components/search/SearchScreen";
import { HomeScreen } from "../components/stream/HomeScreen";
import { StreamScreen } from "../components/stream/StreamScreen";
import { MeScreen } from "../components/stream/MeScreen";
import { useDispatch } from "react-redux";
import { startLoadingFollows } from "../actions/follow";
import { FollowScreen } from "../components/search/FollowScreen";

export const StreamRoutes = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startLoadingFollows());
  }, [dispatch]);
  return (
    <>
      <Navbar history={history} />
      <div className="wp-content">
        <div className="container-fluid mt-5 principalContent">
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/me" component={MeScreen} />
            <Route exact path="/stream/:sid" component={StreamScreen} />
            <Route exact path="/search/:searchInput" component={SearchScreen} />
            <Route exact path="/myFollows" component={FollowScreen} />
          </Switch>
        </div>
      </div>
    </>
  );
};
