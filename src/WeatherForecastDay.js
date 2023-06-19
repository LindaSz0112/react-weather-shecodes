import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let weekday = date.getDay();

    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return days[weekday];
  }

  return (
    <div class="first col">
      <span class="weather-symbol">
        <img
          src={props.data.condition.icon_url}
          alt=" "
          className="main-symbol"
        />
      </span>
      <br />
      {Math.round(props.data.temperature.maximum)} /{" "}
      {Math.round(props.data.temperature.minimum)}
      <br />
      <span>{day()}</span>
    </div>
  );
}
