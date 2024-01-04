import "./weather.css";

const WeatherOptions = [
  { url: "/day/cloudy.svg", day: true, type: "cloudy" },
  { url: "/day/fog.svg", day: true, type: "fog" },
  { url: "/day/rain.svg", day: true, type: "rain" },
  { url: "/day/snow.svg", day: true, type: "snow" },
  { url: "/day/storm.svg", day: true, type: "storm" },
  { url: "/day/sunny.svg", day: true, type: "sunny" },
  { url: "/night/clear_sunny.svg", day: false, type: "clear_sunny" },
  { url: "/night/cloudy.svg", day: false, type: "cloudy" },
  { url: "/night/fog.svg", day: false, type: "fog" },
  { url: "/night/rain.svg", day: false, type: "rain" },
  { url: "/night/snow.svg", day: false, type: "snow" },
  { url: "/night/storm.svg", day: false, type: "storm" },
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
      <div className="weather_info">60F</div>
      <img src={imageSrcUrl} alt="sunny" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
