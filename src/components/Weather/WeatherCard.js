import "./WeatherCard.css";
import { weatherOptions } from "../../utils/Constants.js";

const WeatherCard = ({ day, type, weatherTemp }) => {
  const imageSrc = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  if (imageSrc) {
    const imageSrcUrl = imageSrc.url || ""; // Added a check here
    return (
      <section className="weather" id="weather">
        <div className="weather__info">{weatherTemp} F</div>
        <img
          src={imageSrcUrl}
          alt="weather display"
          className="weather__image"
        />
      </section>
    );
  }
};

export default WeatherCard;
