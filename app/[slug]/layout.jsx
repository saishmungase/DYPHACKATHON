import { Inter } from "next/font/google"
import "@/app/globals.css"
import Navbar from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata= {
  title: "Air Quality Dashboard",
  description: "Monitor air quality in your area",
}

export default function RootLayout({
  children,
}) {
  return (
      <div className={inter.className}>
        <Navbar />
        <main className="p-4 md:p-8">{children}</main>
      </div>
  )
}

