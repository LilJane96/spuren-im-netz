import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { getSelectedColor } from "./utilis/colorUtils";
import { TinCanProvider } from "react-tincan";
import * as os from "os-browserify/browser";
import process from "process";

console.log(os.type());

const initialColor = getSelectedColor();

document.documentElement.setAttribute("data-theme", initialColor);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TinCanProvider>
        <App />
      </TinCanProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
