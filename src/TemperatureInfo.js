import React from "react";

export default function TemperatureInfo(props) {
  return (
    <div className="temperature col">
      <h2>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="temp-c">°C | F°</span>
      </h2>
    </div>
  );
}
