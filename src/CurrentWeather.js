import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div>
      <h3>
        <img
          src="https://openweathermap.org/img/wn/04d@2x.png"
          alt=""
          id="current-weather-icon"
        />
        <span class="temperature">5°</span>
        <div id="description">broken clouds</div>
      </h3>
    </div>
  );
}
