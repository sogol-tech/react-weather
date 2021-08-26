import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  let maxTemp = Math.round(props.data.temp.max);
  let minTemp = Math.round(props.data.temp.min);

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherIcon">
        <WeatherIcon code={props.data.weather[0].icon} size={100} />
      </div>
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-temperature-max">{maxTemp}°</span>
        <span className="WeatherForecast-temperature-min">{minTemp}°</span>
      </div>
    </div>
  );
}
