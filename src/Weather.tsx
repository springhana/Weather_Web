import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import ErrorMessage from "./components/ErrorMessage";
import WeatherInfo from "./components/WeatherInfo";
import { WeatherFetch } from "./Api/Weather";
import "./App.css";

function Weather() {
  const [weathers, setWeathers] = useState<any>(null);
  const [error, setError] = useState<string>("Invalid city name");

  useEffect(() => {
    fetchData("Korea");
  }, []);

  const fetchData = async (search: string) => {
    try {
      const data = await WeatherFetch(search);
      setWeathers(data);
      if (data !== undefined) {
        setError("");
      } else {
        setError("Invalid city name");
      }
    } catch (error) {
      setWeathers(null);
    }
  };

  const handleSearch = (search: string) => {
    fetchData(search);
  };

  return (
    <div className="card">
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {weathers && <WeatherInfo weatherData={weathers} />}
    </div>
  );
}

export default Weather;
