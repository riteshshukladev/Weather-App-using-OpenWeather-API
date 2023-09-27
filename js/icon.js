export function weathericon(code) {
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
      71: { weather: "Light snow shower", backgroundImage: "/icon/light snow.png" },
      73: { weather: "Moderate snow shower", backgroundImage: "/icon/moderate snow.png" },
      75: { weather: "Heavy snow shower", backgroundImage: "/icon/snow.png" },
      77: { weather: "Light snow", backgroundImage: "/icon/light snow.png" },
      80: { weather: "Slight rain shower", backgroundImage: "/icon/light-rain.png" },
      81: { weather: "Moderate rain shower", backgroundImage: "/icon/moderate rain.png" },
  
      82: { weather: "Heavy rain shower", backgroundImage: "/icon/heavy-rain.png" },
      85: { weather: "Light snow shower", backgroundImage: "/icon/light snow.png" },
      86: { weather: "Heavy snow shower", backgroundImage: "/icon/snow.png" },
      95: { weather: "Thunderstorm", backgroundImage: "/icon/thunderstorm.png" },
      96: { weather: "Thunderstorm with slight rain", backgroundImage: "/icon/thunderstorm-with-rain.png" },
      99: { weather: "Thunderstorm with heavy rain", backgroundImage: "/icon/thunderstorm-with-rain.png" },
    };
    const weatherData = icon[code];
    if (weatherData) {
      document.querySelector('.weather-icons img').src = `${weatherData.backgroundImage}`;
    }
  }