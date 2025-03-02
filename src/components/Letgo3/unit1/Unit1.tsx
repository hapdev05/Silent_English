import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player/lazy';
import classroom from "../../../assets/imgs/classroom.png";
import musicRoom from "../../../assets/imgs/musicroom.png";


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

import image6 from "../../../assets/imgs/image6.png";
import image7 from "../../../assets/imgs/image7.png";
import image8 from "../../../assets/imgs/image8.png";
import image12 from "../../../assets/imgs/image12.jpg";
import image13 from "../../../assets/imgs/image13.png";
import image34 from "../../../assets/imgs/image34.png";
import image41 from "../../../assets/imgs/image41.png";
import image49 from "../../../assets/imgs/image49.png";
// Import videos
// Import videos
import classroomVideo from "../../../assets/videos/classroom.mp4";
import musicRoomVideo from "../../../assets/videos/musicroom.mp4";
import scienceRoomVideo from "../../../assets/videos/scienceroom.mp4";
import gymVideo from "../../../assets/videos/gym.mp4";
import artRoomVideo from "../../../assets/videos/artroom.mp4";
import lunchRoomVideo from "../../../assets/videos/lunchroom.mp4";
import officeVideo from "../../../assets/videos/office.mp4";
import libraryVideo from "../../../assets/videos/library.mp4";
import poolVideo from "../../../assets/videos/pool.mp4";
import stairsVideo from "../../../assets/videos/stairs.mp4";
import computerLabVideo from "../../../assets/videos/computerlab.mp4";
import hallwayVideo from "../../../assets/videos/hallway.mp4";
import auditoriumVideo from "../../../assets/videos/auditorium.mp4";
import nurseOfficeVideo from "../../../assets/videos/nurseoffice.mp4";
import restroomVideo from "../../../assets/videos/restroom.mp4";
import playgroundVideo from "../../../assets/videos/playground.mp4";
import clinicVideo from "../../../assets/videos/clinic.mp4";
import repairShopVideo from "../../../assets/videos/repairshop.mp4";
import factoryVideo from "../../../assets/videos/factory.mp4";
import storeVideo from "../../../assets/videos/store.mp4";
import bookstoreVideo from "../../../assets/videos/bookstore.mp4";
import airportVideo from "../../../assets/videos/airport.mp4";
import trainStationVideo from "../../../assets/videos/trainstation.mp4";
import busStopVideo from "../../../assets/videos/busstop.mp4";
import bakeryVideo from "../../../assets/videos/bakery.mp4";
import acrossFromVideo from "../../../assets/videos/acrossfrom.mp4";
import betweenVideo from "../../../assets/videos/between.mp4";
import nextToVideo from "../../../assets/videos/nextto.mp4";
import whereIsHeNowVideo from "../../../assets/videos/whereishenow.mp4";
import heIsInTheRestroomVideo from "../../../assets/videos/heisintherestroom.mp4";
import whereWasSheThisMorningVideo from "../../../assets/videos/wherewasshethismorning.mp4";
import sheWasInThePoolVideo from "../../../assets/videos/shewasinthepool.mp4";
import areTheyInThePoolNowVideo from "../../../assets/videos/aretheyinthepoolnow.mp4";
import yesTheyAreVideo from "../../../assets/videos/yestheyareNotheyaren't.mp4";
import wereYouInThePoolVideo from "../../../assets/videos/wereyouinthepoolthismorning.mp4";
import whereIsTheLibraryVideo from "../../../assets/videos/whereisthelibrary.mp4";
import itIsNextToTheClassroomVideo from "../../../assets/videos/itisnexttotheclassroom.mp4";


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

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ScoreDialog } from "../ScoreDialog";

