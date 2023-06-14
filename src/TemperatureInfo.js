import React, { useState } from "react";
import "./WeatherApp.css";

export default function TemperatureInfo(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenhait");
  }

  if (unit === "celsius") {
    return (
      <div className="temperature">
        <h2>
          <span className="temperature">{Math.round(props.celsius)}</span>
          <span className="temp-c">
            °C |{" "}
            <a href="#" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="temperature">
        <h2>
          <span className="temperature">
            {Math.round((props.celsius * 9) / 5 + 32)}
          </span>
          <span className="temp-c">
            <a href="#" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </h2>
      </div>
    );
  }
}
