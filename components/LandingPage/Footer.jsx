"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Cloud,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-green-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Cloud className="text-green-400 h-6 w-6" />
            <span className="font-bold text-lg">AlertX</span>
          </div>

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AlertX. All rights reserved. Powered by
            TalentFarm.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
