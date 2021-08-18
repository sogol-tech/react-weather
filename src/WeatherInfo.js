import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          {" "}
          <div className="clearfix">
            <div className="float-left">
              <img src={props.data.iconUrl} alt="cloudy" />

              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
            <ul className="condition">
              <li>Humidity: {props.data.humidity}% </li>
              <li>Wind: {Math.round(props.data.wind)} mph</li>
            </ul>
          </div>{" "}
        </div>

        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul className="status">
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
