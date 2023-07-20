import React, { useEffect, useRef } from "react";
import WeatherInfoProps from "../Type";
const WeatherInfo: React.FC<WeatherInfoProps> = ({ weatherData }) => {
  const weatherContain: any = useRef();
  useEffect(() => {
    if (weatherData) {
      weatherContain.current.style.display = "block";
    }
  });

  const weatherCheck = (weatherI: string) => {
    if (weatherI === "Clouds") {
      return "img/clouds.png";
    } else if (weatherI === "Clear") {
      return "img/clear.png";
    } else if (weatherI === "Rain") {
      return "img/rain.png";
    } else if (weatherI === "Drizzle") {
      return "img/drizzle.png";
    } else if (weatherI === "Snow") {
      return "img/snow.png";
    } else if (weatherI === "Mist") {
      return "img/mist.png";
    }
  };

  return (
    <div className="weather" ref={weatherContain}>
      <img
        src={
          weatherData
            ? weatherCheck(weatherData.weather[0].main)
            : "img/clouds.png"
        }
        alt="Weather"
      />
      <h1 className="temp">
        {weatherData
          ? `${Math.floor(weatherData.main.temp - 273.15)}°C`
          : "22°C"}
      </h1>
      <h2 className="city">{weatherData ? weatherData.name : "Korea"}</h2>
      <div className="details">
        <div className="col">
          <img src="img/humidity.png" alt="Humidity" />
          <div>
            <p className="humidity">
              {weatherData ? `${weatherData.main.humidity}%` : "50%"}
            </p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img src="img/wind.png" alt="Wind" />
          <div>
            <p className="wind">
              {weatherData ? `${weatherData.wind.speed}km/h` : "15 km/h"}
            </p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
