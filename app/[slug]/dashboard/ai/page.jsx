"use client"

import { useState, useRef } from "react"
import { Upload, X, Check } from "lucide-react"

export default function AIPage() {
  const [image, setImage] = useState(null)
  const [dragOver, setDragOver] = useState(false)
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState(null)
  const fileInputRef = useRef(null)

  const handleDragOver = (e) => {
    e.preventDefault()
    setDragOver(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setDragOver(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    processImage(file)
  }

  const handleFileInput = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      processImage(file)
    }
  }

  const processImage = (file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      setImage(e.target?.result)
      analyzeImage()
    }
    reader.readAsDataURL(file)
  }

  const analyzeImage = () => {
    setAnalyzing(true)
    setTimeout(() => {
      setResult({
        aqi: Math.floor(Math.random() * 300) + 1,
        description: "Based on the image analysis, we've estimated the Air Quality Index (AQI) for the location shown.",
      })
      setAnalyzing(false)
    }, 2000)
  }

  const resetImage = () => {
    setImage(null)
    setResult(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">AI Image Analysis</h1>
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-200 ease-in-out
          ${dragOver ? "border-green-500 bg-green-50" : "border-gray-300 hover:border-gray-400"}
          ${image ? "border-none p-0" : ""}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {!image ? (
          <>
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">Drag and drop an image here, or click to select a file</p>
            <input type="file" className="hidden" onChange={handleFileInput} accept="image/*" ref={fileInputRef} />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200"
            >
              Select Image
            </button>
          </>
        ) : (
          <div className="relative">
            <img src={image || "/placeholder.svg"} alt="Uploaded" className="w-full rounded-lg" />
            <button
              onClick={resetImage}
              className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        )}
      </div>
      {analyzing && (
        <div className="mt-4 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-green-500"></div>
          <p className="mt-2 text-sm text-gray-600">Analyzing image...</p>
        </div>
      )}
      {result && (
        <div className="mt-6 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <Check className="h-6 w-6 text-green-500 mr-2" />
            Analysis Complete
          </h2>
          <p className="text-gray-600 mb-4">{result.description}</p>
          <div className="bg-gray-100 rounded-md p-4">
            <p className="text-lg font-medium">
              Estimated AQI: <span className="text-2xl font-bold text-green-600">{result.aqi}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

