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
  // Handle the case when imageSrc is not found or 'url' is not available.
  // You can return a placeholder or an error message here.
};

export default WeatherCard;
