// helpers.js
import { fetchCityWeather } from './weather.js';

export function setupcityListner() {
    document.querySelectorAll('.cities').forEach((city) => {
      city.addEventListener('click', selectionfromgivencities);
    });
  }
  
  export function selectionfromgivencities() {
    document.querySelector('#input_city').value = this.innerText;
    const apikey = "d0fa0e2fa5e7452f908c3a10bc16a9ec";
    const city_name = this.innerText;
    const clickbtn = document.querySelector('.btn').addEventListener('click', () => {
      fetchCityWeather(apikey, city_name);
    });
  }
  
  // Rest of your helper functions
  