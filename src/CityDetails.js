import React from "react";
import "./CityDetails.css";

export default function CityDetails() {
  return (
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
  );
}
