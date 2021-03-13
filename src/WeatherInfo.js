import React from "react";
import FormattedDate from "./FormattedDate";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div className="weather">
           <h1>{props.data.city}, {props.data.country}</h1>
              <h2>
                  <FormattedDate date= {props.data.date} />
              </h2>
        
          <div className="row weather">
          <div className="col-6">
             <h3>
                  <img
                  src={props.data.iconUrl}
                  alt={props.data.description}
                  id="current-weather-icon"
                  />
                  <span className="temperature">{Math.round(props.data.temperature)}°</span>
                  <div id="description">broken clouds</div>
              </h3>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: {props.data.humidity} %
              </li>
              <li>
                Wind: {props.data.wind} km/h
              </li>
              <li>
                Feels like: {Math.round(props.data.feelsLike)}°
              </li>
              <li>
                Sunrise: {props.data.sunrise}
              </li>
              <li>
                Sunset: {props.data.sunset}
              </li>
            </ul>
          </div>
          </div>
      </div>
    );
}
