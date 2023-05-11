import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import "./index.css";
import "./style.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';
import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";
import { AuthContextProvider } from "./context/AuthContext";
TimeAgo.addDefaultLocale(en);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter basename="/ganna-social-app">
        <App />
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);
