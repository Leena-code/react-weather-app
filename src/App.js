import React from "react";
import SearchBox from "./SearchBox";
import SubmitBox from "./SubmitBox";
import CurrentLocationButton from "./CurrentLocationButton";
import CurrentLocation from "./CurrentLocation";
import CurrentWeather from "./CurrentWeather";
import OpenSourceCode from "./OpenSourceCode";

import "./App.css";

export default function App() {
  return (
    <body>
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <div className="row">
              <div className="col-4">
                <SearchBox />
              </div>
              <div className="col-4">
                <SubmitBox />
              </div>
              <div className="col-4">
                <CurrentLocationButton />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <CurrentLocation />
              </div>
              <div className="col-6">
                <CurrentWeather />
              </div>
            </div>
            <p>
              <div className="row today" id="hour-forecasts"></div>
            </p>
            <p>
              <div className="row days" id="daily-forecasts"></div>
            </p>
          </div>
          <footer>
              <OpenSourceCode />
          </footer>
        </div>
      </div>
    </body>
  );
}
