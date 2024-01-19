//key 9ed2af8b44ccce6e0959621de59c2764
//api https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}

const longitude = 12.9833;
const latitude = 77.6167;
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

const response = {
  coord: {
    lon: 12.9833,
    lat: 77.6167,
  },
  weather: [
    {
      id: 804,
      main: "Clouds",
      description: "overcast clouds",
      icon: "04n",
    },
  ],
  base: "stations",
  main: {
    temp: 6.03,
    feels_like: -6.57,
    temp_min: 6.03,
    temp_max: 6.03,
    pressure: 1010,
    humidity: 88,
    sea_level: 1010,
    grnd_level: 1010,
  },
  visibility: 10000,
  wind: {
    speed: 13.98,
    deg: 65,
    gust: 13.96,
  },
  clouds: {
    all: 100,
  },
  dt: 1705620742,
  sys: {
    country: "SJ",
    sunrise: 0,
    sunset: 0,
  },
  timezone: 3600,
  id: 2729456,
  name: "Nybyen",
  cod: 200,
};
