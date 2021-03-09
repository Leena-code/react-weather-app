import React, {useState} from "react";
import axios from "axios";

import "./SearchWeather.css";

export default function SearchWeather(props){
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready:true,
      city: response.data.name,
      date: `Tuesday, 12:00`,
      temperature: response.data.main.temp,
      percipitation: 15,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/04d@2x.png`
    });
  }

  if(weatherData.ready){
    return(
      <div>
        <div className="Search">
        <form>
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control search-box"
            autoComplete="off"
          />
          <input type="submit" value="🔎" className="form-control submit-box" />
        </form>
        <button className="current-location-button">Current Location</button>
        </div>
        <div className="weather">
           <h1>{weatherData.city}</h1>
              <h2>
                  <div className="day">{weatherData.date}</div>
                  <div className="date">29. December 2020</div>
              </h2>
        
          <div className="row weather">
          <div className="col-6">
             <h3>
                  <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="current-weather-icon"
                  />
                  <span className="temperature">{Math.round(weatherData.temperature)}°</span>
                  <div id="description">broken clouds</div>
              </h3>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: {weatherData.humidity} %
              </li>
              <li>
                Wind: {weatherData.wind} km/h
              </li>
            </ul>
          </div>
          </div>
      </div>
    </div>   
  );
 } else{
   const apiKey = "806f99d0661b04444ade3ca9ef0a7b55";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return "Loading..."
 }   
}