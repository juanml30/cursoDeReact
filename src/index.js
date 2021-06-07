import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";

import Badge from "./components/Badge";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(
  <Badge
    firstName="Ignacio"
    lastName="Lizardía"
    jobTitle="Frontend Developer"
    twitter="juanml30"
    avatarUrl="https://www.gravatar.com/avatar?d=identicon"
  />,
  container
);
