import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="London" />
        <hr />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/sogol-tech"
            target="_blank"
            rel="noreferrer"
          >
            Sogol Afshar
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/sogol-tech/react-weather.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on Github{" "}
          </a>
          and hosted on{" "}
          <a href="https://happy-noyce-124f1d.netlify.app/" target="-blank">
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
