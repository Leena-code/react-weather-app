import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import { WiSunrise } from "weather-icons-react";
import { WiSunset } from "weather-icons-react";
import WeatherTemperature from "./WeatherTemperature";
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
                 <span className="float-left">
              <WeatherIcon code={props.data.icon}/>
              <WeatherTemperature celsius={props.data.temperature}/>
             </span>
              </div>
                 <div className="weatherDescription">
                 broken clouds
                 </div>
            <ul>
              <li>
                Humidity: {props.data.humidity} %
              </li>
              <li>
                Wind: {props.data.wind} km/h
              </li>
              <li>
                Feels like: {Math.round(props.data.feelsLike)}°C
              </li>
              </ul>
              </div>
          </div>
              <div className="row sunTime">
                  <div className="col-6">
                      <WiSunrise size={80} color='yellow' /> {new Date (props.data.sunrise * 1000).getHours()}:{new Date (props.data.sunrise * 1000).getMinutes()}
                  </div>
                <div className="col-6">
                      <WiSunset size={80} color='yellow' /> {new Date (props.data.sunset * 1000).getHours()}:{new Date (props.data.sunset * 1000).getMinutes()}
                  </div>
              </div>    
      </div>
    );
}
