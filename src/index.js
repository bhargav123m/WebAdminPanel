import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "react-table/react-table.css";
import store from "./store";
//import App from "./App";
import UiRouter from './configs/UiRouter';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <UiRouter />
  </Provider>,
  rootElement
);
