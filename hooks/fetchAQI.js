async function getCurrentAQIData(lat, lon) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${process.env.WATHERAPI}`
      );
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return data.list[0].components; // Ensure proper data extraction
    } catch (error) {
      console.error("Error fetching AQI data:", error);
      return null;
    }
  }

  
export async function getWeatherAQIData(lat, lon) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.WATHERAPI}`
      );
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
      }
      const data = await response.json();
      return {  
        'weather' : data.weather.main,
        'wind' : data.wind.speed,
        'humidity' : data.main.humadity,
        'temp' : (data.main.temp)
      }
    } catch (error) {
      console.error("Error fetching AQI data:", error);
      return null;
    }
  }

export default getCurrentAQIData;