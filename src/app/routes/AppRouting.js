import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../containers/Home";
import About from "../../containers/About";
import { CURRENT_MODULES, MODULES } from "./index";

const RELATIVE_PATH = process.env.RELATIVE_PATH || "/";

const AppRouting = () => {
  const currentModule = RELATIVE_PATH + CURRENT_MODULES();

  React.useEffect(() => {
    const rou = routes.filter((r) => r.path === currentModule);
    if (rou.length) {
      document.title = rou[0].title;
    }
  }, [currentModule]);

  return (
    <Router>
      <Suspense fallback={<>Loading...</>}>
        <Switch>
          {/* add your routes & additional routings which for public user here. */}
          <Route
            path={"/"}
            component={Home}
          />
          <Route
            path={"/about"}
            component={About}
          />
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
    title: "Welcome to my world!!!",
  },
  {
    path: RELATIVE_PATH + "about",
    title: "Welcome to my about!!!",
  },
];
