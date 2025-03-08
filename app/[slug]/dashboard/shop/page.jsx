"use client"

import { mockData } from "@/components/air-quality-dashboard"
import GalleryModal from "@/components/Gallery-Model"
import { Shield, VenetianMaskIcon as Mask, Fan, Thermometer, Gauge, ShoppingBag, Home } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const masks = [
  {
    id: 1,
    name: "Basic Cotton Mask",
    img: "/masks/cotton-mask.png",
    protection_level: "Low",
    description: "Simple cotton mask with minimal filtration, suitable for dust and mild pollution.",
    filtration_efficiency: "10-20%",
    reusable: true,
    minAQI: 0,
    maxAQI: 50,
    price: "₹100",
  },
  {
    id: 2,
    name: "Surgical Mask (3-Ply)",
    img: "/masks/Surgical_Mask.png",
    protection_level: "Moderate",
    description: "Disposable 3-layer mask that provides basic protection against airborne particles and droplets.",
    filtration_efficiency: "50-70%",
    reusable: false,
    minAQI: 50,
    maxAQI: 100,
    price: "₹10 per piece",
  },
  {
    id: 3,
    name: "Activated Carbon Mask",
    img: "/masks/Activated_Carbon_Mask.png",
    protection_level: "Moderate",
    description: "Cloth mask with an activated carbon filter, effective against dust and mild air pollution.",
    filtration_efficiency: "60-80%",
    reusable: true,
    minAQI: 100,
    maxAQI: 150,
    price: "₹350",
  },
  {
    id: 4,
    name: "N95 Mask",
    img: "/masks/N95_Mask.png",
    protection_level: "High",
    description: "Certified N95 mask that filters 95% of airborne particles, ideal for high-pollution areas.",
    filtration_efficiency: "95%",
    reusable: "Limited",
    minAQI: 150,
    maxAQI: 180,
    price: "₹250",
  },
  {
    id: 5,
    name: "Cambridge Mask Pro",
    img: "/masks/Cambridge_Mask_Pro.png",
    protection_level: "High",
    description: "Military-grade pollution mask with PM2.5 and PM10 filtration, suitable for urban pollution.",
    filtration_efficiency: "95% (with carbon filter)",
    reusable: true,
    minAQI: 180,
    maxAQI: 200,
    price: "₹3,000",
  },
  {
    id: 6,
    name: "Vogmask N99",
    img: "/masks/Vogmask_N99.png",
    protection_level: "Higher",
    description: "Premium N99-rated mask with activated carbon for filtering PM2.5, bacteria, and odors.",
    filtration_efficiency: "99%",
    reusable: true,
    minAQI: 200,
    maxAQI: 230,
    price: "₹2,500",
  },
  {
    id: 7,
    name: "Totobobo Mask",
    img: "/masks/Totobobo Mask.jpg",
    protection_level: "Higher",
    description: "Transparent customizable mask with electrostatic filter, blocking fine particulate matter.",
    filtration_efficiency: "95-99%",
    reusable: true,
    minAQI: 230,
    maxAQI: 250,
    price: "₹3,200",
  },
  {
    id: 8,
    name: "Respro Ultralight Mask",
    img: "/masks/Respro_Ultralight_Mask.png",
    protection_level: "Very High",
    description: "Designed for cyclists and outdoor activity, featuring HEPA-type filtration and a snug fit.",
    filtration_efficiency: "99%",
    reusable: true,
    minAQI: 250,
    maxAQI: 300,
    price: "₹4,500",
  },
  {
    id: 9,
    name: "R-PUR Nano Mask",
    img: "/masks/R-PUR Nano Mask.webp",
    protection_level: "Very High",
    description: "Smart pollution mask with nanofilter technology, blocking ultra-fine particles and gases.",
    filtration_efficiency: "99.9%",
    reusable: true,
    minAQI: 300,
    maxAQI: 400,
    price: "₹8,500",
  },
  {
    id: 10,
    name: "Airinum Urban Air Mask 2.0",
    img: "/masks/Airinum_Urban_Air_Mask.png",
    protection_level: "Maximum",
    description: "Advanced pollution mask with multi-layer filters, protecting against PM2.5, viruses, and bacteria.",
    filtration_efficiency: "99.9%",
    reusable: true,
    minAQI: 400,
    maxAQI: 500,
    price: "₹10,000",
  },
]

