import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponce(responce) {
    alert(`The weather in ${city} is ${Math.round(responce.data.main.temp)}`);
  }
  let apiKey = "2513f3c728b1b5ff4f4347e1a6af22b8";
  let city = "Glasgow";
  let metric = "&units=metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}${metric}`;
  axios.get(apiUrl).then(handleResponce);
  return "Weather";
}
