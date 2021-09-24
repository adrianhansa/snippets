import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from "./screens/AboutUs";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Header from "./components/Header";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/about" component={AboutUs} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
