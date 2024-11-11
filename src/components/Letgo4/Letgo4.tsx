// import React from 'react'
import { ScrollArea } from "../ui/scroll-area"
import { Button } from "../ui/button"

export default function Letgo4() {
  const units = Array.from({ length: 8 }, (_, i) => `Unit ${i + 1}`)

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-50 to-cyan-50">
      {/* Fixed vertical menu with scroll */}
      <ScrollArea className="w-1/4 h-full border-r border-indigo-100 bg-white/50 backdrop-blur-sm">
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-3 pt-3 h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Let's go 4
          </h2>
          <nav>
            <ul className="space-y-10">
              {units.map((unit, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left font-medium transition-all duration-200 hover:translate-x-1 hover:bg-indigo-100 hover:text-indigo-700"
                  >
                    {unit}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </ScrollArea>

      {/* Scrollable content area */}
      <ScrollArea className="flex-1 p-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-indigo-800">Welcome to Let go 4</h1>
          <p className="text-lg text-gray-700 mb-4">
            Select a unit from the menu to start your learning journey.
          </p>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">Featured Content</h3>
            <p className="text-gray-600">
              Explore our carefully curated lessons designed to enhance your language skills.
              
            </p>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}