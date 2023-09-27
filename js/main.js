// main.js

import { setupcityListner, selectionfromgivencities } from './helpers.js';
import {fetchCityWeather,updateDateTimeWithTimezone } from './weather.js';
import { weathercode } from './weathercode.js';
import { weathericon } from './icon.js';

// Call the setupCityListeners function once the page loads
document.addEventListener("DOMContentLoaded", () => {
  setupcityListner();
});

// Getting the name of the city and passing the longitude and latitude to fetch the weather details
const clickbtn = document.querySelector('.btn').addEventListener('click', loctnid);

async function loctnid() {
  const apikey = "d0fa0e2fa5e7452f908c3a10bc16a9ec";
  const city_name = document.querySelector('#input_city').value;
  fetchCityWeather(apikey, city_name);
}

// Rest of your code here
