import "./Header.css";
import DateTime from "./DateTime.js";
import React, { useState, useEffect } from "react";

const Header = ({ onCreateModal }) => {
  console.log("Header");
  const [location, setLocation] = useState(null);

  useEffect(() => {
    // Check if Geolocation is available in the browser
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Retrieve the latitude and longitude from the position object
        const { latitude, longitude } = position.coords;

        // You can use a reverse geocoding service to get the city and state
        // Replace 'YOUR_API_KEY' with your actual OpenCage Geocoder API key
        fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=20740fa69bd84624bf45f4a801ef40c3`,
        )
          .then((response) => response.json())
          .then((data) => {
            const city = data.results[0].components.city;
            const state = data.results[0].components.state;

            // Update the location state with the city and state
            setLocation(`${city}, ${state}`);
          })
          .catch((error) => {
            console.error("Error fetching location data:", error);
          });
      });
    } else {
      console.error("Geolocation is not available in this browser.");
    }
  }, []);

  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img
            src={require("../images/dashboard/logo.svg").default}
            alt="logo"
          ></img>
        </div>
        <div>
          <DateTime />
        </div>
        <div className="header__location">{location || "Loading..."}</div>
      </div>
      <div className="header__avatar-logo">
        <div>
          <button type="text" onClick={onCreateModal}>
            add new clothes
          </button>
        </div>
        <div className="header__name">what's my name</div>
        <div>
          <img
            src={require("../images/dashboard/avatar.svg").default}
            alt="avatar"
          ></img>
        </div>
      </div>
    </header>
  );
};
export default Header;
