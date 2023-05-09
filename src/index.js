import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import "./style.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
TimeAgo.addDefaultLocale(en);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/ganna-social-app">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
