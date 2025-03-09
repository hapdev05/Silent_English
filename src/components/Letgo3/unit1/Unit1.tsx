import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState, useEffect } from "react";
import popcorn from "../../../assets/imgs/unit1/popcorn.png";
import candy from "../../../assets/imgs/unit1/candy.png";
import peanuts from "../../../assets/imgs/unit1/peanuts.png";
import crackers from "../../../assets/imgs/unit1/crackers.png";
import potatoChips from "../../../assets/imgs/unit1/potato_chips.png";
import chalk from "../../../assets/imgs/unit1/chalk.jpg";
import paint from "../../../assets/imgs/unit1/paint.png";
import tape from "../../../assets/imgs/unit1/tape.png";
import scissors from "../../../assets/imgs/unit1/scissors.png";
import glue from "../../../assets/imgs/unit1/glue.jpg";
import paper from "../../../assets/imgs/unit1/paper.png";
import ribbon from "../../../assets/imgs/unit1/ribbon.png";
import string from "../../../assets/imgs/unit1/string.png";
import magnet from "../../../assets/imgs/unit1/magnet.jpg";
import calculator from "../../../assets/imgs/unit1/calculator.jpg";
import coloredPencil from "../../../assets/imgs/unit1/colored_pencil.jpeg";
import rubberBand from "../../../assets/imgs/unit1/rubber_band.jpg";
import pushPin from "../../../assets/imgs/unit1/push_pin.jpg";
import paintBrush from "../../../assets/imgs/unit1/paint_brush.jpg";
import stapler from "../../../assets/imgs/unit1/stapler.jpg";

import popcornVideo from "../../../assets/videos/unit1/Popcorn.mp4";
import candyVideo from "../../../assets/videos/unit1/candy.mp4";
import peanutsVideo from "../../../assets/videos/unit1/peanuts.mp4";
import crackersVideo from "../../../assets/videos/unit1/crackers.mp4";
import potatoChipsVideo from "../../../assets/videos/unit1/potato_chips.mp4";
import chalkVideo from "../../../assets/videos/unit1/chalk.mp4";
import scissorsVideo from "../../../assets/videos/unit1/scissors.mp4";
import glueVideo from "../../../assets/videos/unit1/glue.mp4";
import paperVideo from "../../../assets/videos/unit1/paper.mp4";
import stringVideo from "../../../assets/videos/unit1/string.mp4";
import magnetVideo from "../../../assets/videos/unit1/magnet.mp4";
import calculatorVideo from "../../../assets/videos/unit1/calculator.mp4";
import coloredPencilVideo from "../../../assets/videos/unit1/colored_pencil.mp4";
import rubberBandVideo from "../../../assets/videos/unit1/rubber_band.mp4";
import paintBrushVideo from "../../../assets/videos/unit1/paint_brush.mp4";
import staplerVideo from "../../../assets/videos/unit1/stapler.mp4";

import PartA from "../unit1/components/PartA";

