import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./index";

const AppRouting = ({ isAuthenticated = false }) => {
  return (
    <Router>
      <Suspense fallback={<>Loading...</>}>
        <Switch>
          {/* add your routes & additional routings which for public user here. */}
          <Route
            path={"/"}
            component={lazy(() => import("../../containers/Home"))}
          />
          <Route
            path={"/about"}
            component={lazy(() => import("../../containers/About"))}
          />
          {/* add your routes & additional routings which need authenticated user here. */}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouting;
