'use client'

import { mockData } from "@/components/air-quality-dashboard";
import GalleryModal from "@/components/Gallery-Model";
import { Shield } from "lucide-react";
import React, { useState } from "react";

const masks = [
  {
    "id": 1,
    "name": "Basic Cotton Mask",
    "img": "/masks/cotton-mask.png",
    "protection_level": "Low",
    "description": "Simple cotton mask with minimal filtration, suitable for dust and mild pollution.",
    "filtration_efficiency": "10-20%",
    "reusable": true,
    "minAQI" : 0,
    "maxAQI": 50,
    "price": "₹100"
  },
  {
    "id": 2,
    "name": "Surgical Mask (3-Ply)",
    "img": "/masks/Surgical_Mask.png", 
    "protection_level": "Moderate",
    "description": "Disposable 3-layer mask that provides basic protection against airborne particles and droplets.",
    "filtration_efficiency": "50-70%",
    "reusable": false,
    "minAQI" : 50,
    "maxAQI": 100,
    "price": "₹10 per piece"
  },
  {
    "id": 3,
    "name": "Activated Carbon Mask",
    "img": "/masks/Activated_Carbon_Mask.png",
    "protection_level": "Moderate",
    "description": "Cloth mask with an activated carbon filter, effective against dust and mild air pollution.",
    "filtration_efficiency": "60-80%",
    "reusable": true,
    "minAQI" : 100,
    "maxAQI": 150,
    "price": "₹350"
  },
  {
    "id": 4,
    "name": "N95 Mask",
    "img": "/masks/N95_Mask.png",
    "protection_level": "High",
    "description": "Certified N95 mask that filters 95% of airborne particles, ideal for high-pollution areas.",
    "filtration_efficiency": "95%",
    "reusable": "Limited",
    "minAQI" : 150,
    "maxAQI": 180,
    "price": "₹250"
  },
  {
    "id": 5,
    "name": "Cambridge Mask Pro",
    "img": "/masks/Cambridge_Mask_Pro.png",
    "protection_level": "High",
    "description": "Military-grade pollution mask with PM2.5 and PM10 filtration, suitable for urban pollution.",
    "filtration_efficiency": "95% (with carbon filter)",
    "reusable": true,
    "minAQI" : 180,
    "maxAQI": 200,
    "price": "₹3,000"
  },
  {
    "id": 6,
    "name": "Vogmask N99",
    "img": "/masks/Vogmask_N99.png",
    "protection_level": "Higher",
    "description": "Premium N99-rated mask with activated carbon for filtering PM2.5, bacteria, and odors.",
    "filtration_efficiency": "99%",
    "reusable": true,
    "minAQI" : 200,
    "maxAQI": 230,
    "price": "₹2,500"
  },
  {
    "id": 7,
    "name": "Totobobo Mask",
    "img": "/masks/Totobobo Mask.jpg",
    "protection_level": "Higher",
    "description": "Transparent customizable mask with electrostatic filter, blocking fine particulate matter.",
    "filtration_efficiency": "95-99%",
    "reusable": true,
    "minAQI" : 230,
    "maxAQI": 250,
    "price": "₹3,200"
  },
  {
    "id": 8,
    "name": "Respro Ultralight Mask",
    "img": "/masks/Respro_Ultralight_Mask.png",
    "protection_level": "Very High",
    "description": "Designed for cyclists and outdoor activity, featuring HEPA-type filtration and a snug fit.",
    "filtration_efficiency": "99%",
    "reusable": true,
    "minAQI" : 250,
    "maxAQI": 300,
    "price": "₹4,500"
  },
  {
    "id": 9,
    "name": "R-PUR Nano Mask",
    "img": "/masks/R-PUR Nano Mask.webp",
    "protection_level": "Very High",
    "description": "Smart pollution mask with nanofilter technology, blocking ultra-fine particles and gases.",
    "filtration_efficiency": "99.9%",
    "reusable": true,
    "minAQI" : 300,
    "maxAQI": 400,
    "price": "₹8,500"
  },
  {
    "id": 10,
    "name": "Airinum Urban Air Mask 2.0",
    "img": "/masks/Airinum_Urban_Air_Mask.png",
    "protection_level": "Maximum",
    "description": "Advanced pollution mask with multi-layer filters, protecting against PM2.5, viruses, and bacteria.",
    "filtration_efficiency": "99.9%",
    "reusable": true,
    "minAQI" : 400,
    "maxAQI": 500,
    "price": "₹10,000"
  }
];

const purifier = [
  {
    "id": 1,
    "name": "Airinum Urban Air Mask 2.0",
    "img": "/masks/Airinum_Urban_Air_Mask.png",
    "description": "Advanced pollution mask with multi-layer filters, protecting against PM2.5, viruses, and bacteria.",
    "minAQI" : 400,
    "maxAQI": 500,
    "price": "₹10,000"
  } 
]


const conditioner = [
  {
    "id": 1,
    "name": "Airinum Urban Air Mask 2.0",
    "img": "/masks/Airinum_Urban_Air_Mask.png",
    "description": "Advanced pollution mask with multi-layer filters, protecting against PM2.5, viruses, and bacteria.",
    "price": "₹10,000"
  } 
]

const meters = [
  {
    "id": 1,
    "name": "Airinum Urban Air Mask 2.0",
    "img": "/masks/Airinum_Urban_Air_Mask.png",
    "description": "Advanced pollution mask with multi-layer filters, protecting against PM2.5, viruses, and bacteria.",
    "price": "₹10,000"
  } 
]

const aqi = mockData.aqi;

var suggestedProduct = masks[0];

for(var i = 0; i<masks.length; i++){
  if(masks[i].minAQI < aqi && masks[i].maxAQI >= aqi){
    suggestedProduct = masks[i];
    break;
  }
}

export default function ShoppingPlatform() {

  
  const [selectedSection, setSelectedSection] = useState(null);

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-2 flex flex-col items-center">
      {/* Suggested Product Section */}
      <div onClick={()=>setSelectedSection(suggestedProduct)}  className="bg-green-700 text-white p-6 rounded-xl shadow-lg w-full max-w-xl text-center">
        <h2 className="text-xl font-semibold">Suggested Product for the Day</h2>
        <img src={suggestedProduct.img} alt={suggestedProduct.name} className="w-40 h-40 mx-auto my-4" />
        <p className="text-lg font-medium">{suggestedProduct.name}</p>
        <p className="text-sm">{suggestedProduct.price}</p>
      </div>

      {/* All Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-8 w-full max-w-3xl">
        {masks.slice(1).map((product) => (
          <div onClick={()=>setSelectedSection(product)} key={product.id} className="
            bg-white flex item-center justify-center gap-2 w-[250px] flex-col shadow-xl boder-black p-12 rounded-xl">
            <img src={product.img} alt={product.name} className="w-24 flex justify-center h-24 mx-auto" />
            <p className="mt-2 text-center flex justify-center text-[#615f5f] font-semibold">{product.name}</p>
            <h5 className="left-[2px] flex justify-center gap-2 text-black"><Shield className="text-black" />{product.protection_level}</h5>
            <p className="text-green-400 flex justify-center ">{product.price}</p>
          </div>
        ))}
      </div>
      
      {selectedSection && (
        <GalleryModal
          section= {selectedSection}
          onClose={() => setSelectedSection(null)}
        />
      )}
    </div>
  );
}
