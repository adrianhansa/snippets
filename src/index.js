import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./screens/Home";
import EditSnippet from "./screens/EditSnippet";
import Login from "./screens/auth/Login";
import Register from "./screens/auth/Register";
import Header from "./components/Header";

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/snippets/:id" component={EditSnippet} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
