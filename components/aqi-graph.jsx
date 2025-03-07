"use client";

import { useState, useEffect } from "react";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import axios from "axios";
import { Select } from "@/components/ui/select";

export const AQIGraph = () => {
    const [city, setCity] = useState("mumbai");
    const [data, setData] = useState([]);

    const API_KEY = "fcfe29295e96d71c262ff76d89552bab";
    const cities = {
        pune : {lat : 18.5204, lon : 73.8567},
        delhi: { lat: 28.6139, lon: 77.2090 },
        mumbai: { lat: 19.0760, lon: 72.8777 },
        bangalore: { lat: 12.9716, lon: 77.5946 },
        newyork: { lat: 40.7128, lon: -74.0060 },
        london: { lat: 51.5074, lon: -0.1278 },
    };

    const fetchAQIData = async () => {
        if (!API_KEY || !cities[city]) return;
        try {
            const { lat, lon } = cities[localStorage.getItem("cityName").toLowerCase()];
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            );
            const result = await response.json();
            const aqi = result.list[0]?.main?.aqi || 1;
            const timestamp = new Date().toLocaleTimeString();

            const storedData = JSON.parse(localStorage.getItem(`graphData-${city}`) || "[]");
            const newData = [...storedData, { name: timestamp, AQI: (aqi) }];
            if (newData.length > 10) newData.shift();

            setData(newData);
            localStorage.setItem(`graphData-${city}`, JSON.stringify(newData));
        } catch (error) {
            console.error("Error fetching AQI data:", error);
        }
    };

    useEffect(() => {
        const getUserLocation = async () => {
            try {
                const res = await axios.get(
                    `https://nominatim.openstreetmap.org/reverse?lat=18.516726&lon=73.856255&format=json`
                );
                const detectedCity = res.data.address.state_district?.toLowerCase();
                if (cities[detectedCity]) {
                    setCity(detectedCity);
                }
            } catch (error) {
                console.error("Error getting location:", error);
            }
        };

        getUserLocation();
    }, []);

    useEffect(() => {
        if (!cities[city]) return; // Avoid fetching for unknown city
        const storedData = JSON.parse(localStorage.getItem(`graphData-${city}`) || "[]");
        setData(storedData);
        fetchAQIData();

        const interval = setInterval(fetchAQIData, 60000);
        return () => clearInterval(interval);
    }, [city]);

    return (
        <div className="bg-white p-4 rounded-xl shadow-md w-auto h-[50vh]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Live AQI Data</h2>
                <Select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="p-2 border rounded-md"
                >
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
