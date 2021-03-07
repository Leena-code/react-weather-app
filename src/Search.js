import React from"react";

import "./Search.css";

export default function Search(){
    return(

    <div className="row">
        <div className="col-4">
         <div>
             <input
                type="search"
                placeholder="Search city"
                className="form-control search-box"
                autocomplete="off"
                id="search-city"
             />
         </div>
        </div>
        <div className="col-4">
         <div>
             <input type="submit" value="🔎" className="form-control submit" />
             </div>
        </div>
        <div className="col-4">
         <div>
             <button className="current-location-button">Current Location</button>
         </div>
        </div>
    </div>
);
}