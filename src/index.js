import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";

import "./fonts";
import "./Assets/scss/main.scss";
import Routes from "./Routes";
import store from "./Redux/Store/index";

ReactDOM.render(
  <Provider store={store()}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
