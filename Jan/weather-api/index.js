
const fetchBtn = document.getElementById("fetch"),
  iframe = document.querySelector("iframe"),
  weatherContainer = document.getElementById("weather-container"),
  baseApiUrl = "https://api.openweathermap.org/data/2.5/weather";
  
const locationPromise = new Promise((resolve,reject)=> {
    navigator.geolocation.getCurrentPosition(resolve)
})


const renderWeatherContainer = (weather) => {
    weatherContainer.style.display= 'block';
    // we goona create a div 
    const elements = [
      {
        label: "Location",
        data: weather.name,
      },
      {
        label: "Lat",
        data: weather.coord.lat,
      },
      {
        label: "Long",
        data: weather.coord.lon,
      },
      {
        label: "TimeZone",
        data: weather.timezone,
      },
      {
        label: "Pressure",
        data: weather.main.pressure,
      },
    ];

    elements.forEach((weatherObj) => {
      const div = document.createElement("div");
      const label = document.createElement("span");
      const val = document.createElement("span");

      label.textContent = weatherObj.label;
      val.textContent = weatherObj.data;

      div.appendChild(label);
      div.appendChild(val)
      weatherContainer.appendChild(div);
    });
    
    
}
const renderWeatherDetails = async(lat,long)=> {
    // we goona fetch weather details of user 

    const url = `${baseApiUrl}?lat=${lat}&lon=${long}&appid=98fefb1e26b52c5109dabaa88d3e247a`;
    const res = await fetch(url);

    const data = await res.json();

    console.log("weather details",data);

    renderWeatherContainer(data);
    // we will render them on ui
}

const fetchUserLocation = async ()=> {
    const data = await locationPromise;
    console.log("location",data);

    const lat = data.coords.latitude;
    const long = data.coords.longitude;

    const src = `https://maps.google.com/maps?z=15&output=embed&q=${lat}, ${long}`;

    // i need to hide fetch button
    fetchBtn.classList.add('none');
    iframe.style.display='block';
    iframe.src = src;

    renderWeatherDetails(lat,long);
}


fetchBtn.addEventListener('click',fetchUserLocation);

