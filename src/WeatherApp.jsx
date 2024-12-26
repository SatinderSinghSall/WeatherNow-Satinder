import SearchBox from "./SearchBox";
import InformationBox from "./InformationBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInformation, setWeatherInformation] = useState({
    country: "",
    city: "",
    feelsLike: 0,
    humidity: 0,
    temp: 0,
    tempMax: 0,
    tempMin: 0,
    weather: "",
  });

  let updateWeatherInformation = (newInformation) => {
    setWeatherInformation(newInformation);
  };

  return (
    <>
      <div>
        <SearchBox updateWeatherInformation={updateWeatherInformation} />
        <InformationBox information={weatherInformation} />
      </div>
    </>
  );
}
