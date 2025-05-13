"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { FeatureGrid } from "@/components/feature-grid"
import { Footer } from "@/components/footer"

export function GrowSphereApp() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div
      className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gradient-to-br from-blue-100 via-purple-100 to-blue-200"}`}
    >
      <div className="mx-auto max-w-6xl px-4 py-6">
        <div
          className={`rounded-3xl ${darkMode ? "bg-gray-800/50" : "bg-white/20"} backdrop-blur-sm shadow-xl overflow-hidden`}
        >
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main className="px-8 py-10">
            <div className="mb-12 text-center">
              <h1 className={`text-4xl md:text-5xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-800"}`}>
                Welcome to GrowSphere! <span className="ml-1">🌱</span>
              </h1>
              <p className={`text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                Your all-in-one platform for students to learn, grow, and connect.
              </p>
            </div>
            <FeatureGrid darkMode={darkMode} />
          </main>
          <Footer darkMode={darkMode} />
        </div>
      </div>
    </div>
  )
}
