import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import ReactPlayer from 'react-player/lazy';
import classroom from "../../assets/imgs/classroom.png";
import musicRoom from "../../assets/imgs/musicroom.png";
import scienceRoom from "../../assets/imgs/scienceroom.png";
import gym from "../../assets/imgs/gym.png";
import artRoom from "../../assets/imgs/artroom.png";
import lunchRoom from "../../assets/imgs/lunchroom.png";
import office from "../../assets/imgs/office.png";
import library from "../../assets/imgs/library.png";
import pool from "../../assets/imgs/pool.png";
import stairs from "../../assets/imgs/stairs.png";
import computerLab from "../../assets/imgs/computerlab.png";
import hallway from "../../assets/imgs/hallway.png";
import auditorium from "../../assets/imgs/auditorium.png";
import nurseOffice from "../../assets/imgs/nursesoffice.png";
import restroom from "../../assets/imgs/restroom.png";
import playground from "../../assets/imgs/playground.png";
import clinic from "../../assets/imgs/clinic.png";
import repairShop from "../../assets/imgs/repairshop.png";
import factory from "../../assets/imgs/factory.png";
import store from "../../assets/imgs/store.png";
import bookstore from "../../assets/imgs/bookstore.png";
import airport from "../../assets/imgs/airport.png";
import trainStation from "../../assets/imgs/trainstation.png";
import busStop from "../../assets/imgs/busstop.png";
import bakery from "../../assets/imgs/bakery.png";
import acrossFrom from "../../assets/imgs/acrossfrom.png";
import between from "../../assets/imgs/between.png";
import nextTo from "../../assets/imgs/nextto.png";
import image6 from "../../assets/imgs/image6.png";
import image7 from "../../assets/imgs/image7.png";
import image8 from "../../assets/imgs/image8.png";
import image12 from "../../assets/imgs/image12.jpg";
import image13 from "../../assets/imgs/image13.png";
import image34 from "../../assets/imgs/image34.png";
import image41 from "../../assets/imgs/image41.png";
import image49 from "../../assets/imgs/image49.png";
// Import videos
import classroomVideo from "../../assets/videos/classroom.mp4";
import musicRoomVideo from "../../assets/videos/musicroom.mp4";
import scienceRoomVideo from "../../assets/videos/scienceroom.mp4";
import gymVideo from "../../assets/videos/gym.mp4";
import artRoomVideo from "../../assets/videos/artroom.mp4";
import lunchRoomVideo from "../../assets/videos/lunchroom.mp4";
import officeVideo from "../../assets/videos/office.mp4";
import libraryVideo from "../../assets/videos/library.mp4";
import poolVideo from "../../assets/videos/pool.mp4";
import stairsVideo from "../../assets/videos/stairs.mp4";
import computerLabVideo from "../../assets/videos/computerlab.mp4";
import hallwayVideo from "../../assets/videos/hallway.mp4";
import auditoriumVideo from "../../assets/videos/auditorium.mp4";
import nurseOfficeVideo from "../../assets/videos/nurseoffice.mp4";
import restroomVideo from "../../assets/videos/restroom.mp4";
import playgroundVideo from "../../assets/videos/playground.mp4";
import clinicVideo from "../../assets/videos/clinic.mp4";
import repairShopVideo from "../../assets/videos/repairshop.mp4";
import factoryVideo from "../../assets/videos/factory.mp4";
import storeVideo from "../../assets/videos/store.mp4";
import bookstoreVideo from "../../assets/videos/bookstore.mp4";
import airportVideo from "../../assets/videos/airport.mp4";
import trainStationVideo from "../../assets/videos/trainstation.mp4";
import busStopVideo from "../../assets/videos/busstop.mp4";
import bakeryVideo from "../../assets/videos/bakery.mp4";
import acrossFromVideo from "../../assets/videos/acrossfrom.mp4";
import betweenVideo from "../../assets/videos/between.mp4";
import nextToVideo from "../../assets/videos/nextto.mp4";
import whereIsHeNowVideo from "../../assets/videos/whereishenow.mp4";
import heIsInTheRestroomVideo from "../../assets/videos/heisintherestroom.mp4";
import whereWasSheThisMorningVideo from "../../assets/videos/wherewasshethismorning.mp4";
import sheWasInThePoolVideo from "../../assets/videos/shewasinthepool.mp4";
import areTheyInThePoolNowVideo from "../../assets/videos/aretheyinthepoolnow.mp4";
import yesTheyAreVideo from "../../assets/videos/yestheyareNotheyaren't.mp4";
import wereYouInThePoolVideo from "../../assets/videos/wereyouinthepoolthismorning.mp4";
import whereIsTheLibraryVideo from "../../assets/videos/whereisthelibrary.mp4";
import itIsNextToTheClassroomVideo from "../../assets/videos/itisnexttotheclassroom.mp4";



