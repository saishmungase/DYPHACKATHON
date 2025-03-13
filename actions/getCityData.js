'use server'

import axios from "axios";

async function getCityInfo(city) {
    const valueGrid = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WATHERAPI}`);
    const data = valueGrid.data;
    const cityName = city.charAt(0).toUpperCase() + city.slice(1);
    const result = {
        "city" : cityName,
        "temp" : Math.round((data.main.temp)-273),
        "weather" : data.weather.main,
        "humidity" : data.main.humidity,
        "wind" : data.wind.speed,
    }
    
    return result;
}

export default getCityInfo;