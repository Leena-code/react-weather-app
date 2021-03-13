import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div className="weatherInfo">
            <div className="row weather mt-3">
                <div className="col-6 city">
           <h1>{props.data.city}, {props.data.country}</h1>
              <h2>
                  <FormattedDate date= {props.data.date} />
              </h2>
              </div>
          <div className="col-6 weatherData">
              <div className="clearfix">
              <WeatherIcon code={props.data.icon} className="float-left"/>
                 <span className="float-left">
                 <span className="temperature">{Math.round(props.data.temperature)}</span>
                 <span className="unit">°C</span>
                 </span>
                 <div className="weatherDescription">
                 broken clouds
                 </div>
             </div>
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
              </ul>
              </div>
          </div>
              <div className="row sunTime">
                  <div className="col-6">
                      Sunrise: {props.data.sunrise}
                  </div>
                <div className="col-6">
                      Sunset: {props.data.sunset}
                  </div>
              </div>    
      </div>
    );
}
