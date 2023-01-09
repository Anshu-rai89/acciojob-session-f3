import { WEATHER_API_BASE_URL,WEATHER_API_KEY } from "./constants.js";

const weatherInfoElement = document.getElementById("weather-info");

function createWeatherInfoItems(weatherLineItems,weatherInfoElement) {

    weatherLineItems.map((item)=> {
        const infoElement = document.createElement('div');
        const labelElement = document.createElement('span');
        const spanInfo = document.createElement("span");
        labelElement.textContent = item.label;
        spanInfo.textContent = item.data;

        infoElement.appendChild(labelElement);
        infoElement.appendChild(spanInfo);

        weatherInfoElement.appendChild(infoElement);
    })
    
}
function renderWeatherInfoOnUI(weather) {
    const h3 = document.createElement('h3');
    h3.textContent = 'Weather Details';
    weatherInfoElement.appendChild(h3);
    const weatherLineItems = [
      {
        label: "Location:",
        data: weather.name,
      },
      {
        label: "Lat:",
        data: weather.coord.lat,
      },
      {
        label: "Long:",
        data: weather.coord.lon,
      },
      {
        label: "TimeZone:",
        data: weather.timezone,
      },
      {
        label: "Wind Speed:",
        data: weather.wind.speed,
      },
      {
        label: "Pressure:",
        data: weather.main.pressure,
      },
      {
        label: "Humidity:",
        data: weather.main.humidity,
      },
      {
        label: "Feels Like:",
        data: weather.main.feels_like,
      },
    ];
    createWeatherInfoItems(weatherLineItems, weatherInfoElement);
}
export const fetchWeatherDetails = async (location) => {
    try {
        const lat = location.coords.latitude,
          long = location.coords.longitude,
          reqUrl = `${WEATHER_API_BASE_URL}?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}`;
        const res = await fetch(reqUrl),
        weatherData = await res.json();

        renderWeatherInfoOnUI(weatherData);

    }catch(error) {
        console.error("Error in Fetching Weather details",error);
    }
}