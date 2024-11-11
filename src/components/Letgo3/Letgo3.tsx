import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import Unit1 from "./Unit1";
import Unit2 from "./Unit2";
import Unit3 from "./Unit3";
import Unit4 from "./Unit4";
import Unit5 from "./Unit5";
import Unit6 from "./Unit6";
import Unit7 from "./Unit7";
import Unit8 from "./Unit8";
import { useState } from "react";

// Import other units as needed

export default function Letgo3() {
  const units = Array.from({ length: 8 }, (_, i) => `Unit ${i + 1}`);
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);

  const renderUnitContent = () => {
    switch (selectedUnit) {
      case "Unit 1":
        return <Unit1 />;
      case "Unit 2":
        return <Unit2 />;
      case "Unit 3":
        return <Unit3 />;
      case "Unit 4":
        return <Unit4 />;
      case "Unit 5":
        return <Unit5 />;
      case "Unit 6":
        return <Unit6 />;
      case "Unit 7":
        return <Unit7 />;
      case "Unit 8":
        return <Unit8 />;
      // Add cases for other units
      default:
        return (
          <div>
            <h1 className="text-3xl font-bold mb-6 text-indigo-800">
              Welcome to Let go 3
            </h1>
            <p className="text-lg text-gray-700 mb-4">
              Select a unit from the menu to start your learning journey.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-50 to-cyan-50">
      {/* Fixed vertical menu with scroll */}
      <ScrollArea className="w-1/4 h-full border-r border-indigo-100 bg-white/50 backdrop-blur-sm">
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-3 pt-3 h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Let's go 3
          </h2>
          <nav>
            <ul className="space-y-10">
              {units.map((unit, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-left font-medium transition-all duration-200 hover:translate-x-1 hover:bg-indigo-100 hover:text-indigo-700"
                    onClick={() => setSelectedUnit(unit)}
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
        <div className="max-w-3xl mx-auto">{renderUnitContent()}</div>
      </ScrollArea>
    </div>
  );
}
