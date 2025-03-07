"use client"

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Upload, FileText, AlertTriangle } from 'lucide-react';

const AQIPredictionDashboard = () => {
  const [aqiData, setAqiData] = useState([]);
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [apiKey, setApiKey] = useState('');

  // Mock function to parse Excel file
  const parseExcelFile = async (file) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // In a real implementation, you'd use a library like xlsx
      // For this example, we'll simulate with mock data
      const mockData = generateMockAqiData();
      setAqiData(mockData);
      return mockData;
    } catch (err) {
      setError("Failed to parse Excel file: " + err.message);
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  // Generate mock AQI data for demonstration
  const generateMockAqiData = () => {
    const data = [];
    const today = new Date();
    
    for (let i = 365; i > 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      data.push({
        date: date.toISOString().split('T')[0],
        aqi: Math.floor(Math.random() * 200) + 50,
        pm25: Math.floor(Math.random() * 100) + 20,
        pm10: Math.floor(Math.random() * 150) + 30,
        temperature: Math.floor(Math.random() * 15) + 15,
        humidity: Math.floor(Math.random() * 40) + 30
      });
    }
    
    return data;
  };

  // Function to make prediction
  const predictAQI = async () => {
    if (!apiKey) {
      setError("Please enter your Gemini API key");
      return;
    }

    if (aqiData.length === 0) {
      setError("Please upload AQI data first");
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      // In a real implementation, this would call the Gemini API
      // For this example, we'll simulate a prediction
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const lastAqi = aqiData[aqiData.length - 1].aqi;
      const predictedAqi = Math.round(lastAqi * (0.9 + Math.random() * 0.2));
      
      setPrediction({
        value: predictedAqi,
        date: getTomorrowDate(),
        explanation: `Based on historical patterns, particularly the trend over the last 7 days, I predict tomorrow's AQI will be ${predictedAqi}. This takes into account seasonal variations and recent weather conditions.`
      });
    } catch (err) {
      setError("Failed to get prediction: " + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      parseExcelFile(file);
    }
  };

  // Get chart data for last 30 days
  const getRecentChartData = () => {
    return aqiData.slice(-30);
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AQI Prediction Dashboard</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex flex-col space-y-2">
                <label htmlFor="apiKey">Gemini API Key</label>
                <Input 
                  id="apiKey"
                  type="password"
                  placeholder="Enter your API key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <label htmlFor="fileUpload" className="text-sm">Upload AQI Data (XLS/XLSX)</label>
                  <div className="flex items-center gap-2">
                    <Input 
                      id="fileUpload" 
                      type="file" 
                      accept=".xls,.xlsx" 
                      onChange={handleFileUpload}
                    />
                    <Upload className="h-4 w-4" />
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={predictAQI} 
                disabled={isLoading || aqiData.length === 0}
                className="w-full"
              >
                {isLoading ? "Processing..." : "Predict Next Day AQI"}
              </Button>
              
              {error && (
                <div className="bg-red-50 p-3 rounded-md border border-red-200 flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5" />
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              )}
            </div>
            
            <div>
              {prediction ? (
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <h3 className="text-lg font-medium mb-2">AQI Prediction for {prediction.date}</h3>
                  <div className="text-3xl font-bold mb-2">{prediction.value}</div>
                  <p className="text-sm text-gray-600">{prediction.explanation}</p>
                </div>
              ) : (
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 h-full flex items-center justify-center">
                  <div className="text-center">
                    <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Upload data and generate a prediction</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {aqiData.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Historical AQI Data (Last 30 Days)</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={getRecentChartData()}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="aqi" stroke="#8884d8" name="AQI" />
                    <Line type="monotone" dataKey="pm25" stroke="#82ca9d" name="PM2.5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6 overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>AQI</TableHead>
                      <TableHead>PM2.5</TableHead>
                      <TableHead>PM10</TableHead>
                      <TableHead>Temperature</TableHead>
                      <TableHead>Humidity</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {aqiData.slice(-5).map((day) => (
                      <TableRow key={day.date}>
                        <TableCell>{day.date}</TableCell>
                        <TableCell>{day.aqi}</TableCell>
                        <TableCell>{day.pm25}</TableCell>
                        <TableCell>{day.pm10}</TableCell>
                        <TableCell>{day.temperature}°C</TableCell>
                        <TableCell>{day.humidity}%</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AQIPredictionDashboard;