import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedSunTime from "./FormattedSunTime";
import CurrentWeatherIcon from "./CurrentWeatherIcon";
import { WiSunrise } from "weather-icons-react";
import { WiSunset } from "weather-icons-react";
import WeatherTemperature from "./WeatherTemperature";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
    return (
        <div className="weatherInfo">
            <div className="row weather">
                <div className="col-6 city pl-0 pr-0">
           <h1>{props.data.city}, {props.data.country}</h1>
              <h2>
                  <FormattedDate date= {props.data.date} />
              </h2>
              </div>
          <div className="col-6 weatherData pl-0 pr-0">
              <div className="clearfix">
                 <span className="float-left">
                   <span className= "currentWeatherIcon">
              <CurrentWeatherIcon code={props.data.icon}/>
              </span>
              <WeatherTemperature celsius={props.data.temperature}/>
             </span>
              </div>
              <span className="weatherDescription">
                 {props.data.description}
                 </span>
              </div>
          </div>
              <div className="row weatherDataDetail">
                  <div className="col-6 sunTime">
                    <div className="row">
                      <div className="col-3 sunrise pl-0 pr-0">
                    <WiSunrise size={60} color='#F48024' /> <FormattedSunTime suntime= {props.data.sunrise} />
                    </div>
                    <div className="col-3 pl-0 pr-0">
                  <WiSunset size={60} color='#F48024' /> <FormattedSunTime suntime= {props.data.sunset} />
                  </div>
                  </div>
                  </div>
                <div className="col-5 weatherDescriptionDetail">
                  <ul>
              <li>
                Humidity: {props.data.humidity} %
              </li>
              <li>
                Wind: {Math.round(props.data.wind)} km/h
              </li>
              <li>
                Feels like: {Math.round(props.data.feelsLike)} °C
              </li>
              </ul>
                  </div>
              </div>    
      </div>
    );
}
