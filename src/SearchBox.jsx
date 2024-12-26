import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import "./SearchBox.css";

export default function SearchBox({ updateWeatherInformation }) {
  const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const WEATHER_API_KEY = "6e9b9d2757a8fccc1db3686f6020f917";

  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.className = theme === "dark" ? "dark-mode" : "light-mode";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const getWeatherInfo = async () => {
    try {
      const response = await fetch(
        `${WEATHER_API_URL}?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const JSON_Response = await response.json();
      const result = {
        country: JSON_Response.sys.country,
        city: JSON_Response.name,
        temp: JSON_Response.main.temp,
        tempMin: JSON_Response.main.temp_min,
        tempMax: JSON_Response.main.temp_max,
        humidity: JSON_Response.main.humidity,
        feelsLike: JSON_Response.main.feels_like,
        weather: JSON_Response.weather[0].description,
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newInformation = await getWeatherInfo();
      updateWeatherInformation(newInformation);
      setCity("");
      setError(false);
    } catch {
      setError(true);
    }
  };

  return (
    <div className="main-box">
      <h1>Satinder: WeatherNow</h1>
      <Button
        variant="contained"
        startIcon={theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        onClick={toggleTheme}
        className="theme-toggle-btn"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
      <p>Check real-time weather updates:</p>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city-name"
          label="Enter City"
          variant="filled"
          required
          value={city}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          endIcon={<SearchIcon />}
          type="submit"
          className="search-btn"
        >
          Search
        </Button>
        {error && (
          <p className="error-message">Location not found. Please try again.</p>
        )}
      </form>
    </div>
  );
}
