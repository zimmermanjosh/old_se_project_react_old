import "./WeatherCard.css";

const WeatherOptions = [
  {
    url: require("../images/day/cloudy.svg").default,
    day: true,
    type: "cloudy",
  },
  { url: require("../images/day/fog.svg").default, day: true, type: "fog" },
  { url: require("../images/day/rain.svg").default, day: true, type: "rain" },
  { url: require("../images/day/snow.svg").default, day: true, type: "snow" },
  { url: require("../images/day/storm.svg").default, day: true, type: "storm" },
  { url: require("../images/day/sunny.svg").default, day: true, type: "sunny" },
  {
    url: require("../images/night/clear_sunny.svg").default,
    day: false,
    type: "clear_sunny",
  },
  {
    url: require("../images/night/cloudy.svg").default,
    day: false,
    type: "cloudy",
  },
  { url: require("../images/night/fog.svg").default, day: false, type: "fog" },
  {
    url: require("../images/night/rain.svg").default,
    day: false,
    type: "rain",
  },
  {
    url: require("../images/night/snow.svg").default,
    day: false,
    type: "snow",
  },
  {
    url: require("../images/night/storm.svg").default,
    day: false,
    type: "storm",
  },
];

const WeatherCard = ({ day, type, weatherTemp }) => {
  console.log("weather card");
  const imageSrc = WeatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);
  console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp}</div>
      <img src={imageSrcUrl} alt="sunny" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
