"use client";

import { useState, useEffect } from "react";
import getCurrentAQIData, { getWeatherAQIData } from "./fetchAQI";
import { useUserCoords } from "./fetchLoction";

export function useDashboardData() {
  const [aqiData, setAqiData] = useState(null);
  const coords = useUserCoords();

  useEffect(() => {
    const fetchData = async () => {
      if (coords?.lat && coords?.lon) {
        const data = await getCurrentAQIData(coords.lat, coords.lon);
        setAqiData(data);
      }
    };

    fetchData();
  }, [coords]); // Refetch data when coords change

  return aqiData;
}

export function useWeatherData(){
    const [weather, setWeather] = useState(null);
    const coords = useUserCoords();
  
    useEffect(() => {
      const fetchData = async () => {
        if (coords?.lat && coords?.lon) {
          const data = await getWeatherAQIData(coords.lat, coords.lon);
          setWeather(data);
        }
      };
  
      fetchData();
    }, [coords]);
    return weather
}
