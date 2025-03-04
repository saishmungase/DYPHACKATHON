import { Bot, ThumbsUp } from "lucide-react"


export default function SuggestionCard({ suggestion, aqi }) {
  const getBgColor = () => {
    if (aqi <= 50) return "bg-green-50"
    if (aqi <= 100) return "bg-yellow-50"
    if (aqi <= 150) return "bg-orange-50"
    return "bg-red-50"
  }

  return (
    <div className={`rounded-lg shadow-md p-4 overflow-hidden ${getBgColor()}`}>
      <div className="flex items-center mb-3">
        <Bot className="h-5 w-5 text-gray-700" />
        <h2 className="text-lg font-semibold text-gray-800 ml-2">AI Suggestion</h2>
      </div>
      <p className="text-gray-700">{suggestion}</p>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-500">Based on current conditions</div>
        <button className="flex items-center text-sm text-green-600 hover:text-green-700">
          <ThumbsUp className="h-4 w-4 mr-1" />
          Helpful
        </button>
      </div>
    </div>
  )
}