export default function Unit1({ submenu }: { submenu: string }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
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
  };

  const [fillInBlankAnswers, setFillInBlankAnswers] = useState({
    musicRoom: "",
    scienceRoom: "",
    gym: "",
    classroom: "",
    artRoom: "",
    question4_english: "",
    question5_1: "",
    question5_2: "",
    question5_3: "",
    question5_4: "",
    question5_5: "",
    question5_6: "",
    question5_7: "",
  });

  const [multipleChoiceAnswers, setMultipleChoiceAnswers] = useState({
    library: "",
    playground: "",
    cafeteria: "",
    question4: "",
  });

 

  const correctAnswers = {
    fillInBlank: {
      musicRoom: "music room",
      scienceRoom: "science room",
      gym: "gym",
      classroom: "classroom",
      artRoom: "art room",
      question4_english: "auditorium",
      question5: "art room",
    },
    multipleChoice: {
      library: "a",
      playground: "b",
      cafeteria: "b",
      question4: "d",
    },
  };

  const [showResults, setShowResults] = useState(false);
  const [partBCount, setPartBCount] = useState(0);
  const [partCCount, setPartCCount] = useState(0);
  const [, setCorrectCount] = useState(0);
  const [, setIsQuestion4Correct] = useState(false);
  const [isQuestion4MultipleChoiceCorrect, setIsQuestion4MultipleChoiceCorrect] = useState(false);
  const [isQuestion4EnglishCorrect, setIsQuestion4EnglishCorrect] = useState(false);
  const [isQuestion5Correct, setIsQuestion5Correct] = useState(false);

  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showScoreDialog, setShowScoreDialog] = useState(false);

 



  const handleFillInBlankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFillInBlankAnswers({
      ...fillInBlankAnswers,
      [e.target.name]: e.target.value,
    });
  };

  const handleMultipleChoiceChange = (question: string, value: string) => {
    setMultipleChoiceAnswers({
      ...multipleChoiceAnswers,
      [question]: value,
    });
  };



  const handleSubmit = () => {
    let countB = 0; // LET'S REVIEW VOCABULARY TOGETHER - 5 câu
    let countC = 0; // Choose the correct answer - 3 câu

    // Part B - LET'S REVIEW VOCABULARY TOGETHER (5 câu, mỗi câu 1 điểm)
    // Music Room, Science Room, Classroom
    if (fillInBlankAnswers.musicRoom.toLowerCase() === correctAnswers.fillInBlank.musicRoom) {
      countB++;
    }
    if (fillInBlankAnswers.scienceRoom.toLowerCase() === correctAnswers.fillInBlank.scienceRoom) {
      countB++;
    }
    if (fillInBlankAnswers.classroom.toLowerCase() === correctAnswers.fillInBlank.classroom) {
      countB++;
    }
    if (fillInBlankAnswers.question4_english.toLowerCase() === correctAnswers.fillInBlank.question4_english) {
      countB++;
    }
    // Art room
    if (fillInBlankAnswers.question5_1.toLowerCase() === 'a' &&
        fillInBlankAnswers.question5_2.toLowerCase() === 'r' &&
        fillInBlankAnswers.question5_3.toLowerCase() === 't' &&
        fillInBlankAnswers.question5_4.toLowerCase() === 'r' &&
        fillInBlankAnswers.question5_5.toLowerCase() === 'o' &&
        fillInBlankAnswers.question5_6.toLowerCase() === 'o' &&
        fillInBlankAnswers.question5_7.toLowerCase() === 'm') {
      countB++;
    }

    // Part C - Choose the correct answer (3 câu, mỗi câu khoảng 1.67 điểm)
    ["library", "playground", "cafeteria"].forEach((key) => {
      if (multipleChoiceAnswers[key as keyof typeof multipleChoiceAnswers] ===
          correctAnswers.multipleChoice[key as keyof typeof correctAnswers.multipleChoice]) {
        countC++;
      }
    });

    setPartBCount(countB);
    setPartCCount(countC);
    setCorrectCount(countB + countC);
    setShowResults(true);
  };

  const handleSubmitClick = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirm = () => {
    handleSubmit();
    setShowConfirmDialog(false);
    setShowScoreDialog(true);
  };

  const checkQuestion4 = () => {
    const isMultipleChoiceCorrect = multipleChoiceAnswers.question4 === correctAnswers.multipleChoice.question4;
    const isEnglishCorrect = fillInBlankAnswers.question4_english.toLowerCase() === correctAnswers.fillInBlank.question4_english;
    setIsQuestion4MultipleChoiceCorrect(isMultipleChoiceCorrect);
    setIsQuestion4EnglishCorrect(isEnglishCorrect);
    setIsQuestion4Correct(isMultipleChoiceCorrect && isEnglishCorrect);
  };

  const checkQuestion5 = () => {
    const isQuestion5Correct = fillInBlankAnswers.question5_1.toLowerCase() === 'a' &&
        fillInBlankAnswers.question5_2.toLowerCase() === 'r' &&
        fillInBlankAnswers.question5_3.toLowerCase() === 't' &&
        fillInBlankAnswers.question5_4.toLowerCase() === 'r' &&
        fillInBlankAnswers.question5_5.toLowerCase() === 'o' &&
        fillInBlankAnswers.question5_6.toLowerCase() === 'o' &&
        fillInBlankAnswers.question5_7.toLowerCase() === 'm';
    setIsQuestion5Correct(isQuestion5Correct);
  };

  useEffect(() => {
    if (showResults) {
      checkQuestion4();
      checkQuestion5();
    }
  }, [showResults, multipleChoiceAnswers.question4, fillInBlankAnswers.question4_english, fillInBlankAnswers.question5_1, fillInBlankAnswers.question5_2, fillInBlankAnswers.question5_3, fillInBlankAnswers.question5_4, fillInBlankAnswers.question5_5, fillInBlankAnswers.question5_6, fillInBlankAnswers.question5_7]);

  const renderContent = () => {
    switch (submenu) {
      case "A - COMPETENCES - VOCABULARY - SENTENCES PATTERNS (Những năng lực - Từ vựng - Các mẫu câu)":
        return <PartA 
        currentItems={currentItems} 
        currentPage={currentPage} 
        totalPages={totalPages} 
        handlePageChange={handlePageChange} 
      />
        
      case "B - LET’S REVIEW VOCABULARY TOGETHER! (Hãy cùng ôn luyện từ vựng!)":
        return (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-8 text-pink-600 dark:text-pink-300 border-b pb-4">
              B - Điền vào chỗ trống hoặc sắp xếp các chữ cái sao cho chính xác
              (Fill in the blanks or arrange the letters correctly)
            </h2>
            <div className="space-y-8">
              {["musicRoom", "scienceRoom", "classroom"].map((item, index) => (
                <Card
                  key={item}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 transform transition-all duration-200 hover:shadow-lg"
                >
                  <div className="px-6 pt-6">
                    <span className="font-bold text-lg bg-purple-200 dark:bg-purple-700 px-4 py-2 rounded-lg inline-block text-purple-700 dark:text-purple-300 mb-4">
                      Question {index + 1}
                    </span>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-purple-700 dark:text-purple-300">
                      <div className="space-y-4 w-full">
                      {item === "musicRoom" ? (
                        <div>
                          <p className="text-xl mb-4">mus_ _ r_ _ m</p>
                          <img src={musicRoom} alt="Music Room Hint" className="mt-2 rounded-lg max-w-sm-[100px] shadow-md" />
                        </div>
                      ) : item === "scienceRoom" ? (
                        <div>
                          <p className="text-xl mb-4">sc_ _ n_ _ r_ _m</p>
                          <video
                            className="mt-2 rounded-lg max-w-sm-[100px] shadow-md"
                            controls
                            src={scienceRoomVideo}
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      ) : (
                        <div>
                          <p className="text-xl mb-4">cl_ _sr_ _m</p>
                          <img src={classroom} alt="Classroom Hint" className="mt-2 rounded-lg max-w-sm-[100px] shadow-md" />
                        </div>
                      )}
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4">                
                    <Input
                      name={item}
                      value={
                        fillInBlankAnswers[
                          item as keyof typeof fillInBlankAnswers
                        ]
                      }
                      onChange={handleFillInBlankChange}
                      placeholder="Enter your answer"
                      className={`bg-white dark:bg-gray-800 text-lg p-6 ${
                        showResults
                          ? fillInBlankAnswers[
                              item as keyof typeof fillInBlankAnswers
                            ].toLowerCase() ===
                            correctAnswers.fillInBlank[
                              item as keyof typeof correctAnswers.fillInBlank
                            ]
                            ? "border-green-500 focus:ring-green-500"
                            : "border-red-500 focus:ring-red-500"
                          : "focus:ring-purple-500"
                      }`}
                    />
                    {showResults &&
                      fillInBlankAnswers[
                        item as keyof typeof fillInBlankAnswers
                      ].toLowerCase() !==
                        correctAnswers.fillInBlank[
                          item as keyof typeof correctAnswers.fillInBlank
                        ] && (
                        <p className="text-red-500 mt-4 flex items-center gap-2">
                          <AlertCircle className="h-5 w-5" />
                          Correct answer:{" "}
                          <span className="font-semibold">
                          {
                            correctAnswers.fillInBlank[
                              item as keyof typeof correctAnswers.fillInBlank
                            ]
                          }
                          </span>
                        </p>
                      )}
                  </CardContent>
                </Card>
              ))}
              <Card className="w-full mt-4">
                <CardHeader>
                  <CardTitle className="font-bold text-lg bg-purple-200 dark:bg-purple-700 px-4 py-2 rounded-lg inline-block text-purple-700 dark:text-purple-300 mb-4 w-[120px]">Question 4</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col items-center gap-4">
                      <img className="w-[300px] h-[200px]" src={auditorium} alt="Auditorium" />
                      <div className="flex flex-wrap md:flex-nowrap gap-2 justify-start w-full ">
                        <img src={image8} alt="Sign 1" className="w-[calc(20%-8px)] sm:w-[calc(16.66%-8px)] md:w-16 h-auto" />
                        <img src={image12} alt="Sign 2" className="w-[calc(20%-8px)] sm:w-[calc(16.66%-8px)] md:w-16 h-auto" />
                        <img src={image34} alt="Sign 3" className="w-[calc(20%-8px)] sm:w-[calc(16.66%-8px)] md:w-16 h-auto" />
                        <img src={image49} alt="Sign 4" className="w-[calc(20%-8px)] sm:w-[calc(16.66%-8px)] md:w-16 h-auto" />
                        <img src={image41} alt="Sign 5" className="w-[calc(20%-8px)] sm:w-[calc(16.66%-8px)] md:w-16 h-auto" />
                        <img src={image13} alt="Sign 6" className="w-[calc(20%-8px)] sm:w-[calc(16.66%-8px)] md:w-16 h-auto" />
                        <img src={image7} alt="Sign 7" className="w-[calc(20%-8px)] sm:w-[calc(16.66%-8px)] md:w-16 h-auto" />
                        <img src={image49} alt="Sign 8" className="w-[calc(20%-8px)] sm:w-[calc(16.66%-8px)] md:w-16 h-auto" />
                        <img src={image13} alt="Sign 9" className="w-[calc(20%-8px)] sm:w-[calc(16.66%-8px)] md:w-16 h-auto" />
                        <img src={image6} alt="Sign 10" className="w-[calc(20%-8px)] sm:w-[calc(16.66%-8px)] md:w-16 h-auto" />
                      </div>
                      <div className="w-full pl-4">
                        <p className="text-lg font-medium">Chữ cái kí hiệu nào bên trên là sai:</p>
                      </div>
                      <RadioGroup
                        defaultValue="answer"
                        className="grid grid-cols-1 gap-4 w-full pl-4"
                        onValueChange={(value) => handleMultipleChoiceChange("question4", value)}
                      >
                        <div className="flex items-center gap-4">
                          <RadioGroupItem 
                            value="a" 
                            id="q4-a"
                            className={`${
                              showResults
                                ? multipleChoiceAnswers.question4 === "a"
                                  ? "border-red-500"
                                  : ""
                                : ""
                            }`}
                          />
                          <Label htmlFor="q4-a" className="flex items-center gap-4">
                            <span className="w-8">A.</span>
                            <img src={image12} alt="Option A" className="w-16" />
                          </Label>
                        </div>
                        <div className="flex items-center gap-4">
                          <RadioGroupItem 
                            value="b" 
                            id="q4-b"
                            className={`${
                              showResults
                                ? multipleChoiceAnswers.question4 === "b"
                                  ? "border-red-500"
                                  : ""
                                : ""
                            }`}
                          />
                          <Label htmlFor="q4-b" className="flex items-center gap-4">
                            <span className="w-8">B.</span>
                            <img src={image8} alt="Option B" className="w-16" />
                          </Label>
                        </div>
                        <div className="flex items-center gap-4">
                          <RadioGroupItem 
                            value="c" 
                            id="q4-c"
                            className={`${
                              showResults
                                ? multipleChoiceAnswers.question4 === "c"
                                  ? "border-red-500"
                                  : ""
                                : ""
                            }`}
                          />
                          <Label htmlFor="q4-c" className="flex items-center gap-4">
                            <span className="w-8">C.</span>
                            <img src={image34} alt="Option C" className="w-16" />
                          </Label>
                        </div>
                        <div className="flex items-center gap-4">
                          <RadioGroupItem 
                            value="d" 
                            id="q4-d"
                            className={`${
                              showResults
                                ? multipleChoiceAnswers.question4 === "d"
                                  ? "border-green-500"
                                  : ""
                                : ""
                            }`}
                          />
                          <Label htmlFor="q4-d" className="flex items-center gap-4">
                            <span className="w-8">D.</span>
                            <img src={image13} alt="Option D" className="w-16" />
                          </Label>
                        </div>
                      </RadioGroup>
                      <div className="w-full pl-4">
                        <Label>Tiếng Anh:</Label>
                        <Input
                          name="question4_english"
                          value={fillInBlankAnswers.question4_english}
                          onChange={handleFillInBlankChange}
                          placeholder="Enter your answer"
                          className={`bg-white dark:bg-gray-800 text-lg p-6 ${
                            showResults
                              ? fillInBlankAnswers.question4_english.toLowerCase() === correctAnswers.fillInBlank.question4_english
                                ? "border-green-500"
                                : "border-red-500"
                              : ""
                          }`}
                        />
                      </div>
                      {showResults && (
                        <div className="mt-2 flex items-center gap-2 pl-4">
                          {isQuestion4MultipleChoiceCorrect ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          )}
                          <p className={`text-lg ${isQuestion4MultipleChoiceCorrect ? 'text-green-500' : 'text-red-500'}`}>
                            {isQuestion4MultipleChoiceCorrect ? 'Correct!' : 'Incorrect'}
                          </p>
                        </div>
                      )}
                      {showResults && (
                        <div className="mt-2 flex items-center gap-2 pl-4">
                          {isQuestion4EnglishCorrect ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          )}
                          <p className={`text-lg ${isQuestion4EnglishCorrect ? 'text-green-500' : 'text-red-500'}`}>
                            {isQuestion4EnglishCorrect ? 'Correct! : auditorium' : 'Incorrect : auditorium'}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="w-full mt-4">
                <CardHeader>
                  <CardTitle className="font-bold text-lg bg-purple-200 dark:bg-purple-700 px-4 py-2 rounded-lg inline-block text-purple-700 dark:text-purple-300 mb-4 w-[120px]">Question 5</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-col items-center gap-4">
                      <video
                        className="w-full max-w-[500px] rounded-lg shadow-md"
                        controls
                        src={artRoomVideo}
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div className="w-full pl-4">
                        <Label>Điền vào khoảng trống:</Label>
                        <div className="flex gap-2 mt-2 flex-wrap">
                          <Input
                            name="question5_1"
                            value={fillInBlankAnswers.question5_1 || ''}
                            onChange={(e) => {
                              handleFillInBlankChange(e);
                              if (e.target.value && e.target.value.length === 1) {
                                const nextInput = document.querySelector('input[name="question5_2"]') as HTMLInputElement;
                                if (nextInput) nextInput.focus();
                              }
                            }}
                            maxLength={1}
                            className="w-12 text-center p-2"
                          />
                          <Input
                            name="question5_2"
                            value={fillInBlankAnswers.question5_2 || ''}
                            onChange={(e) => {
                              handleFillInBlankChange(e);
                              if (e.target.value && e.target.value.length === 1) {
                                const nextInput = document.querySelector('input[name="question5_3"]') as HTMLInputElement;
                                if (nextInput) nextInput.focus();
                              }
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Backspace' && !fillInBlankAnswers.question5_2) {
                                const prevInput = document.querySelector('input[name="question5_1"]') as HTMLInputElement;
                                if (prevInput) prevInput.focus();
                              }
                            }}
                            maxLength={1}
                            className="w-12 text-center p-2"
                          />
                          <Input
                            name="question5_3"
                            value={fillInBlankAnswers.question5_3 || ''}
                            onChange={(e) => {
                              handleFillInBlankChange(e);
                              if (e.target.value && e.target.value.length === 1) {
                                const nextInput = document.querySelector('input[name="question5_4"]') as HTMLInputElement;
                                if (nextInput) nextInput.focus();
                              }
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Backspace' && !fillInBlankAnswers.question5_3) {
                                const prevInput = document.querySelector('input[name="question5_2"]') as HTMLInputElement;
                                if (prevInput) prevInput.focus();
                              }
                            }}
                            maxLength={1}
                            className="w-12 text-center p-2"
                          />
                          <Input
                            name="question5_4"
                            value={fillInBlankAnswers.question5_4 || ''}
                            onChange={(e) => {
                              handleFillInBlankChange(e);
                              if (e.target.value && e.target.value.length === 1) {
                                const nextInput = document.querySelector('input[name="question5_5"]') as HTMLInputElement;
                                if (nextInput) nextInput.focus();
                              }
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Backspace' && !fillInBlankAnswers.question5_4) {
                                const prevInput = document.querySelector('input[name="question5_3"]') as HTMLInputElement;
                                if (prevInput) prevInput.focus();
                              }
                            }}
                            maxLength={1}
                            className="w-12 text-center p-2"
                          />
                          <Input
                            name="question5_5"
                            value={fillInBlankAnswers.question5_5 || ''}
                            onChange={(e) => {
                              handleFillInBlankChange(e);
                              if (e.target.value && e.target.value.length === 1) {
                                const nextInput = document.querySelector('input[name="question5_6"]') as HTMLInputElement;
                                if (nextInput) nextInput.focus();
                              }
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Backspace' && !fillInBlankAnswers.question5_5) {
                                const prevInput = document.querySelector('input[name="question5_4"]') as HTMLInputElement;
                                if (prevInput) prevInput.focus();
                              }
                            }}
                            maxLength={1}
                            className="w-12 text-center p-2"
                          />
                          <Input
                            name="question5_6"
                            value={fillInBlankAnswers.question5_6 || ''}
                            onChange={(e) => {
                              handleFillInBlankChange(e);
                              if (e.target.value && e.target.value.length === 1) {
                                const nextInput = document.querySelector('input[name="question5_7"]') as HTMLInputElement;
                                if (nextInput) nextInput.focus();
                              }
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Backspace' && !fillInBlankAnswers.question5_6) {
                                const prevInput = document.querySelector('input[name="question5_5"]') as HTMLInputElement;
                                if (prevInput) prevInput.focus();
                              }
                            }}
                            maxLength={1}
                            className="w-12 text-center p-2"
                          />
                          <Input
                            name="question5_7"
                            value={fillInBlankAnswers.question5_7 || ''}
                            onChange={(e) => {
                              handleFillInBlankChange(e);
                            }}
                            onKeyDown={(e) => {
                              if (e.key === 'Backspace' && !fillInBlankAnswers.question5_7) {
                                const prevInput = document.querySelector('input[name="question5_6"]') as HTMLInputElement;
                                if (prevInput) prevInput.focus();
                              }
                            }}
                            maxLength={1}
                            className="w-12 text-center p-2"
                          />
                        </div>
                      </div>
                      {showResults && (
                        <div className="mt-2 flex items-center gap-2">
                          {isQuestion5Correct ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          )}
                          <p className={`text-lg ${isQuestion5Correct ? 'text-green-500' : 'text-red-500'}`}>
                            {isQuestion5Correct ? 'Correct!' : 'Incorrect'}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        );
      case "C - Chọn đáp án đúng (Choose the correct answer)":
        return (
          <section>
            <h2 className="text-2xl font-semibold mb-8 text-pink-600 dark:text-pink-300 border-b pb-4">
              C - Chọn đáp án đúng (Choose the correct answer)
            </h2>
            <div className="space-y-8">
              {["library", "playground", "cafeteria"].map((item, index) => (
                <Card
                  key={item}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 transform transition-all duration-200 hover:shadow-lg"
                >
                  <div className="px-6 pt-6">
                    <span className="font-bold text-lg bg-purple-200 dark:bg-purple-700 px-4 py-2 rounded-lg inline-block text-purple-700 dark:text-purple-300 mb-4">
                      Question {index + 4}
                    </span>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-purple-700 dark:text-purple-300">
                      <div className="space-y-4 w-full">
                        <p className="text-xl">
                        {item === "library"
                          ? "Where is the library?"
                          : item === "playground"
                          ? "Where are the students?"
                          : "Where is the cafeteria?"}
                        </p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-32 bg-white dark:bg-gray-700 rounded-md mb-2 shadow-inner"></div>
                    <RadioGroup
                      value={
                        multipleChoiceAnswers[
                          item as keyof typeof multipleChoiceAnswers
                        ]
                      }
                      onValueChange={(value) =>
                        handleMultipleChoiceChange(item, value)
                      }
                    >
                      {["a", "b", "c"].map((option) => (
                        <div
                          key={option}
                          className="flex items-center space-x-2 pl-4"
                        >
                          <RadioGroupItem
                            value={option}
                            id={`${item}-${option}`}
                          />
                          <Label
                            htmlFor={`${item}-${option}`}
                            className="text-purple-700 dark:text-purple-300"
                          >
                            {item === "library" &&
                              option === "a" &&
                              "It's next to the gym."}
                            {item === "library" &&
                              option === "b" &&
                              "He is at the library."}
                            {item === "library" &&
                              option === "c" &&
                              "They are outside."}
                            {item === "playground" &&
                              option === "a" &&
                              "She is in the classroom."}
                            {item === "playground" &&
                              option === "b" &&
                              "They are in the playground."}
                            {item === "playground" &&
                              option === "c" &&
                              "It's on the second floor."}
                            {item === "cafeteria" &&
                              option === "a" &&
                              "He is eating."}
                            {item === "cafeteria" &&
                              option === "b" &&
                              "It's on the first floor."}
                            {item === "cafeteria" &&
                              option === "c" &&
                              "They are in the cafeteria."}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                    {showResults &&
                      multipleChoiceAnswers[
                        item as keyof typeof multipleChoiceAnswers
                      ] !==
                        correctAnswers.multipleChoice[
                          item as keyof typeof correctAnswers.multipleChoice
                        ] && (
                        <p className="text-red-500 mt-4 flex items-center gap-2">
                          <AlertCircle className="h-5 w-5" />
                          Correct answer:{" "}
                          <span className="font-semibold">
                          {
                            correctAnswers.multipleChoice[
                              item as keyof typeof correctAnswers.multipleChoice
                            ]
                          }
                          </span>
                        </p>
                      )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        );
      default:
        return (
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-pink-600 dark:text-pink-300">
              Welcome to topic 2: Places
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Please select a submenu (A, B, or C) to start your lesson.
            </p>
          </div>
        );
    }
  };

  const scores = [
    {
      partName: "B",
      count: partBCount,
      maxCount: 5,
      score: Math.round((partBCount / 5) * 5 * 100) / 100,
      maxScore: 5,
      description: "B - LET'S REVIEW VOCABULARY TOGETHER! (Hãy cùng ôn luyện từ vựng!)"
    },
    {
      partName: "C",
      count: partCCount,
      maxCount: 3,
      score: Math.round((partCCount / 3) * 5 * 100) / 100,
      maxScore: 5,
      description: "C - Chọn đáp án đúng (Choose the correct answer)"
    }
  ];


  return (
    <ScrollArea className="h-full">
      <div className="container mx-auto p-4 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900 min-h-screen">
        <div className="mb-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-6 text-center text-purple-600 dark:text-purple-300">
            TOPIC 2: PLACES (Các địa điểm/nơi chốn)
          </h1>
        </div>

        {renderContent()}
        {!submenu.startsWith("A") && submenu !== "" && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleSubmitClick}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full"
            >
              Nộp bài
            </Button>
          </div>
        )}
        <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Xác nhận nộp bài</AlertDialogTitle>
              <AlertDialogDescription>
                Bạn có chắc chắn muốn nộp bài không? 
                Sau khi nộp bài, bạn sẽ không thể thay đổi câu trả lời.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Hủy</AlertDialogCancel>
              <AlertDialogAction onClick={handleConfirm}>Nộp bài</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <ScoreDialog 
          open={showScoreDialog}
          onOpenChange={setShowScoreDialog}
          scores={scores}
        />
      </div>
    </ScrollArea>
  );
}
