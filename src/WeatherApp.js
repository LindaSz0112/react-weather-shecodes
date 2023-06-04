import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <form className="Search">
        <input type="text" placeholder="City" />
        <button>Search</button>
      </form>
      <div className="CityDetails row">
        <div className="city-details col">
          <h1>Prague</h1>
          <span>11.05.2023.</span>
          <br />
          <span>17:38</span>
        </div>
        <div className="temperature col">
          <h2>
            <span className="temperature">18</span>
            <span className="temp-c">°C </span>

            <div>Clear Sky</div>
          </h2>
        </div>
      </div>
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
    </div>
  );
}
