import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from './global-styles'


var mountNode = document.getElementById("app");
ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>,
     mountNode
);