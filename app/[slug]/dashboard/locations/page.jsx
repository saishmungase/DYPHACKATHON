"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

const locations = [
  { id: 1, name: "New York", aqi: 42 },
  { id: 2, name: "Los Angeles", aqi: 58 },
  { id: 3, name: "Chicago", aqi: 35 },
  { id: 4, name: "Houston", aqi: 48 },
  { id: 5, name: "Phoenix", aqi: 52 },
]

export default function LocationsPage() {
  const [selectedLocation, setSelectedLocation] = useState(null)

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Locations</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl text-gray-600 font-semibold mb-4">Select a Location</h2>
          <ul className="space-y-2">
            {locations.map((location) => (
              <li
                key={location.id}
                className={`flex items-center justify-between p-3 rounded-md cursor-pointer transition-colors duration-200 ease-in-out
                  ${selectedLocation === location.id ? "bg-green-100 text-green-800" : "hover:bg-gray-100"}`}
                onClick={() => setSelectedLocation(location.id)}
              >
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="text-gray-600">{location.name}</span>
                </div>
                <span className={`font-semibold ${location.aqi <= 50 ? "text-green-600" : "text-orange-600"}`}>
                  AQI: {location.aqi}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl text-gray-600 font-semibold mb-4">Map View</h2>
          <div className="bg-gray-200 h-64 rounded-md flex items-center justify-center">
            <span className="text-gray-500">Map placeholder</span>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Select a location to view its position on the map and get detailed air quality information.
          </p>
        </div>
      </div>
    </div>
  )
}

