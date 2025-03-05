"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, MapPin, Image, Cloud } from "lucide-react"

const navItems = [
  { name: "Dashboard", href: "/123/dashboard/home", icon: LayoutDashboard },
  { name: "Locations", href: "/123/dashboard/locations", icon: MapPin },
  { name: "AI", href: "/123/dashboard/ai", icon: Image },
  { name: "Shop", href: "/123/dashboard/shop", icon: Image }
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
          <div className="flex justify-center items-center">
            <Link className="flex items-center gap-2" href = "/">
              <Cloud className="text-green-400 h-8 w-8" />
              <span className="font-bold text-xl text-black">AlertX</span>
            </Link>
          </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200 ease-in-out
                      ${
                        isActive
                          ? "border-green-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`}
                  >
                    <item.icon className="h-5 w-5 mr-1" />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className="sm:hidden">
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-3 py-2 text-base font-medium transition-colors duration-200 ease-in-out
                  ${
                    isActive
                      ? "bg-green-50 border-l-4 border-green-500 text-green-700"
                      : "text-gray-600 hover:bg-gray-50 hover:border-l-4 hover:border-gray-300 hover:text-gray-800"
                  }`}
              >
                <item.icon className="h-5 w-5 mr-2" />
                {item.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

