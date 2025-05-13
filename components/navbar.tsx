"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

interface NavbarProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  const navItems = ["Home", "StudyHub", "Clubs", "Focus Zone", "Mood & Mind", "Career Corner"]

  return (
    <nav
      className={`px-6 py-4 flex items-center justify-between border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}
    >
      <div className="flex items-center">
        <h1 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>GrowSphere</h1>
      </div>
      <div className="hidden md:flex items-center space-x-6">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className={`text-sm font-medium hover:opacity-80 ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            {item}
          </a>
        ))}
      </div>
      <Button
        onClick={toggleDarkMode}
        variant={darkMode ? "outline" : "default"}
        className={`rounded-full px-4 ${
          darkMode ? "bg-gray-700 text-white hover:bg-gray-600" : "bg-blue-900 text-white hover:bg-blue-800"
        }`}
      >
        {darkMode ? (
          <>
            <Sun className="mr-2 h-4 w-4" />
            Toggle Light Mode
          </>
        ) : (
          <>
            <Moon className="mr-2 h-4 w-4" />
            Toggle Dark Mode
          </>
        )}
      </Button>
    </nav>
  )
}
