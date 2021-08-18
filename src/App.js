import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Weather App</p>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/sogol-tech" target="_blank">
          Sogol Afshar
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/sogol-tech/react-weather.git"
          target="_blank"
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
  );
}

export default App;
