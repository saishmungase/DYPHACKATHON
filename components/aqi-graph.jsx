'use client'

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// export const AQIGraph = () => {
//     const data = [
//         { name: "9AM", AQI: 160 },
//         { name: "10AM", AQI: 140 },
//         { name: "11AM", AQI: 130 },
//         { name: "12PM", AQI: 120 },
//         { name: "1PM", AQI: 110 },
//         { name: "2PM", AQI: 100 },
//         { name: "3PM", AQI: 90 },
//         { name: "4PM", AQI: 95 },
//         { name: "5PM", AQI: 105 },
//         { name: "6PM", AQI: 115 },
//         { name: "7PM", AQI: 125 },
//         { name: "8PM", AQI: 135 },
//         { name: "9PM", AQI: 145 },
//     ];

//     return (
//         <div className="bg-white border-lg w-auto h-[50vh]">
//             <ResponsiveContainer width="100%" height="100%">
//                 <LineChart
//                     data={data}
//                     margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
//                 >
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <XAxis dataKey="name" />
//                     <YAxis label={{ value: "AQI", angle: -90, position: "insideLeft" }} />
//                     <Tooltip />
//                     <Legend />
//                     <Line type="monotone" dataKey="AQI" stroke="#05df72" />
//                 </LineChart>
//             </ResponsiveContainer>
//         </div>
//     );
// };


'use client';

import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Select } from "@/components/ui/select";

export const AQIGraph = () => {
    const [city, setCity] = useState("Delhi");
    const [data, setData] = useState([]);
    const API_KEY = "YOUR_API_KEY"; // Replace with your API key
    const cities = {
        Delhi: { lat: 28.6139, lon: 77.2090 },
        Mumbai: { lat: 19.0760, lon: 72.8777 },
        Bangalore: { lat: 12.9716, lon: 77.5946 },
        NewYork: { lat: 40.7128, lon: -74.0060 },
        London: { lat: 51.5074, lon: -0.1278 },
    };

    const fetchAQIData = async () => {
        if (!API_KEY) return;
        try {
            const { lat, lon } = cities[city];
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            );
            const result = await response.json();
            const aqi = result.list[0].main.aqi; // AQI value from API
            const timestamp = new Date().toLocaleTimeString();

            setData((prevData) => [
                ...prevData.slice(-11), // Keep last 12 data points
                { name: timestamp, AQI: aqi * 50 }, // Scale AQI for better visibility
            ]);
        } catch (error) {
            console.error("Error fetching AQI data:", error);
        }
    };

    useEffect(() => {
        fetchAQIData(); // Fetch data on mount
        const interval = setInterval(fetchAQIData, 60000); // Update every minute
        return () => clearInterval(interval);
    }, [city]);

    return (
        <div className="bg-white p-4 rounded-xl shadow-md w-auto h-[50vh]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Live AQI Data</h2>
                <Select value={city} onChange={(e) => setCity(e.target.value)} className="p-2 border rounded-md">
                    {Object.keys(cities).map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </Select>
            </div>

            <ResponsiveContainer width="100%" height="90%">
                <LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: "AQI", angle: -90, position: "insideLeft" }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="AQI" stroke="#05df72" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
