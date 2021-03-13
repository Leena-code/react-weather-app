import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

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
      sunrise: response.data.sys.sunrise *1000,
      sunset: response.data.sys.sunset *1000,
      description: response.data.weather[0].description,
      iconUrl: response.data.weather[0].icon,
    });
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
        <div className="Search">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control search-box"
            autoComplete="off"
            onChange= {handleCityChange}
          />
          <input type="submit" value="🔎" className="form-control submit-box" />
        </form>
        <button className="current-location-button">Current Location</button>
        </div>
        <WeatherInfo data={weatherData}/>
    </div>   
  );
 } else{
   search ();
  return "Loading..."
 }   
}