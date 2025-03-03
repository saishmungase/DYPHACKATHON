"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Bell, Camera, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";

function PoweredBy() {
  const poweredByRef = useRef(null);
  const poweredByInView = useInView(poweredByRef, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={poweredByRef}
      className="py-20 bg-gradient-to-b from-green-950 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={poweredByInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Powered by <span className="text-green-400">TalentFarm</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative technology backed by industry experts
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={poweredByInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/3"
          >
            <div className="relative rounded-xl overflow-hidden">
              <Image
                src="/talentfarm.png"
                alt="TalentFarm team"
                width={600}
                height={225}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={poweredByInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4">About TalentFarm</h3>
            <p className="text-gray-300 mb-6">
              TalentFarm is a leading technology company specializing in
              AI-powered environmental solutions. With a team of expert
              developers, data scientists, and environmental specialists, we are
              committed to creating innovative tools that help people make
              informed decisions about their environment.
            </p>
            <p className="text-gray-300 mb-6">
              Our mission is to leverage cutting-edge technology to address
              environmental challenges and promote sustainable living. Through
              our AlertX application, we aim to provide users with accurate,
              real-time information about air quality and pollution levels,
              empowering them to take control of their environmental health.
            </p>
            <div className="flex gap-4">
              <Link
                href={"https://www.talentfarm.ai/"}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
              >
                Learn More
              </Link>
              <button className="border border-green-400 text-green-400 hover:bg-green-400/10 px-6 py-2 rounded-full font-medium transition-colors">
                Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default PoweredBy;