const vocabularyData = [
    { word: "popcorn", pronunciation: "(n)", translation: "bỏng ngô", image: popcorn, video: popcornVideo, example: "Ex: I love eating popcorn at the movies." },
    { word: "candy", pronunciation: "(n)", translation: "kẹo", image: candy, video: candyVideo, example: "Ex: She gave me some candy." },
    { word: "peanuts", pronunciation: "(n)", translation: "đậu phộng", image: peanuts, video: peanutsVideo, example: "Ex: He is allergic to peanuts." },
    { word: "crackers", pronunciation: "(n)", translation: "bánh quy giòn", image: crackers, video: crackersVideo, example: "Ex: I had some crackers with cheese." },
    { word: "potato chips", pronunciation: "(n)", translation: "khoai tây chiên", image: potatoChips, video: potatoChipsVideo, example: "Ex: She bought a bag of potato chips." },
    { word: "chalk", pronunciation: "(n)", translation: "phấn", image: chalk, video: chalkVideo, example: "Ex: The teacher wrote on the board with chalk." },
    { word: "paint", pronunciation: "(n)", translation: "sơn / màu vẽ", image: paint, example: "Ex: He used blue paint for the sky." },
    { word: "tape", pronunciation: "(n)", translation: "băng dính", image: tape, example: "Ex: She used tape to wrap the gift." },
    { word: "scissors", pronunciation: "(n)", translation: "cây kéo", image: scissors, video: scissorsVideo, example: "Ex: Please pass me the scissors." },
    { word: "glue", pronunciation: "(n)", translation: "keo dán", image: glue, video: glueVideo, example: "Ex: I need glue to fix this paper." },
    { word: "paper", pronunciation: "(n)", translation: "giấy", image: paper, video: paperVideo, example: "Ex: He wrote his name on the paper." },
    { word: "ribbon", pronunciation: "(n)", translation: "ruy băng", image: ribbon, example: "Ex: She tied a ribbon around the gift box." },
    { word: "string", pronunciation: "(n)", translation: "sợi dây", image: string, video: stringVideo, example: "Ex: The package was tied with a string." },
    { word: "magnet", pronunciation: "(n)", translation: "nam châm", image: magnet, video: magnetVideo, example: "Ex: The magnet stuck to the fridge." },
    { word: "calculator", pronunciation: "(n)", translation: "máy tính", image: calculator, video: calculatorVideo, example: "Ex: I use a calculator for math homework." },
    { word: "colored pencil", pronunciation: "(n)", translation: "bút chì màu", image: coloredPencil, video: coloredPencilVideo, example: "Ex: She drew a picture with colored pencils." },
    { word: "rubber band", pronunciation: "(n)", translation: "dây thun", image: rubberBand, video: rubberBandVideo, example: "Ex: He stretched the rubber band." },
    { word: "push pin", pronunciation: "(n)", translation: "ghim bấm", image: pushPin, example: "Ex: She used a push pin to attach the note." },
    { word: "paint brush", pronunciation: "(n)", translation: "cọ vẽ", image: paintBrush, video: paintBrushVideo, example: "Ex: He dipped the paint brush in blue paint." },
    { word: "stapler", pronunciation: "(n)", translation: "dập ghim", image: stapler, video: staplerVideo, example: "Ex: I need a stapler to bind these papers." }
  ];
import PartB from "./components/PartB";
import PartC from "./components/PartC";
import PartD from "./components/PartD";
import PartE from "./components/PartE";

export default function Unit1({ submenu }: { submenu: string }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Số từ vựng trên mỗi trang
  
  // Tính toán từ vựng cho trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vocabularyData.slice(indexOfFirstItem, indexOfLastItem);
  
  // Tính tổng số trang
  const totalPages = Math.ceil(vocabularyData.length / itemsPerPage);

  // Hàm chuyển trang
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }


  const renderContent = () => {
    switch (submenu) {
      case "A - VOCABULARY - SENTENCES PATTERNS":
        return <PartA 
        currentItems={currentItems} 
        currentPage={currentPage} 
        totalPages={totalPages} 
        handlePageChange={handlePageChange} 
      />
        
      case "B - LET’S REVIEW VOCABULARY TOGETHER!":
        return <PartB/>
      case "C -  LET’S REVIEW GRAMMAR TOGETHER!":
        return <PartC/>
      case "D -  LET’S PRACTICE READING COMPREHENSION TOGETHER!":
          return <PartD/>
      case "E - LET’S PRACTICE WRITING TOGETHER!":
        return <PartE/>
    }
  };
  return (
    <ScrollArea className="h-full">
      <div className="container mx-auto p-4 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900 min-h-screen">
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-6 text-center text-purple-600 dark:text-purple-300">
            TOPIC 1: AT SCHOOL
          </h1>
        </div>

        {renderContent()}
        {!submenu.startsWith("A") && submenu !== "" && (
          <div className="flex justify-center mt-8">
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
