import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import dummydatas from "./static/dummydatas";

ReactDOM.render(
  <App dummydatas={dummydatas} />,
  document.getElementById("root")
);
