import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import SearchBox from "./SearchBox";
import SubmitBox from "./SubmitBox";
import CurrentLocationButton from "./CurrentLocationButton";
import CurrentLocation from "./CurrentLocation";
import CurrentWeather from "./CurrentWeather";
import OpenSourceCode from "./OpenSourceCode";

function App() {
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
          <OpenSourceCode />
        </div>
      </div>
    </body>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
