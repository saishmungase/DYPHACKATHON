import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import {
  Cloud,
  MapPin,
  Bell,
  Camera,
  ChevronDown,
  Send,
  Menu,
  X,
  Sparkles,
  Mail,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const featuresRef = useRef(null)
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 })

  const poweredByRef = useRef(null)
  const poweredByInView = useInView(poweredByRef, { once: true, amount: 0.3 })

  const testimonialsRef = useRef(null)
  const testimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 })

  const contactRef = useRef(null)
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -50])

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Cloud className="text-green-400 h-8 w-8" />
            <span className="font-bold text-xl">AlertX</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="#features" className="hover:text-green-400 transition-colors">
              Features
            </Link>
            <Link href="#about" className="hover:text-green-400 transition-colors">
              About
            </Link>
            <Link href="#testimonials" className="hover:text-green-400 transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="hover:text-green-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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

      {/* Hero Section */}
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
              Smart Weather <span className="text-green-400">Management</span> for a Cleaner Future
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-200"
            >
              Monitor air quality, track pollution, and make informed decisions with our AI-powered weather application.
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

      {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-20 bg-gradient-to-b from-black to-green-950">
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
              Our application provides comprehensive tools to monitor and manage environmental conditions
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
                Get accurate, up-to-date information about air quality, pollution levels, and weather conditions at your
                current location.
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
                Receive instant notifications when you enter areas with poor air quality or high pollution levels,
                helping you make informed decisions.
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
                Capture an image of the sky, and our advanced AI model will analyze it to provide detailed information
                about current environmental conditions.
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
              <h3 className="text-xl font-bold mb-2">Interactive Pollution Map</h3>
              <p className="text-gray-300">
                Explore an interactive map showing pollution levels across different locations, helping you plan your
                activities and travel accordingly.
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
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">AI-Powered Weather Intelligence</h3>
                  <p className="text-lg text-gray-200 max-w-lg mx-auto mb-6">
                    Our application uses advanced AI to provide accurate predictions and analysis
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

      {/* Powered By Section */}
      <section id="about" ref={poweredByRef} className="py-20 bg-gradient-to-b from-green-950 to-black">
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
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Innovative technology backed by industry experts</p>
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
                TalentFarm is a leading technology company specializing in AI-powered environmental solutions. With a
                team of expert developers, data scientists, and environmental specialists, we are committed to creating
                innovative tools that help people make informed decisions about their environment.
              </p>
              <p className="text-gray-300 mb-6">
                Our mission is to leverage cutting-edge technology to address environmental challenges and promote
                sustainable living. Through our AlertX application, we aim to provide users with accurate,
                real-time information about air quality and pollution levels, empowering them to take control of their
                environmental health.
              </p>
              <div className="flex gap-4">
                <Link
                  href={"https://www.talentfarm.ai/"}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
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

      {/* Testimonials Section */}
      <section id="testimonials" ref={testimonialsRef} className="py-20 bg-gradient-to-b from-black to-green-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              What Our <span className="text-green-400">Users</span> Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from people who have transformed their environmental awareness with our application
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-green-900/20 rounded-xl p-8 border border-green-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Sarah Johnson"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Sarah Johnson</h3>
                  <p className="text-green-400">Environmental Scientist</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                As an environmental scientist, I've used many weather and pollution tracking apps, but AlertX
                stands out for its accuracy and AI capabilities. The sky analysis feature is revolutionary - it's helped
                me collect valuable data for my research while making it accessible to the general public.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-green-900/20 rounded-xl p-8 border border-green-800"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Michael Chen"
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Michael Chen</h3>
                  <p className="text-green-400">Urban Planner</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The interactive pollution map has been an invaluable tool for my urban planning projects. It allows me
                to identify areas with high pollution levels and develop strategies to improve air quality. The location
                change alerts have also been helpful during site visits, ensuring I'm aware of environmental
                conditions."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="py-20 bg-gradient-to-b from-green-950 to-black">
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
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
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
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
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
                  <label htmlFor="subject" className="block mb-2 text-sm font-medium">
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
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
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

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-green-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Cloud className="text-green-400 h-6 w-6" />
              <span className="font-bold text-lg">AlertX</span>
            </div>

            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} AlertX. All rights reserved. Powered by TalentFarm.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}