// Update the purifiers array to include minAQI and maxAQI for all items
const purifiers = [
  {
    id: 1,
    name: "Basic Air Purifier",
    img: "/purifiers/basic-purifier.png",
    description: "Entry-level air purifier suitable for small rooms up to 200 sq ft.",
    protection_level: "Basic",
    minAQI: 0,
    maxAQI: 100,
    price: "₹5,000",
  },
  {
    id: 2,
    name: "HEPA Air Purifier",
    img: "/purifiers/hepa-purifier.png",
    description: "Mid-range purifier with true HEPA filter for medium-sized rooms.",
    protection_level: "Moderate",
    minAQI: 101,
    maxAQI: 200,
    price: "₹12,000",
  },
  {
    id: 3,
    name: "Premium Air Purifier",
    img: "/purifiers/premium-purifier.png",
    description: "Advanced purifier with HEPA, activated carbon, and UV sterilization.",
    protection_level: "High",
    minAQI: 201,
    maxAQI: 500,
    price: "₹25,000",
  },
]

// Update the conditioners array to include minAQI and maxAQI
const conditioners = [
  {
    id: 1,
    name: "Standard AC with Filter",
    img: "/conditioners/standard-ac.png",
    description: "Basic air conditioner with built-in dust filter.",
    protection_level: "Basic",
    minAQI: 0,
    maxAQI: 150,
    price: "₹30,000",
  },
  {
    id: 2,
    name: "Smart AC with Air Purification",
    img: "/conditioners/smart-ac.png",
    description: "Smart air conditioner with integrated air purification system.",
    protection_level: "Moderate",
    minAQI: 151,
    maxAQI: 300,
    price: "₹45,000",
  },
  {
    id: 3,
    name: "Premium AC with HEPA Filter",
    img: "/conditioners/premium-ac.png",
    description: "High-end air conditioner with HEPA filtration and air quality monitoring.",
    protection_level: "High",
    minAQI: 301,
    maxAQI: 500,
    price: "₹60,000",
  },
]

// Update the meters array to include minAQI and maxAQI
const meters = [
  {
    id: 1,
    name: "Basic Air Quality Monitor",
    img: "/meters/basic-monitor.png",
    description: "Simple device to measure PM2.5 and PM10 levels.",
    minAQI: 0,
    maxAQI: 200,
    price: "₹2,000",
  },
  {
    id: 2,
    name: "Multi-Parameter AQI Monitor",
    img: "/meters/multi-monitor.png",
    description: "Advanced monitor measuring PM2.5, PM10, VOCs, and humidity.",
    minAQI: 201,
    maxAQI: 350,
    price: "₹5,000",
  },
  {
    id: 3,
    name: "Professional Air Quality Station",
    img: "/meters/pro-monitor.png",
    description: "Professional-grade monitoring station with data logging and app connectivity.",
    minAQI: 351,
    maxAQI: 500,
    price: "₹12,000",
  },
]

const aqi = mockData.aqi

// Replace the existing getSuggestedMask and getSuggestedPurifier functions with a generic one
// Delete these two functions:
// const getSuggestedMask = () => {...}
// const getSuggestedPurifier = () => {...}

// Add this generic function to find suggested product for any category
const getSuggestedProductByAQI = (products) => {
  for (let i = 0; i < products.length; i++) {
    if (products[i].minAQI <= aqi && products[i].maxAQI >= aqi) {
      return products[i]
    }
  }
  return products[0]
}

