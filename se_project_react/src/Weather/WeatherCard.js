import "./WeatherCard.css";

const WeatherOptions = [
  { url: "/images/images/day/cloudy.svg", day: true, type: "cloudy" },
  { url: "/images/day/fog.svg", day: true, type: "fog" },
  { url: "/images/day/rain.svg", day: true, type: "rain" },
  { url: "/images/day/snow.svg", day: true, type: "snow" },
  { url: "/images/day/storm.svg", day: true, type: "storm" },
  { url: "/images/day/sunny.svg", day: true, type: "sunny" },
  { url: "/images/night/clear_sunny.svg", day: false, type: "clear_sunny" },
  { url: "/images/night/cloudy.svg", day: false, type: "cloudy" },
  { url: "/images/night/fog.svg", day: false, type: "fog" },
  { url: "/images/night/rain.svg", day: false, type: "rain" },
  { url: "/images/night/snow.svg", day: false, type: "snow" },
  { url: "/images/night/storm.svg", day: false, type: "storm" },
];

const WeatherCard = ({ day, type }) => {
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
      <div className="weather_info">70F</div>
      <img src={imageSrcUrl} alt="sunny" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
