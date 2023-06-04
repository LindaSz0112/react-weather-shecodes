import React, { useState } from "react";
import "./WeatherApp.css";
import axios from "axios";

export default function WeatherApp() {
  const [loaded, setLoaded] = useState(false);

  let city = "Prague";
  const apiKey = "t8c4bc88f33a8fff2c5o00a1f6b0d692";
  let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  if (loaded) {
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
  } else {
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
}