export default function ShoppingPlatform() {
  const [activeCategory, setActiveCategory] = useState("masks")
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Replace the suggestedMask and suggestedPurifier variables with this:
  // const suggestedMask = getSuggestedMask();
  // const suggestedPurifier = getSuggestedPurifier();

  // Define categories and their icons
  const categories = {
    home: { name: "Home", icon: <Home className="w-6 h-6" /> },
    masks: { name: "Masks", icon: <Mask className="w-6 h-6" /> },
    purifiers: { name: "Air Purifiers", icon: <Fan className="w-6 h-6" /> },
    conditioners: { name: "Air Conditioners", icon: <Thermometer className="w-6 h-6" /> },
    meters: { name: "AQI Meters", icon: <Gauge className="w-6 h-6" /> },
  }

  // Get current products based on active category
  const getCurrentProducts = () => {
    switch (activeCategory) {
      case "masks":
        return masks
      case "purifiers":
        return purifiers
      case "conditioners":
        return conditioners
      case "meters":
        return meters
      default:
        return []
    }
  }

  // Replace the getSuggestedProduct function with this improved version
  const getSuggestedProduct = () => {
    // Only return a suggested product for the masks category
    if (activeCategory === "masks") {
      return getSuggestedProductByAQI(masks)
    }

    // Return null for all other categories
    return null
  }

  const currentProducts = getCurrentProducts()
  const suggestedProduct = getSuggestedProduct()

  return (
    <div className="bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen p-4 flex flex-col items-center">
      {/* Navigation Bar */}
      <motion.nav
        className="flex flex-wrap justify-center gap-4 mb-8 w-full max-w-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {Object.entries(categories).map(([key, category]) => (
          <motion.button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
              activeCategory === key
                ? "bg-black text-white shadow-lg scale-105"
                : "bg-white text-gray-700 hover:bg-gray-100 hover:scale-105"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.icon}
            <span>{category.name}</span>
          </motion.button>
        ))}
      </motion.nav>

      {/* Page Title */}
      <motion.h1
        className="text-3xl font-bold text-center mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {activeCategory === "home" ? "Air Quality Products" : categories[activeCategory].name}
      </motion.h1>

      {/* Home Page Content */}
      {activeCategory === "home" && (
        <motion.div
          className="w-full max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              onClick={() => setActiveCategory("masks")}
              className="bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Mask className="w-5 h-5 mr-2" /> Masks
              </h2>
              <p className="text-gray-600 mb-4">Protect yourself from air pollution with our range of masks.</p>
              <img src="/masks/cotton-mask.png" alt="Masks" className="w-32 h-32 mx-auto" />
            </div>

            <div
              onClick={() => setActiveCategory("purifiers")}
              className="bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Fan className="w-5 h-5 mr-2" /> Air Purifiers
              </h2>
              <p className="text-gray-600 mb-4">Clean the air in your home with our effective air purifiers.</p>
              <img src="/purifiers/hepa-purifier.png" alt="Air Purifiers" className="w-32 h-32 mx-auto" />
            </div>

            <div
              onClick={() => setActiveCategory("conditioners")}
              className="bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Thermometer className="w-5 h-5 mr-2" /> Air Conditioners
              </h2>
              <p className="text-gray-600 mb-4">Cool and clean air with our advanced air conditioning systems.</p>
              <img src="/conditioners/smart-ac.png" alt="Air Conditioners" className="w-32 h-32 mx-auto" />
            </div>

            <div
              onClick={() => setActiveCategory("meters")}
              className="bg-white p-6 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center">
                <Gauge className="w-5 h-5 mr-2" /> AQI Meters
              </h2>
              <p className="text-gray-600 mb-4">Monitor air quality in real-time with our accurate meters.</p>
              <img src="/meters/multi-monitor.png" alt="AQI Meters" className="w-32 h-32 mx-auto" />
            </div>
          </div>
        </motion.div>
      )}

      {/* Category Content */}
      {activeCategory !== "home" && activeCategory !== "cart" && (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Suggested Product Section */}
            {suggestedProduct && (
              <motion.div
                onClick={() => setSelectedProduct(suggestedProduct)}
                className="bg-green-700 text-white p-6 rounded-xl shadow-lg w-full max-w-xl mx-auto text-center mb-8 cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-xl font-semibold">Suggested Product for Current AQI ({aqi})</h2>
                <img
                  src={suggestedProduct.img || "/placeholder.svg"}
                  alt={suggestedProduct.name}
                  className="w-40 h-40 mx-auto my-4 object-contain"
                />
                <p className="text-lg font-medium">{suggestedProduct.name}</p>
                <p className="text-sm">{suggestedProduct.price}</p>
              </motion.div>
            )}

            {/* All Products Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {currentProducts.map((product, index) => (
                <motion.div
                  onClick={() => setSelectedProduct(product)}
                  key={product.id}
                  className="bg-white flex flex-col items-center justify-center gap-2 shadow-xl border border-gray-200 p-6 rounded-xl cursor-pointer hover:shadow-2xl transition-all"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src={product.img || "/placeholder.svg"}
                    alt={product.name}
                    className="w-32 h-32 object-contain mx-auto"
                  />
                  <p className="mt-2 text-center text-gray-800 font-semibold">{product.name}</p>
                  {product.protection_level && (
                    <h5 className="flex items-center justify-center gap-2 text-gray-700">
                      <Shield className="w-4 h-4 text-gray-600" />
                      {product.protection_level}
                    </h5>
                  )}
                  <p className="text-green-600 font-medium">{product.price}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Cart Page */}
      {activeCategory === "cart" && (
        <motion.div
          className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
          <p className="text-gray-600">Your cart is empty. Add some products to get started!</p>
          <button
            onClick={() => setActiveCategory("home")}
            className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Continue Shopping
          </button>
        </motion.div>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && <GalleryModal section={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  )
}

