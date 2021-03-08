import React from"react";

import "./Search.css";

export default function Search(){
    return(
      
                  <div className="Search">
                      <form>
                      <input
                        type="search"
                        placeholder="Enter a city"
                        className="form-control search-box"
                        autoComplete="off"
                      />
                      <input type="submit" value="🔎" className="form-control submit-box" />
                      </form>
                     
                      <button className="current-location-button">Current Location</button>
                       
             </div>
         
     
);
}