import React, { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import "./Forecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div class="upcoming-days row" id="upcoming-forecast">
        {forecast.map(function (dailyForecast, index) {
          if (index < 4) {
            return <WeatherForecastDay data={dailyForecast} key={index} />;
          }
        })}
      </div>
    );
  } else {
    let apiKey = "t8c4bc88f33a8fff2c5o00a1f6b0d692";
    let city = props.cityname;
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}`;
    axios.get(url).then(handleResponse);

    return null;
  }
}
