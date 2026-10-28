// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./animations.css";
import App from "./App";
import { initAnimations } from "./animations";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

initAnimations();
