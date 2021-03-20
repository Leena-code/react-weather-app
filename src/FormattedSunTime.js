import React from "react";

export default function FormattedSunTime (props){
    let hours = props.suntime.getHours();
    if (hours < 10){
        hours = `0${hours}`;
    }
    let minutes = props.suntime.getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
    return (
        <div>{hours}:{minutes}
        </div>
    );
}