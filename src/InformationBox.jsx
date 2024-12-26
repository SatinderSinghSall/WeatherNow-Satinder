import "./InformationBox.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InformationBox({ information }) {
  const INIT_URL =
    "https://w7.pngwing.com/pngs/244/421/png-transparent-weather-clouds-fog-foggy-weather-color-icon-thumbnail.png";
  const HOT_URL =
    "https://static.vecteezy.com/system/resources/thumbnails/010/989/531/small_2x/hot-weather-3d-rendering-isolated-on-transparent-background-ui-ux-icon-design-web-and-app-trend-png.png";
  const COLD_URL =
    "https://i.pinimg.com/564x/89/e9/9d/89e99d32523850ce28d136799c509aef.jpg";
  const RAIN_URL = "https://cdn-icons-png.flaticon.com/512/4150/4150897.png";

  const weatherImage =
    information.humidity > 80
      ? RAIN_URL
      : information.temp > 15
      ? HOT_URL
      : COLD_URL;
  const weatherIcon =
    information.humidity > 80 ? (
      <ThunderstormIcon />
    ) : information.temp > 15 ? (
      <WbSunnyIcon />
    ) : (
      <AcUnitIcon />
    );

  return (
    <div className="information-box">
      <h1>Weather Information:</h1>
      <p className="city-name">
        {information.city}, {information.country}
      </p>

      <Card sx={{ maxWidth: 345 }} className="weather-info">
        <CardMedia
          sx={{ height: 140 }}
          image={weatherImage}
          title="Weather Icon"
        />

        <CardContent className="card-content">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="card-title"
          >
            City: {information.city} {weatherIcon} - {information.weather}
          </Typography>

          <div className="weather-info-text">
            <span>Temperature: {information.temp}°C</span>
            <span>Humidity: {information.humidity}%</span>
            <span>Min Temperature: {information.tempMin}°C</span>
            <span>Max Temperature: {information.tempMax}°C</span>
            <span>Feels Like: {information.feelsLike}°C</span>
          </div>

          <p className="card-description">
            The weather can be described as {information.weather} and feels like{" "}
            {information.feelsLike}°C.
          </p>
        </CardContent>

        <CardActions className="card-actions">
          <Button startIcon={<ShareIcon />}>Share</Button>
          <Button
            startIcon={<LightbulbIcon />}
            onClick={() =>
              (window.location.href =
                "https://wanderlux.onrender.com/developer")
            }
          >
            Learn More
          </Button>
        </CardActions>
      </Card>

      <footer className="footer">
        <p>© 2024-25 Satinder: WeatherNow App. All rights reserved.</p>
      </footer>
    </div>
  );
}
