import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function WeatherForecast(props) {
  console.log(props);

  const apiKey = "t8c4bc88f33a8fff2c5o00a1f6b0d692";
  let city = props.cityname;
  let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
  axios.get(url).then(handleResponse);

  function handleResponse(reponse) {
    return null;
  }

  return (
    <div class="upcoming-days row" id="upcoming-forecast">
      <div class="first col">
        <span class="weather-symbol">🌥️</span>
        <br />
        -3 / -11
        <br />
        Saturday
      </div>
    </div>
  );
}
