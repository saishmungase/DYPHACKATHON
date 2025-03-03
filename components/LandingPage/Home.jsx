"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Cloud, Menu, X, ChevronDown } from "lucide-react";
import { motion, useTransform, useScroll, useInView } from "framer-motion";

function Home() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  return (
    <motion.section
      style={{ opacity: heroOpacity, y: heroY }}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-black/90 z-10"></div>
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Weather background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Smart Weather <span className="text-green-400">Management</span> for
            a Cleaner Future
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-200"
          >
            Monitor air quality, track pollution, and make informed decisions
            with our AI-powered weather application.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
              Get Started
            </button>
            <button className="border border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-3 rounded-full font-medium transition-colors">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <Link href="#features">
          <ChevronDown className="h-10 w-10 text-white animate-bounce" />
        </Link>
      </motion.div>
    </motion.section>
  );
}

export default Home;
