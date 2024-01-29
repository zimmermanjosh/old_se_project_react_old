import "./WeatherCard.css";
import { WeatherOptions } from "../Utils/Constants.js";

const WeatherCard = ({ day, type, weatherTemp }) => {
  // console.log("weather card");
  const imageSrc = WeatherOptions.filter((i) => {
    console.log(i);
    return i.day === day && i.type === type;
  });
  // console.log(imageSrc);
  // console.log(imageSrc[0].url);

  const imageSrcUrl = imageSrc[0].url || "";
  return (
    <section className="weather" id="weather">
      <div className="weather__info">{weatherTemp} F</div>
      <img src={imageSrcUrl} alt="weather display" className="weather__image" />
    </section>
  );
};

export default WeatherCard;
