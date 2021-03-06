import React from "react";
import "./SearchBox.css";

export default function SearchBox() {
  return (
    <div>
      <input
        type="search"
        placeholder="Search city"
        className="form-control search-box"
        autocomplete="off"
        id="search-city"
      />
    </div>
  );
}
