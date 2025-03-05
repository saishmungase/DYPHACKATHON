"use client";

import { useState } from "react";
import Link from "next/link";
import { Cloud, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex justify-center items-center">
            <Link className="flex items-center gap-2" href = "/">
              <Cloud className="text-green-400 h-8 w-8" />
              <span className="font-bold text-xl">AlertX</span>
            </Link>
          </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          <Link
            href="#features"
            className="hover:text-green-400 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="hover:text-green-400 transition-colors"
          >
            About
          </Link>
          <Link
            href="#testimonials"
            className="hover:text-green-400 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="hover:text-green-400 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-green-900 px-4 py-2"
        >
          <div className="flex flex-col gap-4 py-2">
            <Link
              href="#features"
              className="hover:text-green-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#about"
              className="hover:text-green-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-green-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="hover:text-green-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}

export default Header;
