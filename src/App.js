import React from "react";
import Search from "./Search";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <body>
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
            <Weather />
            <p>
              <div className="row today" id="hour-forecasts"></div>
            </p>
            <p>
              <div className="row days" id="daily-forecasts"></div>
            </p>
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
      </div>
    </body>
  );
}
