import React from "react";

export default function FormattedDate (props){
    let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekDay = weekDays[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10){
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`;
    }
    let year = props.date.getFullYear();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
    let month  = months[props.date.getMonth()];
    let day = props.date.getDate();

    return (
        <div>{weekDay}, {hours}:{minutes} <br />
        {day} {month} {year}
        </div>
    );
}