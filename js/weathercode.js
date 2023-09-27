export function weathercode(code) {
    let weatherInfo = {
      1: { weather: "Sunny", backgroundImage: "/images/sunny.jpg" },
      2: { weather: "Clear", backgroundImage: "/images/sunny.jpg" },
      3: { weather: "Partly cloudy", backgroundImage: "/images/party_cloud.jpg" },
      4: { weather: "Overcast", backgroundImage: "/images/overcast.jpg" },
      45: { weather: "Fog", backgroundImage: "/images/fog.jpg" },
      48: { weather: "Fog", backgroundImage: "/images/fog.jpg" },
      51: { weather: "Light rain shower", backgroundImage: "/images/light_rain.jpg" },
      53: { weather: "Moderate rain shower", backgroundImage: "/images/light_rain.jpg" },
      55: { weather: "Heavy rain shower", backgroundImage: "/images/rainy.jpg" },
      56: { weather: "Freezing rain shower", backgroundImage: "/images/freezing_rain.jpg" },
      66: { weather: "Freezing rain shower", backgroundImage: "/images/freezing_rain.jpg" },
      57: { weather: "Moderate freezing rain shower", backgroundImage: "/images/freezing_rain.jpg" },
      67: { weather: "Moderate freezing rain shower", backgroundImage: "/images/freezing_rain.jpg" },
      61: { weather: "Light rain", backgroundImage: "/images/light_rain.jpg" },
      63: { weather: "Moderate rain", backgroundImage: "/images/rainy.jpg" },
      65: { weather: "Heavy rain", backgroundImage: "/images/rainy.jpg" },
      71: { weather: "Light snow shower", backgroundImage: "/images/snow_shower.jpg" },
      73: { weather: "Moderate snow shower", backgroundImage: "/images/snow_shower.jpg" },
      75: { weather: "Heavy snow shower", backgroundImage: "/images/snow_shower_heavy.jpg" },
      77: { weather: "Light snow", backgroundImage: "/images/light_snow.jpg" },
      80: { weather: "Slight rain shower", backgroundImage: "/images/light_rain.jpg" },
      81: { weather: "Moderate rain shower", backgroundImage: "/images/rain_shower.jpg" },
      82: { weather: "Heavy rain shower", backgroundImage: "/images/rain_shower heavy.jpg" },
      85: { weather: "Light snow shower", backgroundImage: "/images/snow_shower.jpg" },
      86: { weather: "Heavy snow shower", backgroundImage: "/images/snow_shower_heavy.jpg" },
      95: { weather: "Thunderstorm", backgroundImage: "/images/thunderstorm.jpg" },
      96: { weather: "Thunderstorm with slight rain", backgroundImage: "/images/thunderstorm_with_rain.jpg" },
      99: { weather: "Thunderstorm with heavy rain", backgroundImage: "/images/thunderstorm_with_rain.jpg" },
    };
  
    const weatherData = weatherInfo[code];
    if (weatherData) {
      document.querySelector('.weather-type').innerHTML = weatherData.weather;
      document.querySelector('#container').style.backgroundImage = `url(${weatherData.backgroundImage})`;
    }
  }