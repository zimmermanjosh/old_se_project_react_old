import ItemCard from "../ItemCard/ItemCard.js";
import WeatherCard from "../Weather/WeatherCard.js";
import defaultClothingItems from "../Utils/Constants.js";
function Main({ weatherTemp }) {
  return (
    <main className="main">
      <WeatherCard day={true} type="rain" weatherTemp={weatherTemp} />
      <section className="card_section" id="card-section">
        Today is {weatherTemp} , Dallas, Tx / You may want to wear:
        <div className="card_items">
          {defaultClothingItems.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
