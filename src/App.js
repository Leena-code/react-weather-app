import React from "react";
import SearchWeather from "./SearchWeather";

import "./App.css";

export default function App() {
  return (
    <div className="weather-app-wrapper">
     <div className="App">
      <div className="container">
            <SearchWeather defaultCity="Zurich" />
            </div>
            </div>
          <footer>
            <small>
              This project is coded by Natalie Lee and is {" "}
              <a
                href="https://github.com/Leena-code/react-weather-app"
                target="_blank"
                rel="noreferrer"
              >
                open-sourced on GitHub
              </a>
            </small>
          </footer>
          </div>
  );
}

