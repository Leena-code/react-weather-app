import React from "react";

import "./Weather";

export default function Weather (){
return (
    <div className="row">
        <div className="col-4">
      <h1>Zurich, CH</h1>
      <h2>
        <div class="day">Tuesday, 12:00</div>
        <div class="date">29. December 2020</div>
      </h2>
        </div>
         <div className="col-6">
            <h3>
        <img
          src="https://openweathermap.org/img/wn/04d@2x.png"
          alt=""
          id="current-weather-icon"
        />
        <span class="temperature">5°</span>
        <div id="description">broken clouds</div>
      </h3>
        </div>

    </div>

);
}