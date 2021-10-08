import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../containers/Home";
import About from "../../containers/About";

const AppRouting = () => {
  return (
    <Router>
      <Suspense fallback={<>Loading...</>}>
        <Switch>
          {/* add your routes & additional routings which need authenticated user here. */}
          <Route path={"/"} component={Home} />
          <Route path={"/about"} component={About} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouting;
