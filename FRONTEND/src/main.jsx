import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Ensure the Tailwind CSS is being imported here

import App from "./App";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById("root")
);
