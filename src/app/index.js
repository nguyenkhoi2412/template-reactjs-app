import "./app.less";
import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import routes, { CURRENT_MODULES, MODULES } from "@app/routes";
import PagesRoute from "@utils/components/PagesRoute";

const App = () => {
  console.warn = () => {};

  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <PagesRoute key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
};

export default App;
