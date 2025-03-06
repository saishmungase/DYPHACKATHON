'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const AQIGraph = () => {
    const data = [
        { name: "9AM", AQI: 160 },
        { name: "10AM", AQI: 140 },
        { name: "11AM", AQI: 130 },
        { name: "12PM", AQI: 120 },
        { name: "1PM", AQI: 110 },
        { name: "2PM", AQI: 100 },
        { name: "3PM", AQI: 90 },
        { name: "4PM", AQI: 95 },
        { name: "5PM", AQI: 105 },
        { name: "6PM", AQI: 115 },
        { name: "7PM", AQI: 125 },
        { name: "8PM", AQI: 135 },
        { name: "9PM", AQI: 145 },
    ];

    return (
        <div className="bg-white border-lg w-auto h-[50vh]">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
                >
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
