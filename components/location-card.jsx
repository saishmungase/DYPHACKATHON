
export default function LocationCard({ title, icon, locations, iconDirection, textColor }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 overflow-hidden">
      <div className="flex items-center mb-3">
        {icon}
        <h2 className="text-lg font-semibold text-gray-800 ml-2">{title}</h2>
      </div>
      <div className="space-y-3">
        {locations.map((location, index) => (
          <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded-md">
            <div>
              <div className="font-medium text-gray-800">{location.name}</div>
              <div className="text-sm text-gray-500">{location.distance}</div>
            </div>
            <div className="flex items-center">
              <span className={`font-bold mr-1 ${textColor}`}>{location.aqi}</span>
              {iconDirection}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

