import React from "react";
import ReactDOM from "react-dom";

import Badge from "./components/Badge";

const element = <h1>Hello, Platzi Hecho por Juan!</h1>;

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge />, container);
