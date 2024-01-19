import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function Location() {
  const location = useLocation();
  const [locationState, setLocationState] = useState(location);

  useEffect(() => {
    setLocationState(location);
  }, [location]);

  return (
    <div>
      <h2>Current Location:</h2>
      <pre>{JSON.stringify(locationState, null, 2)}</pre>
    </div>
  );
}

export default Location;
