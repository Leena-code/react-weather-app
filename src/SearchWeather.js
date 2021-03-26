import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./SearchWeather.css";

export default function SearchWeather(props){
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState (props.defaultCity);

  function handleResponse(response){
    setWeatherData({
      ready:true,
      city: response.data.name,
      country: response.data.sys.country,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      sunrise: new Date (response.data.sys.sunrise * 1000),
      sunset: new Date (response.data.sys.sunset * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
  }

  function showPosition (position) {
    let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  const apiKey = "806f99d0661b04444ade3ca9ef0a7b55";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?&lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

   function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition);
  }

  function search (){
   const apiKey = "806f99d0661b04444ade3ca9ef0a7b55";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    search ();
  }

  function handleCityChange(event){
    setCity(event.target.value);

  }

  if(weatherData.ready){
    return(
      <div>
        <div className="row">
          <div className="col-7">
        <form onSubmit={handleSubmit}>
          <div className="row">
          <div className="col-6">
          <input
            type="search"
            placeholder="Enter city"
            className="form-control search-box shadow-none"
            autoComplete="off"
            onChange= {handleCityChange}
          />
          </div>
          <div className="col-3">
          <button type="submit" className="form-control submit-box shadow-none">
            <FontAwesomeIcon icon={faSearch} className="fontAwesomeIcon"/>
          </button>
          
          </div>
          </div>
        </form>
        </div>
        <div className="col-4">
        <button className="current-location-button" onClick={getCurrentPosition}>Current Location</button>
        </div>
        </div>
        <WeatherInfo data={weatherData}/>
        <WeatherForecast city={weatherData.city}/>
    </div>   
  );
 } else{
   search ();
  return "Loading..."
 }   
}