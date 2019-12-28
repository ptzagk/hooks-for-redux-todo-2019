import React from "react";
import { render } from "react-dom";
import { Provider } from "hooks-for-redux";
import { ToDo } from "./components/ToDo";
import "./index.css";

render(<Provider><ToDo /></Provider>, document.getElementById("root"));
