import React, { useState } from "react";
import "./WeatherApp.css";
import FriendlyDate from "./FriendlyDate";
import TemperatureInfo from "./TemperatureInfo";
import axios from "axios";

export default function WeatherApp() {
  const [loaded, setLoaded] = useState(false);
  const [city, fetchCity] = useState("Prague");
  const [weather, setWeather] = useState({});
  const [displayedCity, setDisplayedCity] = useState("");

  function setCity(event) {
    fetchCity(event.target.value);
  }

  function search() {
    const apiKey = "t8c4bc88f33a8fff2c5o00a1f6b0d692";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(setDetails);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function setDetails(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      feelsLike: response.data.temperature.feels_like,
      date: new Date(response.data.time * 1000),
      iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
    });
    setDisplayedCity(city);
    console.log(weather.date);
  }

  let form = (
    <form className="Search">
      <input type="text" placeholder="City" onChange={setCity} />
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
    </form>
  );

  if (loaded) {
    return (
      <div className="WeatherApp">
        {form}
        <div className="CityDetails row">
          <div className="city-details col">
            <h1>{displayedCity}</h1>
            <span>
              <FriendlyDate date={weather.date} />
            </span>
          </div>
          <div className="col">
            <TemperatureInfo celsius={weather.temperature} />
            <h2>
              <div className="text-capitalize description">
                {weather.description}
              </div>
            </h2>
          </div>
        </div>
        <div className="ExtraInfo row">
          <section className="weather-details col">
            <ul>
              <li>
                <span className="extra-details">
                  {" "}
                  Wind: {Math.round(weather.wind)} km/h
                </span>
              </li>
              <li>
                <span className="extra-details">
                  {" "}
                  Humidity: {weather.humidity}%
                </span>
              </li>
              <li>
                <span className="extra-details">
                  {" "}
                  Feels like: {Math.round(weather.feelsLike)} °C
                </span>
              </li>
            </ul>
          </section>
          <div className="main-symbol col">
            <img src={weather.iconUrl} alt=" " className="main-symbol" />
          </div>
        </div>
      </div>
    );
  } else search();
  return "Loading...";
}
