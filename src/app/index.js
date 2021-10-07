import "./app.less";
import logo from "@assets/logo/logo.svg";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Home from "../containers/Home";
import About from "../containers/About";

const App = () => (
  <Router>
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </Router>
);

export default App;
