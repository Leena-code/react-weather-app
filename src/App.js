import React from "react";
import Search from "./Search";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Search />
            <Weather />
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
  );
}
