"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Bell, Camera, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";

function Features() {
  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 });

  return (
    <section
      id="features"
      ref={featuresRef}
      className="py-20 bg-gradient-to-b from-black to-green-950"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powerful <span className="text-green-400">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our application provides comprehensive tools to monitor and manage
            environmental conditions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={featuresInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-green-900/30 rounded-xl p-6 border border-green-800 hover:border-green-400 transition-colors group"
          >
            <div className="bg-green-800/50 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
              <MapPin className="h-7 w-7 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Real-Time Location Data</h3>
            <p className="text-gray-300">
              Get accurate, up-to-date information about air quality, pollution
              levels, and weather conditions at your current location.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={featuresInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-green-900/30 rounded-xl p-6 border border-green-800 hover:border-green-400 transition-colors group"
          >
            <div className="bg-green-800/50 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
              <Bell className="h-7 w-7 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Location Change Alerts</h3>
            <p className="text-gray-300">
              Receive instant notifications when you enter areas with poor air
              quality or high pollution levels, helping you make informed
              decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={featuresInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-green-900/30 rounded-xl p-6 border border-green-800 hover:border-green-400 transition-colors group"
          >
            <div className="bg-green-800/50 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
              <Camera className="h-7 w-7 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">AI Sky Analysis</h3>
            <p className="text-gray-300">
              Capture an image of the sky, and our advanced AI model will
              analyze it to provide detailed information about current
              environmental conditions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={featuresInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-green-900/30 rounded-xl p-6 border border-green-800 hover:border-green-400 transition-colors group"
          >
            <div className="bg-green-800/50 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-green-700 transition-colors">
              <MapPin className="h-7 w-7 text-green-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">
              Interactive Pollution Map
            </h3>
            <p className="text-gray-300">
              Explore an interactive map showing pollution levels across
              different locations, helping you plan your activities and travel
              accordingly.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={featuresInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-green-900/30">
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-black/80 z-10"></div>
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Application interface"
              width={1200}
              height={600}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  AI-Powered Weather Intelligence
                </h3>
                <p className="text-lg text-gray-200 max-w-lg mx-auto mb-6">
                  Our application uses advanced AI to provide accurate
                  predictions and analysis
                </p>
                <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-colors inline-flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  Try AI Features
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Features;
