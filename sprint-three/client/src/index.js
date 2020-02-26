import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Navbar />
    <Route exact path="/">
      <Redirect to="/video/1af0jruup5gu" />
    </Route>
    <Route path="/video/:id" component={App} />
    <Route path="/upload" component={Upload} />
  </Router>,

  document.getElementById("root")
);
