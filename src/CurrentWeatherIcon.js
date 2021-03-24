import React from "react";
import { WiDaySunny } from "weather-icons-react";
import { WiNightClear } from "weather-icons-react";
import { WiDayCloudy } from "weather-icons-react";
import { WiNightAltCloudy } from "weather-icons-react";
import { WiCloud } from "weather-icons-react";
import { WiCloudy } from "weather-icons-react";
import { WiDayShowers} from "weather-icons-react";
import { WiNightAltShowers } from "weather-icons-react";
import { WiDayRain } from "weather-icons-react";
import { WiNightAltRain } from "weather-icons-react";
import { WiDayThunderstorm} from "weather-icons-react";
import { WiNightAltThunderstorm} from "weather-icons-react";
import { WiDaySnow} from "weather-icons-react";
import { WiNightAltSnow} from "weather-icons-react";
import { WiDayFog} from "weather-icons-react";
import {WiNightFog} from "weather-icons-react";



export default function CurretWeatherIcon(props){
  if (props.code === "01d"){
    return (
         <WiDaySunny size={110} color='#0f3057' />
    );
  } else if (props.code === "01n") {
    return(
    <WiNightClear size={110} color='#0f3057' />
    );
  } else if (props.code === "02d") {
    return(
    <WiDayCloudy size={110} color='#0f3057' />
    );
  }
  else if (props.code === "02n") {
    return(
    <WiNightAltCloudy size={110} color='#0f3057' />
    );
  } else if (props.code === "03d") {
    return(
    <WiCloud size={110} color='#0f3057' />
    );
  }
  else if (props.code === "03n") {
    return(
    <WiCloud size={110} color='#0f3057' />
    );
  }
  else if (props.code === "04d") {
    return(
    <WiCloudy size={110} color='#0f3057' />
    );
  }
  else if (props.code === "04n") {
    return(
    <WiCloudy size={110} color='#0f3057' />
    );
  }
  else if (props.code === "09d") {
    return(
    <WiDayShowers size={110} color='#0f3057' />
    );
  }
  else if (props.code === "09n") {
    return(
    <WiNightAltShowers size={110} color='#0f3057' />
    );
  }
  else if (props.code === "10d") {
    return(
    <WiDayRain size={110} color='#0f3057' />
    );
  }
  else if (props.code === "10n") {
    return(
    <WiNightAltRain size={110} color='#0f3057' />
    );
  }
  else if (props.code === "11d") {
    return(
    <WiDayThunderstorm size={110} color='#0f3057' />
    );
  }
  else if (props.code === "11n") {
    return(
    <WiNightAltThunderstorm size={200} color='#0f3057' />
    );
  }
  else if (props.code === "13d") {
    return(
    <WiDaySnow size={200} color='#0f3057' />
    );
  }
  else if (props.code === "13n") {
    return(
    <WiNightAltSnow size={200} color='#0f3057' />
    );
  }
  else if (props.code === "50d") {
    return(
    <WiDayFog size={200} color='#0f3057' />
    );
  }
  else if (props.code === "50n") {
    return(
    <WiNightFog size={200} color='#0f3057' />
    );
  }
}