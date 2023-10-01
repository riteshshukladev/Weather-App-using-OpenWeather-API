// Call the setupCityListeners function once the page loads
document.addEventListener("DOMContentLoaded", () => {
  setupcityListner();
});



// Getting the name of the city and passing the longitude and lattitude to the fetch the weather details//
// const clickbtn = document.querySelector('.btn').addEventListener('click', loctnid);

const city_input = document.querySelector('#input_city').addEventListener('input', ()=>{
  clickbtn = document.querySelector('.btn').addEventListener('click', loctnid);
});

// Adding the feature that if user selects the given city whose names are provided then search for them.


function setupcityListner() {
  document.querySelectorAll('.cities').forEach((city) => {
    city.addEventListener('click', selectionfromgivencities);
  });
}
function selectionfromgivencities() {
  document.querySelector('#input_city').value = this.innerText;
  const apikey = "d0fa0e2fa5e7452f908c3a10bc16a9ec";
  const city_name = this.innerText;
  fetchCityWeather(apikey, city_name);

}


async function loctnid() {
  const apikey = "d0fa0e2fa5e7452f908c3a10bc16a9ec";
  const city_name = document.querySelector('#input_city').value;
  fetchCityWeather(apikey, city_name);
}



async function fetchCityWeather(apikey, city_name) {
  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city_name}&key=${apikey}`)
    .then(response => response.json())
    .then(data => {

      const latitude = data.results[0].geometry.lat;
      const longitude = data.results[0].geometry.lng;
      getweather(latitude, longitude);
      const city_display = document.querySelector('.city').innerHTML = city_name;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      document.querySelector('.error-area').style.display = "block";
      document.querySelector('.error-area h5').innerHTML = "!!!Please enter a valid city name!!!";

      setTimeout(() => {
        document.querySelector('.error-area').style.display = "none"; // Change to "none" to hide the element
      }, 3000);
    });
}




async function getweather(latitude, longitude) {

  fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=weathercode,temperature_2m,relativehumidity_2m,rain,snowfall,cloudcover,visibility,windspeed_10m&daily=sunrise,,sunset&timezone=auto&forecast_days=1`)
    .then(response => {
      if (response.status == 200) {
        return response.json()
      }
      else {
        console.error("error returned from server");
      }
    })
    .then(data => {

      document.querySelector('.temp').innerHTML = `${data.hourly.temperature_2m[0]}°C`;
      document.querySelector('.cloudy-data').innerHTML = `${data.hourly.cloudcover[0]}%`;
      document.querySelector('.humid-data').innerHTML = `${data.hourly.relativehumidity_2m[0]}%`;
      document.querySelector('.wind-data').innerHTML = `${data.hourly.windspeed_10m
      [0]} km/h`;
      document.querySelector('.rain-data').innerHTML = `${data.hourly.rain[0]} mm`;
      document.querySelector('.visibility-data').innerHTML = `${data.hourly.visibility[0]} m`;
      document.querySelector('.snow-data').innerHTML = `${data.hourly.snowfall[0]} cm`;
      weathercode(data.hourly.weathercode[0]);
      weathericon(data.hourly.weathercode[0]);
      updateDateTimeWithTimezone(data.timezone);
    })
    .catch(err => {
      console.error("error fetching data", err);
    })
}

// This are the weather codes and the background images for the weather codes
// This weathercode is official weather code from open-meteo.com
// This weathercode helps in finding the weather-condition 
function weathercode(code) {
  let weatherInfo = {
    1: { weather: "Sunny", backgroundImage:"images/sunny1.png" },
    2: { weather: "Clear", backgroundImage: "/images/clear-weather.png" },
    3: { weather: "Partly cloudy", backgroundImage: "/images/partly-cloudy.png" },
    4: { weather: "Overcast", backgroundImage: "/images/overcast1.png" },
    45: { weather: "Fog", backgroundImage: "/images/foggy-weather.png" },
    48: { weather: "Fog", backgroundImage: "/images/foggy-weather.png" },
    51: { weather: "Light rain shower", backgroundImage: "/images/light-rain.png" },
    53: { weather: "Moderate rain shower", backgroundImage: "/images/moderate-rain.png" },
    55: { weather: "Heavy rain shower", backgroundImage: "/images/heavy-rain-shower.png" },
    56: { weather: "Freezing rain shower", backgroundImage: "/images/freezing-rain-shower.png" },
    66: { weather: "Freezing rain shower", backgroundImage: "/images/freezing-rain-shower.png" },
    57: { weather: "Moderate freezing rain shower", backgroundImage: "/images/heavy-freezing-rain-shower.png" },
    67: { weather: "Moderate freezing rain shower", backgroundImage: "/images/heavy-freezing-rain-shower.png" },
    61: { weather: "Light rain", backgroundImage: "/images/light-rain.png" },
    63: { weather: "Moderate rain", backgroundImage: "/images/moderate-rain.png" },
    65: { weather: "Heavy rain", backgroundImage: "/images/heavy-rain.png" },
    71: { weather: "Light snow shower", backgroundImage: "/images/light-snow-shower.png" },
    73: { weather: "Moderate snow shower", backgroundImage: "/images/moderate-snow-shower.png" },
    75: { weather: "Heavy snow shower", backgroundImage: "/images/snow-snow-shower.png" },
    77: { weather: "Light snow", backgroundImage: "/images/light-snow-shower.png" },
    80: { weather: "Slight rain shower", backgroundImage: "/images/light-rain.png" },
    81: { weather: "Moderate rain shower", backgroundImage: "/images/moderate-rain.png" },
    82: { weather: "Heavy rain shower", backgroundImage: "/images/heavy-rain-shower.png" },
    85: { weather: "Light snow shower", backgroundImage: "/images/light-snow-shower.png" },
    86: { weather: "Heavy snow shower", backgroundImage: "/images/snow-snow-shower.png" },
    95: { weather: "Thunderstorm", backgroundImage: "/images/thunderstorm.png" },
    96: { weather: "Thunderstorm with slight rain", backgroundImage: "/images/thunderstorm-with-rain.png" },
    99: { weather: "Thunderstorm with heavy rain", backgroundImage: "/images/thunderstormn.png" },
  };

  const weatherData = weatherInfo[code];
  if (weatherData) {
    document.querySelector('.weather-type').innerHTML = weatherData.weather;
    document.querySelector('#container').style.backgroundImage = `url(${weatherData.backgroundImage})`;
  }
}



