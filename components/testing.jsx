// "use client";

// import React, { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const AQIPredictor = () => {
//   const [date, setDate] = useState("");
//   const [aqi, setAqi] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Replace with your actual Gemini API key (store this securely!)
//   const GEMINI_API_KEY = "AIzaSyAn9cyC74o_2v0qflu-tBomvsz-MwPjTk4";

//   const handlePrediction = async () => {
//     if (!date) {
//       setError("Please select a date");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setAqi(null);

//     try {
//       // Initialize the Gemini AI model
//       const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//       // Corrected API call format
//       const prompt = `So what was the aqi for the date forgot about 2025 give me the data of 2024: ${date}.`;
//       const result = await model.generateContent({
//         contents: [{ role: "user", parts: [{ text: prompt }] }], // Correct input format
//         generationConfig: { maxOutputTokens: 100, temperature: 0.7 },
//       });

//       // Extract and display the AQI result
//       const predictedAqi =
//         result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No data";
//       setAqi(predictedAqi);
//     } catch (err) {
//       console.error("Error fetching AQI prediction:", err);
//       setError("Failed to fetch AQI prediction. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>AQI Predictor</h1>
//       <div>
//         <label>
//           Select Date:
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//         <button onClick={handlePrediction} disabled={loading}>
//           {loading ? "Predicting..." : "Predict AQI"}
//         </button>
//       </div>

//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {aqi && (
//         <div>
//           <h2>Predicted AQI</h2>
//           <p>{aqi}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AQIPredictor;


// "use client";

// import React, { useState } from "react";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// const AQIPredictor = () => {
//   const [date, setDate] = useState("");
//   const [city, setCity] = useState("");
//   const [aqi, setAqi] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // Dummy AQI data for the last 7 days (Replace with real API data if available)
//   const lastSevenDaysAQI = {
//     "2024-03-01": 120,
//     "2024-03-02": 110,
//     "2024-03-03": 105,
//     "2024-03-04": 115,
//     "2024-03-05": 130,
//     "2024-03-06": 125,
//     "2024-03-07": 118,
//   };

//   // Replace with a secure environment variable in production
//   const GEMINI_API_KEY = "AIzaSyAn9cyC74o_2v0qflu-tBomvsz-MwPjTk4";

//   const handlePrediction = async () => {
//     if (!date || !city) {
//       setError("Please select a date and enter a city");
//       return;
//     }

//     setLoading(true);
//     setError("");
//     setAqi(null);

//     try {
//       // Initialize Gemini AI model
//       const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
//       const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

//       // Prepare AQI history for the prompt
//       const aqiHistory = Object.entries(lastSevenDaysAQI)
//         .map(([date, value]) => `${date}: AQI ${value}`)
//         .join("\n");

//       // Create the AI prompt
//       const prompt = `Just give a random AQI for ${city} on ${date} based on past data.
//       Here is the AQI data for the last 7 days:\n${aqiHistory}`;

//       // Make AI API call
//       const result = await model.generateContent({
//         contents: [{ role: "user", parts: [{ text: prompt }] }],
//         generationConfig: { maxOutputTokens: 100, temperature: 0.7 },
//       });

//       // Extract and display the AQI result
//       const predictedAqi =
//         result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No data available";
//       setAqi(predictedAqi);
//     } catch (err) {
//       console.error("Error fetching AQI prediction:", err);
//       setError("Failed to fetch AQI prediction. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
//       <h1>AQI Predictor</h1>
//       <div>
//         <label>
//           Enter City:
//           <input
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             placeholder="Enter city name"
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Select Date:
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </label>
//       </div>
//       <button onClick={handlePrediction} disabled={loading}>
//         {loading ? "Predicting..." : "Predict AQI"}
//       </button>

//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {aqi && (
//         <div>
//           <h2>Predicted AQI for {city} on {date}</h2>
//           <p>{aqi}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AQIPredictor;

"use client";

import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { motion } from "framer-motion";
import { cn } from "@/libs/utils";

