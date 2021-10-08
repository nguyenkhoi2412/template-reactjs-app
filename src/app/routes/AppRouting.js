import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../containers/Home";
import About from "../../containers/About";
import Page from "./Page";
import { CURRENT_MODULES, MODULES } from "./index";

const RELATIVE_PATH = process.env.RELATIVE_PATH || "/";

const AppRouting = ({ isAuthenticated = false }) => {
  const currentModule = RELATIVE_PATH + CURRENT_MODULES();

  //   React.useEffect(() => {
  //     const rou = routes.filter((r) => r.path === currentModule);
  //     if (rou.length) {
  //       document.title = rou[0].title;
  //     }
  //   }, [currentModule]);

  return (
    <Router>
      <Suspense fallback={<>Loading...</>}>
        <Switch>
          {routes.map((route) => {
            return (
              <Page
                key={Math.random()}
                exact
                path={route.path}
                component={route.component}
                title={route.title}
              />
              //   <Route
              //     key={Math.random()}
              //     path={route.path}
              //     component={route.component}
              //   />
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

const routes = [
  //#region Home page
  {
    path: RELATIVE_PATH,
    exact: true,
    public: true,
    title: "Welcome to my world!!!",
    component: Home,
  },
  {
    path: RELATIVE_PATH + "about",
    exact: true,
    public: true,
    title: "Welcome to my about!!!",
    component: About,
  },
];
