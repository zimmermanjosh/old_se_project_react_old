//key 9ed2af8b44ccce6e0959621de59c2764
//api https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

//const longitude = 12.9833;
//const latitude = 77.6167;

const latitude = 32.779167;
const longitude = -96.80889;
const APIkey = "9ed2af8b44ccce6e0959621de59c2764";
const apiRequest = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`;

export const getForecastWeather = () => {
  const weatherApi = fetch(apiRequest).then((res) => {
    console.log(res);
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status} ${res.statusText}`);
    }
  });

  return weatherApi;
};

export const parseWeatherData = (data) => {
  console.log(data);
  const weatherMain = data.main;
  const weatherTemp = weatherMain && weatherMain.temp;
  console.log("!!weatherMain:", Math.ceil(weatherTemp));
  return Math.ceil(weatherTemp);

  // Get the weather description based on the condition ID or use a default description
  const weatherDescription =
    weatherDescriptions[weatherId] || "Unknown Weather";

  return {
    temperature: Math.ceil(weatherTemp),
    description: weatherDescription,
  };
};
