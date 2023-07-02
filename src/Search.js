import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: 0,
      city: response.data.main.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "caa883a4a60d93878755b08a933f74ea";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function displayCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Type city"
        className="search-field"
        onChange={displayCity}
      />
      <input className="search-button" type="submit" value="Search" />
      <input className="search-button green" type="submit" value="Current" />
    </form>
  );
  if (loaded) {
    return (
      <div>
        {" "}
        {form}
        <div>
          <h3>{(weather, city)}</h3>
          <ul>
            <li>Temperature {Math.round(weather.temperature)}°C</li>
            <li>Humidity {weather.humidity}</li>
            <li>Wind {Math.round(weather.wind)}</li>
          </ul>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
