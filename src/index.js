import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
//this prints everything to the html document which has a div called root
ReactDOM.render(
  <Main/>,
  document.getElementById("root")
);
