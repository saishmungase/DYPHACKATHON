"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";
import { motion, useInView } from "framer-motion";

function Contact() {
  const contactRef = useRef(null);
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 });

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-20 bg-gradient-to-b from-green-950 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get in <span className="text-green-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions or feedback? We'd love to hear from you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={contactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4 mb-8">
              <p className="flex items-center gap-3">
                <MapPin className="text-green-400 h-5 w-5" />
                <span>123 Green Street, Eco City, EC 12345</span>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="text-green-400 h-5 w-5" />
                <span>contact@AlertX.com</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-green-400 h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-green-900 hover:bg-green-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-green-900 hover:bg-green-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-green-900 hover:bg-green-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-green-900 hover:bg-green-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={contactInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-green-900/30 border border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-green-900/30 border border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-green-900/30 border border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-green-900/30 border border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors inline-flex items-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