const vocabularyData = [
  {
    word: "classroom",
    translation: "phòng học",
    pronunciation: "(n)",
    image: classroom,
    video: classroomVideo,
    example: "Ex: Where is the classroom?"
  },
  {
    word: "music room",
    translation: "phòng âm nhạc",
    pronunciation: "(n)",
    image: musicRoom,
    video: musicRoomVideo,
    example: "Ex: He's going to the music room."
  },
  {
    word: "science room",
    translation: "phòng khoa học",
    pronunciation: "(n)",
    image: scienceRoom,
    video: scienceRoomVideo,
    example: "Ex: It's across from the science room."
  },
  {
    word: "gym",
    translation: "phòng thể dục",
    pronunciation: "(n)",
    image: gym,
    video: gymVideo,
    example: "Ex: It is next to the gym."
  },
  {
    word: "art room",
    translation: "phòng nghệ thuật",
    pronunciation: "(n)",
    image: artRoom,
    video: artRoomVideo,
    example: "Ex: She is in the art room now."
  },
  {
    word: "lunchroom",
    translation: "nhà ăn",
    pronunciation: "(n)",
    image: lunchRoom,
    video: lunchRoomVideo,
    example: "Ex: He was in the lunchroom."
  },
  {
    word: "office",
    translation: "văn phòng",
    pronunciation: "(n)",
    image: office,
    video: officeVideo,
    example: "Ex: Were you in the office this afternoon?"
  },
  {
    word: "library",
    translation: "thư viện",
    pronunciation: "(n)",
    image: library,
    video: libraryVideo,
    example: "Ex: Where is the library?"
  },
  {
    word: "pool",
    translation: "bể bơi",
    pronunciation: "(n)",
    image: pool,
    video: poolVideo,
    example: "Ex: She was in the pool this morning."
  },
  {
    word: "stairs",
    translation: "cầu thang",
    pronunciation: "(n)",
    image: stairs,
    video: stairsVideo,
    example: "Ex: I am on the stairs."
  },
  {
    word: "computer lab",
    translation: "phòng máy tính/ phòng Tin học",
    pronunciation: "(n)",
    image: computerLab,
    video: computerLabVideo,
    example: "Ex: She is in the computer lab now."
  },
  {
    word: "hallway",
    translation: "hành lang",
    pronunciation: "(n)",
    image: hallway,
    video: hallwayVideo,
    example: "Ex: He was in the hallway."
  },
  {
    word: "auditorium",
    translation: "hội trường",
    pronunciation: "(n)",
    image: auditorium,
    video: auditoriumVideo,
    example: "Ex: Were you in the auditorium this morning?"
  },
  {
    word: "nurse's office",
    translation: "phòng y tế",
    pronunciation: "(n)",
    image: nurseOffice,
    video: nurseOfficeVideo,
    example: "Ex: Where is the nurse's office?"
  },
  {
    word: "restroom",
    translation: "nhà vệ sinh",
    pronunciation: "(n)",
    image: restroom,
    video: restroomVideo,
    example: "Ex: Are you in the restroom?"
  },
  {
    word: "playground",
    translation: "sân chơi",
    pronunciation: "(n)",
    image: playground,
    video: playgroundVideo,
    example: "Ex: Is he on the playground now?"
  },
  {
    word: "clinic",
    translation: "trạm xá, phòng khám chữa bệnh",
    pronunciation: "(n)",
    image: clinic,
    video: clinicVideo,
    example: "Ex: They were at the clinic yesterday."
  },
  {
    word: "repair shop",
    translation: "cửa hàng sửa chữa",
    pronunciation: "(n)",
    image: repairShop,
    video: repairShopVideo,
    example: "Ex: Are they at the repair shop now?"
  },
  {
    word: "factory",
    translation: "nhà máy",
    pronunciation: "(n)",
    image: factory,
    video: factoryVideo,
    example: "Ex: Are they going to the factory?"
  },
  {
    word: "store",
    translation: "cửa hàng",
    pronunciation: "(n)",
    image: store,
    video: storeVideo,
    example: "Ex: He's going to the store."
  },
  {
    word: "bookstore",
    translation: "nhà sách",
    pronunciation: "(n)",
    image: bookstore,
    video: bookstoreVideo,
    example: "Ex: They're at the bookstore."
  },
  {
    word: "airport",
    translation: "sân bay",
    pronunciation: "(n)",
    image: airport,
    video: airportVideo,
    example: "Ex: He was at the airport yesterday."
  },
  {
    word: "train station",
    translation: "nhà ga",
    pronunciation: "(n)",
    image: trainStation,
    video: trainStationVideo,
    example: "Ex: Are you at the train station now?"
  },
  {
    word: "bus stop",
    translation: "trạm dừng xe buýt",
    pronunciation: "(n)",
    image: busStop,
    video: busStopVideo,
    example: "Ex: Are they at the bus stop now?"
  },
  {
    word: "bakery",
    translation: "tiệm bánh",
    pronunciation: "(n)",
    image: bakery,
    video: bakeryVideo,
    example: "Ex: She is going to the bakery."
  },
  {
    word: "across from",
    translation: "đối diện với",
    pronunciation: "(prep)",
    image: acrossFrom,
    video: acrossFromVideo,
    example: "Ex: The lunchroom is across from the library."
  },
  {
    word: "between",
    translation: "ở giữa",
    pronunciation: "(prep)",
    image: between,
    video: betweenVideo,
    example: "Ex: It's between the science room and the art room."
  },
  {
    word: "next to",
    translation: "bên cạnh",
    pronunciation: "(prep)",
    image: nextTo,
    video: nextToVideo,
    example: "Ex: It's next to the classroom."
  }
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
import { ScoreDialog } from "./ScoreDialog";

export default function Unit2({ submenu }: { submenu: string }) {
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
        return (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-8 text-pink-600 dark:text-pink-300 border-b pb-4">
              A - COMPETENCES - VOCABULARY - SENTENCES PATTERNS (Những năng lực - Từ vựng - Các mẫu câu)
            </h2>

            {/* Competences Section */}
            <div className="mb-6 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">
               1. COMPETENCES (Những năng lực)
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-blue-800 dark:text-blue-200">
                <li>Describing locations (Mô tả địa điểm)</li>
                <li>Asking questions and writing about past and current locations (singular) (Đặt câu hỏi và viết về các địa điểm trong quá khứ và hiện tại (số ít))</li>
                <li>Asking questions and writing about past and current locations (plural) (Đặt câu hỏi và viết về các địa điểm trong quá khứ và hiện tại (số nhiều))</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">2. Vocabulary (Từ vựng)</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentItems.map((item) => (
                <Card
                  key={item.word}
                  className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 hover:shadow-lg transition-shadow duration-200"
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-semibold text-lg text-purple-700 dark:text-purple-300 min-w-[100px]">
                        {item.word}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 px-2">
                        {item.pronunciation}
                      </p>
                      <p className="text-sm font-medium text-pink-600 dark:text-pink-300 min-w-[80px] text-right">
                        {item.translation}
                      </p>
                    </div>
                    <div className="relative">
                      {selectedCard === item.word ? (
                        <div className="relative aspect-video w-full">
                          <ReactPlayer
                            url={item.video}
                            controls={true}
                            width="100%"
                            height="100%"
                            playing={false}
                            pip={false}
                            stopOnUnmount={true}
                            className="absolute top-0 left-0"
                            config={{
                              file: {
                                attributes: {
                                  controlsList: 'nodownload',
                                  disablePictureInPicture: true,
                                }
                              }
                            }}
                          />
                        </div>
                      ) : (
                        <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-md mb-3 overflow-hidden relative group">
                          <img
                            src={item.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                          <button
                            onClick={() => setSelectedCard(item.word)}
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <svg
                              className="w-12 h-12 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14.752 11.168l-3.197-2.132A1 11 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {item.example}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            {/* Phân trang */}
            <div className="flex justify-center mt-6 gap-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-md bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
                <button
                  key={pageNumber}
                  onClick={() => handlePageChange(pageNumber)}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === pageNumber
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {pageNumber}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-md bg-blue-500 text-white disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
            <br />
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">3. Sentences Patterns (Các mẫu câu)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <tbody>
                    {[
                      {
                        id: 1,
                        content: [
                          "1.",
                          "Where is he now?",
                          "(Anh ấy ở đâu bây giờ? / Bây giờ anh ấy ở đâu?)",
                          "Sign language: he - now - Where?",
                          "⦿ whereishenow.mp4",
                          "He is in the restroom.",
                          "(Anh ấy đang ở nhà vệ sinh.)",
                          "Sign language: He - (now) - restroom.",
                          "⦿ heisintherestroom.mp4"
                        ]
                      },
                      {
                        id: 2,
                        content: [
                          "2.",
                          "Where was she this morning?",
                          "(Cô ấy ở đâu sáng nay? / Sáng nay cô ấy ở đâu?)",
                          "Sign language: she - this morning - Where?",
                          "⦿ wherewasshethismorning.mp4",
                          "She was in the pool.",
                          "(Cô ấy đã ở bể bơi.)",
                          "Sign language: She - (this morning) - pool.",
                          "⦿ shewasinthepool.mp4"
                        ]
                      },
                      {
                        id: 3,
                        content: [
                          "3.",
                          "Are they in the pool now?",
                          "(Họ có đang ở bể bơi bây giờ không?)",
                          "Sign language: they - now - pool?",
                          "⦿ aretheyinthepoolnow.mp4",
                          "Yes, they are. / No, they aren't.",
                          "(Vâng, đúng vậy. / Không, họ không (ở đó).)",
                          "Sign language: Yes. / No.",
                          "⦿ yestheyareNotheyaren't.mp4"
                        ]
                      },
                      {
                        id: 4,
                        content: [
                          "4.",
                          "Were you in the pool this morning?",
                          "(Bạn có ở bể bơi sáng nay không?)",
                          "Sign language: you - this morning - pool?",
                          "⦿ wereyouinthepoolthismorning.mp4",
                          "Yes, I was. / No, I wasn't.",
                          "(Vâng, đúng vậy. / Không, tôi đã không (ở đó).)",
                          "Sign language: Yes. / No.",
                          "⦿ yestheyareNotheyaren't.mp4"
                        ]
                      },
                      {
                        id: 5,
                        content: [
                          "5.",
                          "Where is the library?",
                          "(Thư viện ở đâu?)",
                          "Sign language: library - where?",
                          "⦿ whereisthelibrary.mp4",
                          "It is next to the classroom.",
                          "(Nó ở bên cạnh phòng học.)",
                          "Sign language: classroom - next.",
                          "⦿ itisnexttotheclassroom.mp4"
                        ]
                      }
                    ].map((item) => (
                      <tr key={item.id} className="border-b">
                        <td className="p-4 border">
                          {item.content.map((row, index) => (
                            <div 
                              key={index}
                              className={`py-3  ${
                                row.startsWith('⦿') ? 'text-red-500' : 
                                index % 8 === 1 ? 'text-red-600 font-bold text-lg' :
                                index % 8 === 5 ? 'text-red-600 font-bold text-lg' :
                                index % 8 === 0 ? 'text-blue-600 font-semibold' :
                                row.startsWith('Sign language') ? 'font-bold' : ''                                                           
                              }`
                            }
                            >
                              {row.startsWith('⦿') ? (
                                <video
                                  className="w-full max-w-[300px] mt-2"
                                  controls
                                  src={
                                    row.includes('whereishenow') ? whereIsHeNowVideo :
                                    row.includes('heisintherestroom') ? heIsInTheRestroomVideo :
                                    row.includes('wherewasshethismorning') ? whereWasSheThisMorningVideo :
                                    row.includes('shewasinthepool') ? sheWasInThePoolVideo :
                                    row.includes('aretheyinthepoolnow') ? areTheyInThePoolNowVideo :
                                    row.includes('yestheyareNotheyaren') ? yesTheyAreVideo :
                                    row.includes('wereyouinthepoolthismorning') ? wereYouInThePoolVideo :
                                    row.includes('whereisthelibrary') ? whereIsTheLibraryVideo :
                                    row.includes('itisnexttotheclassroom') ? itIsNextToTheClassroomVideo :
                                    ''
                                  }
                                />
                              ) : (
                                row
                              )}

                            </div>													  
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        );
        
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
                            onChange={handleFillInBlankChange}
                            placeholder="_"
                            className="w-12 text-center p-2"
                            maxLength={1}
                          />
                          <Input
                            name="question5_2"
                            value={fillInBlankAnswers.question5_2 || ''}
                            onChange={handleFillInBlankChange}
                            placeholder="_"
                            className="w-12 text-center p-2"
                            maxLength={1}
                          />
                          <Input
                            name="question5_3"
                            value={fillInBlankAnswers.question5_3 || ''}
                            onChange={handleFillInBlankChange}
                            placeholder="_"
                            className="w-12 text-center p-2"
                            maxLength={1}
                          />
                          <Input
                            name="question5_4"
                            value={fillInBlankAnswers.question5_4 || ''}
                            onChange={handleFillInBlankChange}
                            placeholder="_"
                            className="w-12 text-center p-2"
                            maxLength={1}
                          />
                          <Input
                            name="question5_5"
                            value={fillInBlankAnswers.question5_5 || ''}
                            onChange={handleFillInBlankChange}
                            placeholder="_"
                            className="w-12 text-center p-2"
                            maxLength={1}
                          />
                          <Input
                            name="question5_6"
                            value={fillInBlankAnswers.question5_6 || ''}
                            onChange={handleFillInBlankChange}
                            placeholder="_"
                            className="w-12 text-center p-2"
                            maxLength={1}
                          />
                          <Input
                            name="question5_7"
                            value={fillInBlankAnswers.question5_7 || ''}
                            onChange={handleFillInBlankChange}
                            placeholder="_"
                            className="w-12 text-center p-2"
                            maxLength={1}
                          />
                        </div>
                      </div>
                      {showResults && (
                        <div className="mt-2 flex items-center gap-2 pl-4">
                          {isQuestion5Correct ? (
                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-red-500" />
                          )}
                          <p className={`text-lg ${isQuestion5Correct ? 'text-green-500' : 'text-red-500'}`}>
                            {isQuestion5Correct ? 'Correct! : art room' : 'Incorrect. The answer is: art room'}
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
