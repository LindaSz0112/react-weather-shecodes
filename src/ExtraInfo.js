import React from "react";
import "./ExtraInfo.css";

export default function ExtraInfo() {
  return (
    <div className="ExtraInfo row">
      <section class="weather-details col">
        <ul>
          <li>
            <span class="extra-details"> Wind: 5 km/h</span>
          </li>
          <li>
            <span class="extra-details"> Humidity: 46%</span>
          </li>
          <li>
            <span class="extra-details"> Feels like: 17 °C</span>
          </li>
        </ul>
      </section>
      <div className="main-symbol col">
        <p>🌤️</p>
      </div>
    </div>
  );
}
