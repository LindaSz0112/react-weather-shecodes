import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div class="upcoming-days row" id="upcoming-forecast">
      <div class="first col">
        <span class="weather-symbol">🌥️</span>
        <br />
        -3 / -11
        <br />
        Saturday
      </div>
      <div class="second col">
        <span class="weather-symbol">❄️</span>
        <br />
        -5 / -12
        <br />
        Sunday
      </div>
      <div class="third col">
        <span class="weather-symbol">☁️</span>
        <br />
        -2 / -7
        <br />
        Monday
      </div>
      <div class="forth col">
        <span class="weather-symbol"> 🌤️ </span>
        <br />
        -1 / -5
        <br />
        Tuesday
      </div>
      <div class="fifth col">
        <span class="weather-symbol">🌥️</span> <br />
        -1 / 2<br />
        Wednesday
      </div>
    </div>
  );
}