function weathericon(code) {
  const icon = {
    1: { weather: "Sunny", backgroundImage: "/icon/sunny.png" },
    2: { weather: "Clear", backgroundImage: "/icon/sunny.png" },
    3: { weather: "Partly cloudy", backgroundImage: "/icon/cloudy.png" },
    4: { weather: "Overcast", backgroundImage: "/icon/overcast.png" },
    45: { weather: "Fog", backgroundImage: "/icon/fog.png" },
    48: { weather: "Fog", backgroundImage: "/icon/fog.png" },
    51: { weather: "Light rain shower", backgroundImage: "/icon/light-rain.png" },
    53: { weather: "Moderate rain shower", backgroundImage: "/icon/moderate-rain.png" },
    55: { weather: "Heavy rain shower", backgroundImage: "/icon/heavy-rain.png" },
    56: { weather: "Freezing rain shower", backgroundImage: "/icon/freezing-rain.png" },
    66: { weather: "Freezing rain shower", backgroundImage: "/icon/freezing-rain.png" },
    57: { weather: "Moderate freezing rain shower", backgroundImage: "/icon/freezing-rain.png" },
    67: { weather: "Moderate freezing rain shower", backgroundImage: "/icon/freezing-rain.png" },
    61: { weather: "Light rain", backgroundImage: "/icon/light-rain.png" },
    63: { weather: "Moderate rain", backgroundImage: "/icon/moderate-rain.png" },
    65: { weather: "Heavy rain", backgroundImage: "/icon/heavy-rain.png" },
    71: { weather: "Light snow shower", backgroundImage: "/icon/snow-shower.png" },
    73: { weather: "Moderate snow shower", backgroundImage: "/icon/snow-shower.png" },
    75: { weather: "Heavy snow shower", backgroundImage: "/icon/snow-shower.png" },
    77: { weather: "Light snow", backgroundImage: "/icon/snow.png" },
    80: { weather: "Slight rain shower", backgroundImage: "/icon/light-rain.png" },
    81: { weather: "Moderate rain shower", backgroundImage: "/icon/moderate rain.png" },

    82: { weather: "Heavy rain shower", backgroundImage: "/icon/heavy-rain.png" },
    85: { weather: "Light snow shower", backgroundImage: "/icon/snow-shower.png" },
    86: { weather: "Heavy snow shower", backgroundImage: "/icon/snow.png" },
    95: { weather: "Thunderstorm", backgroundImage: "/icon/thunder.png" },
    96: { weather: "Thunderstorm with slight rain", backgroundImage:"/icon/thunderstorm-rain"},
    99: { weather: "Thunderstorm with heavy rain", backgroundImage: "/icon/thunderstorm-rain.png" }
  };
  const weatherData = icon[code];
  if (weatherData) {
    document.querySelector('.weather-icons img').src = `${weatherData.backgroundImage}`;
  }
}


function updateDateTimeWithTimezone(timezone) {
  const parent = document.querySelector('.day-and-time');
  const date = new Date();

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true, 
    timeZone: `${timezone}`,
  };

  const timeString = date.toLocaleString('en-US', options);

  const day = date.toLocaleString('en-US', { weekday: 'short' });
  const month = date.toLocaleString('en-US', { month: 'short' });
  const dateOfMonth = date.toLocaleString('en-US', { day: 'numeric' });
  const year = date.toLocaleString('en-US', { year: 'numeric' });

  const [formattedTime, amPm] = timeString.split(' ');

  const outputString = `${day} ${month}-${dateOfMonth}-${year} ${formattedTime}${amPm}`;

  parent.textContent = outputString;
}




