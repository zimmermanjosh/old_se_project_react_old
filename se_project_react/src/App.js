import "./App.css";
import Header from "./Header/Header.js";
import WeatherCard from "./Weather/WeatherCard.js";
//import InterModal from "./InterModal/InterModal";
//import logo from "./logo.svg";
function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <WeatherCard day={true} type="rain" />

        <section id="card-section">card-section</section>
      </main>
    </div>
  );
}

export default App;
