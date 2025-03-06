
import { Droplets, Wind } from "lucide-react"


export default function WeatherCard({weather, getWeatherIcon}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 overflow-hidden">
      <h2 className="text-lg font-semibold text-gray-800 mb-3">Weather Conditions</h2>
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-3xl font-bold text-gray-800">{weather.temperature}°F</div>
          <div className="text-gray-600">{weather.condition}</div>
        </div>
        {getWeatherIcon}
      </div>
      <div className="space-y-3">
        <div className="flex items-center">
          <Droplets className="h-5 w-5 text-blue-500 mr-2" />
          <span className="text-gray-700">Humidity: {weather.humidity}%</span>
        </div>
        <div className="flex items-center">
          <Wind className="h-5 w-5 text-gray-500 mr-2" />
          <span className="text-gray-700">Wind: {weather.windSpeed} mph</span>
        </div>
      </div>
    </div>
  )
}