const AQIPredictor = () => {
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [aqi, setAqi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Dummy AQI data for the last 7 days (Replace with real API data if available)
  const lastSevenDaysAQI = {
    "2024-03-01": 120,
    "2024-03-02": 110,
    "2024-03-03": 105,
    "2024-03-04": 115,
    "2024-03-05": 130,
    "2024-03-06": 125,
    "2024-03-07": 118,
  };

  // Replace with a secure environment variable in production
  const GEMINI_API_KEY = "AIzaSyAn9cyC74o_2v0qflu-tBomvsz-MwPjTk4";

  const getAQIColor = (aqiValue) => {
    if (!aqiValue || isNaN(parseInt(aqiValue))) return "bg-gray-200";
    const aqi = parseInt(aqiValue);
    if (aqi <= 50) return "bg-green-500";
    if (aqi <= 100) return "bg-yellow-400";
    if (aqi <= 150) return "bg-orange-500";
    if (aqi <= 200) return "bg-red-500";
    if (aqi <= 300) return "bg-purple-600";
    return "bg-rose-900";
  };

  const getAQICategory = (aqiValue) => {
    if (!aqiValue || isNaN(parseInt(aqiValue))) return "Unknown";
    const aqi = parseInt(aqiValue);
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 150) return "Unhealthy for Sensitive Groups";
    if (aqi <= 200) return "Unhealthy";
    if (aqi <= 300) return "Very Unhealthy";
    return "Hazardous";
  };

  const handlePrediction = async () => {
    if (!date || !city) {
      setError("Please select a date and enter a city");
      return;
    }

    setLoading(true);
    setError("");
    setAqi(null);

    try {
      // Initialize Gemini AI model
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // Prepare AQI history for the prompt
      const aqiHistory = Object.entries(lastSevenDaysAQI)
        .map(([date, value]) => `${date}: AQI ${value}`)
        .join("\n");

      // Create the AI prompt
      const prompt = `Just give a random AQI for ${city} on ${date} based on past data.
      Here is the AQI data for the last 7 days:\n${aqiHistory}`;

      // Make AI API call
      const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: 100, temperature: 0.7 },
      });

      // Extract and display the AQI result
      const predictedAqi =
        result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "No data available";
      setAqi(predictedAqi);
    } catch (err) {
      console.error("Error fetching AQI prediction:", err);
      setError("Failed to fetch AQI prediction. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  const resultVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.5 }
    }
  };

  // Extract numeric AQI value for visualization
  const numericAqi = aqi ? parseInt(aqi.match(/\d+/)?.[0] || 0) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div 
        className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8">
          <motion.h1 
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            AQI Predictor
          </motion.h1>
          <motion.p 
            className="mt-2 text-blue-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Forecast air quality for any location
          </motion.p>
        </div>

        <motion.div 
          className="px-6 py-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter City
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="e.g., New York, London, Tokyo"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Date
            </label>
            <motion.input
              whileFocus={{ scale: 1.01 }}
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            />
          </motion.div>

          <motion.button
            variants={buttonVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            onClick={handlePrediction}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 rounded-lg font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-70"
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="mr-2 h-5 w-5 border-2 border-t-transparent border-white rounded-full"
                />
                <span>Predicting...</span>
              </div>
            ) : (
              "Predict AQI"
            )}
          </motion.button>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-sm text-red-600 bg-red-50 px-4 py-3 rounded-lg"
            >
              {error}
            </motion.div>
          )}

          {aqi && (
            <motion.div
              variants={resultVariants}
              initial="hidden"
              animate="visible"
              className="mt-8 border-t border-gray-100 pt-6"
            >
              <h2 className="text-lg font-semibold text-gray-800">
                Predicted AQI for {city} on {date}
              </h2>
              
              <div className="mt-4 flex flex-col items-center">
                <motion.div 
                  className={`w-32 h-32 rounded-full flex items-center justify-center text-white text-2xl font-bold ${getAQIColor(numericAqi)}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {numericAqi}
                </motion.div>
                
                <motion.p 
                  className={cn("mt-3 font-medium text-lg", getAQIColor(numericAqi))}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {getAQICategory(numericAqi)}
                </motion.p>
                
                <motion.div 
                  className="mt-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg w-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="italic">{aqi}</p>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-6 text-xs text-gray-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p>Data based on historical AQI records and AI prediction.</p>
              </motion.div>
            </motion.div>
          )}

          <motion.div 
            className="mt-6 grid grid-cols-2 gap-3"
            variants={containerVariants}
          >
            {Object.entries(lastSevenDaysAQI).slice(0, 4).map(([date, value], index) => (
              <motion.div 
                key={date}
                variants={itemVariants}
                className="bg-gray-50 rounded-lg p-2 text-xs"
              >
                <div className="text-gray-500">{date}</div>
                <div className="font-medium text-gray-800">AQI: {value}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AQIPredictor;