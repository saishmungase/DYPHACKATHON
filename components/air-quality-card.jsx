
  
  export default function AirQualityCard({ aqi, aqiInfo }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4 overflow-hidden">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Air Quality Index</h2>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-4xl font-bold mb-1">{aqi}</div>
            <div className={`text-sm font-medium ${aqiInfo.textColor}`}>{aqiInfo.category}</div>
          </div>
          <div className="relative h-24 w-24">
            <div className="absolute inset-0 rounded-full bg-gray-100 flex items-center justify-center">
              <div
                className={`h-20 w-20 rounded-full ${aqiInfo.color} flex items-center justify-center text-white font-bold text-xl`}
              >
                {aqi}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className={`h-full ${aqiInfo.color}`} style={{ width: `${Math.min(aqi / 3, 100)}%` }}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0</span>
            <span>100</span>
            <span>200</span>
            <span>300+</span>
          </div>
        </div>
      </div>
    )
  }
  
  