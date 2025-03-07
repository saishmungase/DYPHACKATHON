"use client";

import { useState, useEffect } from "react";
import {
  MapPin,
  Sun,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudFog,
  AlertTriangle,
  Leaf,
  AlertCircle,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import AirQualityCard from "./air-quality-card";
import LocationCard from "./location-card";
import SuggestionCard from "./suggestion-card";
import WeatherCard from "./weather-card";
import { useDashboardData, useWeatherData } from "@/hooks/fetchDashboard";
import useDataDash from "@/hooks/useData";

export const mockData = {
  'aqi' : 152
}

export default function AirQualityDashboard() {
  const aqiData = useDashboardData();
  const weather = useWeatherData();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const nature = useDataDash();

  useEffect(() => {
    if (aqiData) {
      setData({
        location: nature?.city,
        aqi: aqiData ? 152 : 0, 
        weather: {
          temperature: nature?.temp,
          condition: nature?.weather,
          humidity: nature?.humidity,
          windSpeed: nature?.wind,
        },
        substances: [
          { name: "CO", value: aqiData?.co },
          { name: "PM10", value: aqiData?.pm10 },
          { name: "O3", value: aqiData?.o3 },
          { name: "NO2", value: aqiData?.no2 },
        ],
        cleanerAreas: [
          { name: "Golden Gate Park", aqi: 32, distance: "2.5 miles" },
          { name: "Ocean Beach", aqi: 28, distance: "4.1 miles" },
        ],
        pollutedAreas: [
          { name: "Downtown", aqi: 58, distance: "1.2 miles" },
          { name: "Industrial District", aqi: 67, distance: "3.8 miles" },
        ],
      });
      setLoading(false);
    }
  }, [aqiData]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  const getAqiInfo = (aqi) => {
    if (aqi <= 50) return { category: "Good", color: "bg-green-500", textColor: "text-green-500" }
    if (aqi <= 100) return { category: "Moderate", color: "bg-yellow-500", textColor: "text-yellow-500" }
    if (aqi <= 150)
      return { category: "Unhealthy for Sensitive Groups", color: "bg-orange-500", textColor: "text-orange-500" }
    if (aqi <= 200) return { category: "Unhealthy", color: "bg-red-500", textColor: "text-red-500" }
    if (aqi <= 300) return { category: "Very Unhealthy", color: "bg-purple-500", textColor: "text-purple-500" }
    return { category: "Hazardous", color: "bg-rose-800", textColor: "text-rose-800" }
  }

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "sun":
        return <Sun className="h-8 w-8 text-yellow-500" />
      case "cloud":
        return <Cloud className="h-8 w-8 text-gray-500" />
      case "rain":
        return <CloudRain className="h-8 w-8 text-blue-500" />
      case "snow":
        return <CloudSnow className="h-8 w-8 text-blue-200" />
      case "fog":
        return <CloudFog className="h-8 w-8 text-gray-400" />
      default:
        return <Sun className="h-8 w-8 text-yellow-500" />
    }
  }
  
const getAiSuggestion = (aqi, weather) => {
  if (aqi <= 50) {
    return "Air quality is good! It's a great day for outdoor activities."
  } else if (aqi <= 100) {
    return "Air quality is moderate. Most people can be outside, but consider reducing prolonged outdoor exertion if you're sensitive to air pollution."
  } else if (aqi <= 150) {
    return "Air quality is unhealthy for sensitive groups. Consider limiting outdoor activities, especially if you have respiratory issues."
  } else {
    return "Air quality is unhealthy. It's recommended to stay indoors and keep windows closed. Use air purifiers if available."
  }
}

  const aqiInfo = getAqiInfo(data.aqi);
  const aiSuggestion = getAiSuggestion(data.aqi, data.weather);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-white">Air Quality Dashboard</h1>
        <div className="flex items-center mt-2 text-green-400">
          <MapPin className="h-5 w-5 mr-2" />
          <span>{data.location}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <AirQualityCard aqi={data.aqi} aqiInfo={aqiInfo} />
        <WeatherCard weather={data.weather} getWeatherIcon={getWeatherIcon(data.weather.condition)} />

        <div className="bg-white rounded-lg shadow-md p-4 overflow-hidden">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Air Pollutants</h2>
          <div className="space-y-3">
            {data.substances.map((substance, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-gray-700">{substance.name}</span>
                </div>
                <span className="font-medium text-gray-800">{substance.value}</span>
              </div>
            ))}
          </div>
        </div>

        <LocationCard
          title="Cleaner Areas Nearby"
          icon={<Leaf className="h-5 w-5 text-green-500" />}
          locations={data.cleanerAreas}
          iconDirection={<ArrowDown className="h-4 w-4 text-green-500" />}
          textColor="text-green-500"
        />

        <LocationCard
          title="More Polluted Areas"
          icon={<AlertTriangle className="h-5 w-5 text-red-500" />}
          locations={data.pollutedAreas}
          iconDirection={<ArrowUp className="h-4 w-4 text-red-500" />}
          textColor="text-red-500"
        />
        
        <SuggestionCard suggestion={aiSuggestion} aqi={data.aqi} />
      </div>
    </div>
  );
}