import React from "react";
import "./Weather.css";

export default function Weather() {
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
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="cloudy"
              />

              <span className="temperature">19</span>
              <span className="unit">°C</span>
            </div>
            <ul className="condition">
              <li>Humidity: 81% </li>
              <li>Wind: 8 mph</li>
            </ul>
          </div>{" "}
        </div>

        <div className="col-6">
          <h1>London</h1>
          <ul className="status">
            <li>Wednesday 10:00</li>
            <li>Cloudy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
