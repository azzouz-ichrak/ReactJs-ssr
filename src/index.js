import React from "react";
import ReactDOM from "react-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' ;
import "./index.css";
import App from "./App";

ReactDOM.hydrate(<App />, document.getElementById("root"));
