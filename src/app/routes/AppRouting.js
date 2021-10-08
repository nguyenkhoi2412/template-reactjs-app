import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const AppRouting = ({ isAuthenticated = false }) => {
  return (
    <Router>
      <Suspense fallback={<>Loading...</>}>
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                key={Math.random()}
                path={route.path}
                component={route.component}
              />
            );
          })}
          {/* add your routes & additional routings which for public user here. */}
          {/* <Route
            path={"/"}
            component={lazy(() => import("../../containers/Home"))}
          />
          <Route
            path={"/about"}
            component={lazy(() => import("../../containers/About"))}
          /> */}
          {/* add your routes & additional routings which need authenticated user here. */}
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouting;

const RELATIVE_PATH = process.env.RELATIVE_PATH || "/";

const routes = [
  //#region Home page
  {
    path: RELATIVE_PATH,
    exact: true,
    public: true,
    title: "Welcome to my world!!!",
    component: lazy(() => import("../../containers/Home")),
  },
  {
    path: RELATIVE_PATH + "about",
    exact: true,
    public: true,
    title: "Welcome to my world!!!",
    component: lazy(() => import("../../containers/About")),
  },
];
