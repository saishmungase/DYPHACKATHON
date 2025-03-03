"use client"
import Contact from "@/components/LandingPage/Contact"
import Features from "@/components/LandingPage/Features"
import Footer from "@/components/LandingPage/Footer"
import Header from "@/components/LandingPage/Header"
import Home from "@/components/LandingPage/Home"
import PoweredBy from "@/components/LandingPage/PoweredBy"

function page() {
  return (
    <>
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
    <Header />
    <Home />
    <Features />
    <PoweredBy />
    <Contact />
    <Footer />
    </div>
    </>
  )
}

export default page
