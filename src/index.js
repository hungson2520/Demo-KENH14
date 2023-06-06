import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  HashRouter,
  MemoryRouter,
  Router,
  Route,
  Routes,
} from "react-router-dom";
import Sport from "./Pages/Sport";
import Technology from "./Pages/Technology";
import Notfound from "./Pages/Notfound";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
