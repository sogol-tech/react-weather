import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      dt: "Wednesday 14:00",
      temperature: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="button" />
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-6">
            {" "}
            <div className="clearfix">
              <div className="float-left">
                <img src={weatherData.iconUrl} alt="cloudy" />

                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
              <ul className="condition">
                <li>Humidity: {weatherData.humidity}% </li>
                <li>Wind: {Math.round(weatherData.wind)} mph</li>
              </ul>
            </div>{" "}
          </div>

          <div className="col-6">
            <h1>{weatherData.city}</h1>
            <ul className="status">
              <li>{weatherData.dt}</li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f22ac1427987190f2bc60c389965004c";
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
