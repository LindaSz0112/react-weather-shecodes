import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

import "./WeatherApp.css";
import WeatherApp from "./WeatherApp";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="WeatherApp">
      <div className="container">
        <WeatherApp />
        <small className="author">
          <a
            href="https://github.com/LindaSz0112/react-weather-shecodes.git"
            target="_blank"
            className="github-link"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Linda Szarvas
        </small>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
