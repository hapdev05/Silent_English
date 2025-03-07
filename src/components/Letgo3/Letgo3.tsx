import Unit1 from "../Letgo3/unit1/Unit1";
import Unit2 from "./Unit2";
import Unit3 from "./Unit3";
import Unit4 from "./Unit4";
import Unit5 from "./Unit5";
import Unit6 from "./Unit6";
import Unit7 from "./Unit7";
import Unit8 from "./Unit8";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import { useState } from "react";

// Import other units as needed

export default function Letgo3() {
  const units = Array.from({ length: 8 }, (_, i) => `TOPIC ${i + 1}`);
  const submenus = [
    "A - COMPETENCES - VOCABULARY - SENTENCES PATTERNS (Những năng lực - Từ vựng - Các mẫu câu)",
    "B - LET’S REVIEW VOCABULARY TOGETHER! (Hãy cùng ôn luyện từ vựng!)",
    "C -  LET’S REVIEW GRAMMAR TOGETHER!",
    "D -  LET’S PRACTICE READING COMPREHENSION TOGETHER!",
    "E",
    "F",
  ];
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [selectedSubmenu, setSelectedSubmenu] = useState<string | null>(null);
  const [expandedUnit, setExpandedUnit] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const renderUnitContent = () => {
    if (!selectedUnit || !selectedSubmenu) {
      return (
        <div className="p-20">
          <h1 className="text-3xl font-bold mb-6 text-primary ">
            Welcome to Let&apos;s Go 3
          </h1>
          <p className="text-lg text-muted-foreground mb-4">
            Select a topic and submenu from the sidebar to start your learning
            journey.
          </p>
        </div>
      );
    }

    const UnitComponent = {
      "TOPIC 1": Unit1,
      "TOPIC 2": Unit2,
      "TOPIC 3": Unit3,
      "TOPIC 4": Unit4,
      "TOPIC 5": Unit5,
      "TOPIC 6": Unit6,
      "TOPIC 7": Unit7,
      "TOPIC 8": Unit8,
    }[selectedUnit];

    return UnitComponent ? <UnitComponent submenu={selectedSubmenu} /> : null;
  };

  const toggleUnit = (unit: string) => {
    setExpandedUnit(expandedUnit === unit ? null : unit);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gradient-to-br from-indigo-50 to-cyan-50">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Sidebar */}
      <ScrollArea
        className={`w-full md:w-1/4 h-full border-r border-indigo-100 bg-white/50 backdrop-blur-sm transition-all duration-300 ${
          isSidebarOpen ? "fixed inset-0 z-40" : "hidden md:block"
        }`}
      >
        <div className="p-6">
          <h2 className="text-4xl font-bold mb-6 pt-3 h-[100px] bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Let&apos;s Go 3
          </h2>
          <nav>
            <ul className="space-y-2">
              {units.map((unit, index) => (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className="w-full justify-between text-left font-medium transition-all duration-200 hover:bg-indigo-100 hover:text-indigo-700"
                    onClick={() => toggleUnit(unit)}
                  >
                    {unit}
                    {expandedUnit === unit ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </Button>
                  {expandedUnit === unit && (
                    <ul className="ml-4 mt-2 space-y-2">
                      {submenus.map((submenu, subIndex) => (
                        <li key={subIndex}>
                          <Button
                            variant="ghost"
                            className="w-full justify-start text-left text-sm transition-all duration-200 hover:bg-indigo-100 hover:text-indigo-700 whitespace-normal h-auto py-2"
                            onClick={() => {
                              setSelectedUnit(unit);
                              setSelectedSubmenu(submenu);
                              setIsSidebarOpen(false);
                            }}
                          >
                            {submenu}
                          </Button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </ScrollArea>

      {/* Content area */}
      <ScrollArea className="flex-1 p-6 md:p-10">
        <div className="max-w-3xl mx-auto">{renderUnitContent()}</div>
      </ScrollArea>
    </div>
  );
}
