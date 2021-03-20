import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedSunTime from "./FormattedSunTime";
import WeatherIcon from "./WeatherIcon";
import CurrentWeatherIcon from "./CurrentWeatherIcon";
import { WiSunrise } from "weather-icons-react";
import { WiSunset } from "weather-icons-react";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div className="weatherInfo">
            <div className="row weather mt-5 mb-4">
                <div className="col-4 city">
           <h1>{props.data.city}, {props.data.country}</h1>
              <h2>
                  <FormattedDate date= {props.data.date} />
              </h2>
              </div>
          <div className="col-7 weatherData">
              <div className="clearfix">
                 <span className="float-left">
              <CurrentWeatherIcon code={props.data.icon}/>
              <WeatherTemperature celsius={props.data.temperature}/>
               <span className="weatherDescription">
                 broken clouds
                 </span>
             </span>
              </div>
              </div>
          </div>
              <div className="row weatherDataDetail">
                  <div className="col-5 sunTime">
                    <div className="row">
                      <div className="col-4 sunrise">
                    <WiSunrise size={60} color='#ff8c00' /> <FormattedSunTime suntime= {props.data.sunrise} />
                    </div>
                    <div className="col-4">
                  <WiSunset size={60} color='#ff8c00' /> <FormattedSunTime suntime= {props.data.sunset} />
                  </div>
                  </div>
                  </div>
                <div className="col-4 weatherDescriptionDetail">
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
      </div>
    );
}
