// weather.js

export async function fetchCityWeather(apikey, city_name) {
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
  
  export async function getweather(latitude, longitude) {
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
        document.querySelector('.wind-data').innerHTML = `${data.hourly.windspeed_10m[0]} km/h`;
        document.querySelector('.rain-data').innerHTML = `${data.hourly.rain[0]} mm`;
        document.querySelector('.visibility-data').innerHTML = `${data.hourly.visibility[0]} m`;
        updateDateTimeWithTimezone(data.timezone);
        weathercode(data.hourly.weathercode[0]);
        weathericon(data.hourly.weathercode[0]);
        document.querySelector('.snow-data').innerHTML = `${data.hourly.snowfall[0]} cm`;
      })
      .catch(err => {
        console.error("error fetching data", err);
      });
  }
  
  // Rest of your weather-related functions
// update.js

// This function updates the child elements with the current date, time, and day in a specific timezone
export function updateDateTimeWithTimezone(timezone) {
    const parent = document.querySelector('.day-and-time');
    const date = new Date();
  
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: `${timezone}`,
    };
  
    const timeString = date.toLocaleString('en-US', options);
    const timeRegex = /\d{1,2}:\d{2}\s[AP]M/;
    const time = timeString.match(timeRegex)[0];
  
    const day = date.toLocaleString('en-US', { weekday: 'long' });
    const month = date.toLocaleString('en-US', { month: 'long' });
    const dateOfMonth = date.toLocaleString('en-US', { day: 'numeric' });
    const year = date.toLocaleString('en-US', { year: 'numeric' });
  
    parent.querySelector('.day').textContent = day + "-";
    parent.querySelector('.date').textContent = `${month} ${dateOfMonth} ${year}` + "-";
    parent.querySelector('.time').textContent = time;
  }
  


    