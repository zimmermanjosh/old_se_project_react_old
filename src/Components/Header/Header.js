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

        fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=20740fa69bd84624bf45f4a801ef40c3`,
        )
          .then((response) => response.json())
          .then((data) => {
            const city = data.results[0].components.city;
            const state = data.results[0].components.state;
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
            src={require("../../images/dashboard/logo.svg").default}
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
          <button
            type="text"
            onClick={onCreateModal}
            className="header__clothes-button"
          >
            + add clothes
          </button>
        </div>
        <div className="header__name">Joshua Zimmerman</div>
        <div>
          <img
            src={require("../../images/dashboard/avatar.svg").default}
            alt="avatar"
          ></img>
        </div>
      </div>
    </header>
  );
};
export default Header;
