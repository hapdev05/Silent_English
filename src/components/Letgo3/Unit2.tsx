import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import React, { useState, useEffect } from "react";
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
type WordType = "classroom" | "artRoom";

interface LetterCell {
  letter: string;
  id: number;
}

const vocabularyData = [
  {
    word: "classroom",
    translation: "phòng học",
    pronunciation: "(n)",
    image: classroom,
    example: "Ex: Where is the classroom?"
  },
  {
    word: "music room",
    translation: "phòng âm nhạc",
    pronunciation: "(n)",
    image: musicRoom,
    example: "Ex: He's going to the music room."
  },
  {
    word: "science room",
    translation: "phòng khoa học",
    pronunciation: "(n)",
    image: scienceRoom,
    example: "Ex: It's across from the science room."
  },
  {
    word: "gym",
    translation: "phòng thể dục",
    pronunciation: "(n)",
    image: gym,
    example: "Ex: It is next to the gym."
  },
  {
    word: "art room",
    translation: "phòng nghệ thuật",
    pronunciation: "(n)",
    image: artRoom,
    example: "Ex: She is in the art room now."
  },
  {
    word: "lunchroom",
    translation: "nhà ăn",
    pronunciation: "(n)",
    image: lunchRoom,
    example: "Ex: He was in the lunchroom."
  },
  {
    word: "office",
    translation: "văn phòng",
    pronunciation: "(n)",
    image: office,
    example: "Ex: Were you in the office this afternoon?"
  },
  {
    word: "library",
    translation: "thư viện",
    pronunciation: "(n)",
    image: library,
    example: "Ex: Where is the library?"
  },
  {
    word: "pool",
    translation: "bể bơi",
    pronunciation: "(n)",
    image: pool,
    example: "Ex: She was in the pool this morning."
  },
  {
    word: "stairs",
    translation: "cầu thang",
    pronunciation: "(n)",
    image: stairs,
    example: "Ex: I am on the stairs."
  },
  {
    word: "computer lab",
    translation: "phòng máy tính/ phòng Tin học",
    pronunciation: "(n)",
    image: computerLab,
    example: "Ex: She is in the computer lab now."
  },
  {
    word: "hallway",
    translation: "hành lang",
    pronunciation: "(n)",
    image: hallway,
    example: "Ex: He was in the hallway."
  },
  {
    word: "auditorium",
    translation: "hội trường",
    pronunciation: "(n)",
    image: auditorium,
    example: "Ex: Were you in the auditorium this morning?"
  },
  {
    word: "nurse's office",
    translation: "phòng y tế",
    pronunciation: "(n)",
    image: nurseOffice,
    example: "Ex: Where is the nurse's office?"
  },
  {
    word: "restroom",
    translation: "nhà vệ sinh",
    pronunciation: "(n)",
    image: restroom,
    example: "Ex: Are you in the restroom?"
  },
  {
    word: "playground",
    translation: "sân chơi",
    pronunciation: "(n)",
    image: playground,
    example: "Ex: Is he on the playground now?"
  },
  {
    word: "clinic",
    translation: "trạm xá, phòng khám chữa bệnh",
    pronunciation: "(n)",
    image: clinic,
    example: "Ex: They were at the clinic yesterday."
  },
  {
    word: "repair shop",
    translation: "cửa hàng sửa chữa",
    pronunciation: "(n)",
    image: repairShop,
    example: "Ex: Are they at the repair shop now?"
  },
  {
    word: "factory",
    translation: "nhà máy",
    pronunciation: "(n)",
    image: factory,
    example: "Ex: Are they going to the factory?"
  },
  {
    word: "store",
    translation: "cửa hàng",
    pronunciation: "(n)",
    image: store,
    example: "Ex: He's going to the store."
  },
  {
    word: "bookstore",
    translation: "nhà sách",
    pronunciation: "(n)",
    image: bookstore,
    example: "Ex: They're at the bookstore."
  },
  {
    word: "airport",
    translation: "sân bay",
    pronunciation: "(n)",
    image: airport,
    example: "Ex: He was at the airport yesterday."
  },
  {
    word: "train station",
    translation: "nhà ga",
    pronunciation: "(n)",
    image: trainStation,
    example: "Ex: Are you at the train station now?"
  },
  {
    word: "bus stop",
    translation: "trạm dừng xe buýt",
    pronunciation: "(n)",
    image: busStop,
    example: "Ex: Are they at the bus stop now?"
  },
  {
    word: "bakery",
    translation: "tiệm bánh",
    pronunciation: "(n)",
    image: bakery,
    example: "Ex: She is going to the bakery."
  },
  {
    word: "across from",
    translation: "đối diện với",
    pronunciation: "(prep)",
    image: acrossFrom,
    example: "Ex: The lunchroom is across from the library."
  },
  {
    word: "between",
    translation: "ở giữa",
    pronunciation: "(prep)",
    image: between,
    example: "Ex: It's between the science room and the art room."
  },
  {
    word: "next to",
    translation: "bên cạnh",
    pronunciation: "(prep)",
    image: nextTo,
    example: "Ex: It's next to the classroom."
  }
];

export default function Unit2({ submenu }: { submenu: string }) {
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
  };

  const [fillInBlankAnswers, setFillInBlankAnswers] = useState({
    musicRoom: "",
    scienceRoom: "",
    gym: "",
    classroom: "",
    artRoom: "",
  });

  const [multipleChoiceAnswers, setMultipleChoiceAnswers] = useState({
    library: "",
    playground: "",
    cafeteria: "",
  });

  const [scrambledWords, setScrambledWords] = useState<
    Record<WordType, LetterCell[]>
  >({
    classroom: [],
    artRoom: [],
  });

  const [userAnswers, setUserAnswers] = useState<
    Record<WordType, LetterCell[]>
  >({
    classroom: [],
    artRoom: [],
  });

  const correctAnswers = {
    fillInBlank: {
      musicRoom: "music room",
      scienceRoom: "science room",
      gym: "gym",
      classroom: "classroom",
      artRoom: "art room",
    },
    multipleChoice: {
      library: "a",
      playground: "b",
      cafeteria: "b",
    },
  };

  const [showResults, setShowResults] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  useEffect(() => {
    setScrambledWords({
      classroom: scrambleWord("classroom"),
      artRoom: scrambleWord("art room"),
    });
  }, []);

  const scrambleWord = (word: string): LetterCell[] => {
    return word
      .split("")
      .sort(() => Math.random() - 0.5)
      .map((letter, index) => ({
        letter,
        id: index,
      }));
  };

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

  const handleLetterClick = (word: WordType, letterCell: LetterCell) => {
    setScrambledWords((prev) => ({
      ...prev,
      [word]: prev[word].filter((cell) => cell.id !== letterCell.id),
    }));
    setUserAnswers((prev) => ({
      ...prev,
      [word]: [...prev[word], letterCell],
    }));
  };

  const handleAnswerClick = (word: WordType, letterCell: LetterCell) => {
    setUserAnswers((prev) => ({
      ...prev,
      [word]: prev[word].filter((cell) => cell.id !== letterCell.id),
    }));
    setScrambledWords((prev) => ({
      ...prev,
      [word]: [...prev[word], letterCell],
    }));
  };

  const handleSubmit = () => {
    let count = 0;

    Object.keys(fillInBlankAnswers).forEach((key) => {
      if (
        key !== "classroom" &&
        key !== "artRoom" &&
        fillInBlankAnswers[
          key as keyof typeof fillInBlankAnswers
        ].toLowerCase() ===
          correctAnswers.fillInBlank[
            key as keyof typeof correctAnswers.fillInBlank
          ]
      ) {
        count++;
      }
    });
    ["classroom", "artRoom"].forEach((word) => {
      const userAnswer = userAnswers[word as WordType]
        .map((cell) => cell.letter)
        .join("");
      if (
        userAnswer.toLowerCase() ===
        correctAnswers.fillInBlank[
          word as keyof typeof correctAnswers.fillInBlank
        ]
      ) {
        count++;
      }
    });

    Object.keys(multipleChoiceAnswers).forEach((key) => {
      if (
        multipleChoiceAnswers[key as keyof typeof multipleChoiceAnswers] ===
        correctAnswers.multipleChoice[
          key as keyof typeof correctAnswers.multipleChoice
        ]
      ) {
        count++;
      }
    });

    setCorrectCount(count);
    setShowResults(true);
  };

  const renderWordScramble = (word: WordType) => (
    <Card className="mb-6 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
      <CardHeader>
        <CardTitle>{word === "classroom" ? "Classroom" : "Art Room"}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4 min-h-[48px] p-2 border rounded bg-gray-100 dark:bg-gray-700 shadow-inner">
          {userAnswers[word].map((letterCell) => (
            <Button
              key={letterCell.id}
              variant="outline"
              className="w-10 h-10 text-lg font-bold bg-pink-200 hover:bg-pink-300 dark:bg-pink-700 dark:hover:bg-pink-600 transition-colors duration-200"
              onClick={() => handleAnswerClick(word, letterCell)}
            >
              {letterCell.letter}
            </Button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mb-4 min-h-[48px] p-2 border rounded bg-white dark:bg-gray-800 shadow-inner">
          {scrambledWords[word].map((letterCell) => (
            <Button
              key={letterCell.id}
              variant="outline"
              className="w-10 h-10 text-lg font-bold bg-purple-200 hover:bg-purple-300 dark:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200"
              onClick={() => handleLetterClick(word, letterCell)}
            >
              {letterCell.letter}
            </Button>
          ))}
        </div>

        {showResults && (
          <div
            className={`flex items-center gap-2 ${
              userAnswers[word]
                .map((cell) => cell.letter)
                .join("")
                .toLowerCase() === correctAnswers.fillInBlank[word]
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {userAnswers[word]
              .map((cell) => cell.letter)
              .join("")
              .toLowerCase() === correctAnswers.fillInBlank[word] ? (
              <CheckCircle2 className="h-5 w-5" />
            ) : (
              <AlertCircle className="h-5 w-5" />
            )}
            <p>
              {userAnswers[word]
                .map((cell) => cell.letter)
                .join("")
                .toLowerCase() === correctAnswers.fillInBlank[word]
                ? "Correct!"
                : `Incorrect. Correct answer: ${correctAnswers.fillInBlank[word]}`}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );

  const renderContent = () => {
    switch (submenu) {
      case "A - COMPETENCES - VOCABULARY - SENTENCES PATTERNS (Những năng lực - Từ vựng - Các mẫu câu)":
        return (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-pink-600 dark:text-pink-300">
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
                    <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-md mb-3 overflow-hidden">
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-full object-cover"
                      />
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
          </section>
        );
      case "B - Điền vào chỗ trống hoặc sắp xếp các chữ cái sao cho chính xác  (Fill in the blanks or arrange the letters correctly)":
        return (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-pink-600 dark:text-pink-300">
              B - Điền vào chỗ trống hoặc sắp xếp các chữ cái sao cho chính xác
              (Fill in the blanks or arrange the letters correctly)
            </h2>
            <div className="space-y-4">
              {["musicRoom", "scienceRoom", "gym"].map((item) => (
                <Card
                  key={item}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800"
                >
                  <CardHeader>
                    <CardTitle className="text-purple-700 dark:text-purple-300">
                      {item === "musicRoom"
                        ? "mus_ _ r_ _ m"
                        : item === "scienceRoom"
                        ? "s_ _ _ nce ro _ _"
                        : "_ _ _"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-32 bg-white dark:bg-gray-700 rounded-md mb-2 shadow-inner"></div>
                    <div className="w-full h-8 bg-gray-200 dark:bg-gray-600 rounded-md mb-2 shadow-inner"></div>
                    <Input
                      name={item}
                      value={
                        fillInBlankAnswers[
                          item as keyof typeof fillInBlankAnswers
                        ]
                      }
                      onChange={handleFillInBlankChange}
                      placeholder="Enter your answer"
                      className={`bg-white dark:bg-gray-800 ${
                        showResults
                          ? fillInBlankAnswers[
                              item as keyof typeof fillInBlankAnswers
                            ].toLowerCase() ===
                            correctAnswers.fillInBlank[
                              item as keyof typeof correctAnswers.fillInBlank
                            ]
                            ? "border-green-500"
                            : "border-red-500"
                          : ""
                      }`}
                    />
                    {showResults &&
                      fillInBlankAnswers[
                        item as keyof typeof fillInBlankAnswers
                      ].toLowerCase() !==
                        correctAnswers.fillInBlank[
                          item as keyof typeof correctAnswers.fillInBlank
                        ] && (
                        <p className="text-red-500 mt-2">
                          Correct answer:{" "}
                          {
                            correctAnswers.fillInBlank[
                              item as keyof typeof correctAnswers.fillInBlank
                            ]
                          }
                        </p>
                      )}
                  </CardContent>
                </Card>
              ))}
              {renderWordScramble("classroom")}
              {renderWordScramble("artRoom")}
            </div>
          </section>
        );
      case "C - Chọn đáp án đúng (Choose the correct answer)":
        return (
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-pink-600 dark:text-pink-300">
              C - Chọn đáp án đúng (Choose the correct answer)
            </h2>
            <div className="space-y-4">
              {["library", "playground", "cafeteria"].map((item) => (
                <Card
                  key={item}
                  className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800"
                >
                  <CardHeader>
                    <CardTitle className="text-purple-700 dark:text-purple-300">
                      {item === "library"
                        ? "Where is the library?"
                        : item === "playground"
                        ? "Where are the students?"
                        : "Where is the cafeteria?"}
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
                          className="flex items-center space-x-2"
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
                        <p className="text-red-500 mt-2">
                          Correct answer:{" "}
                          {
                            correctAnswers.multipleChoice[
                              item as keyof typeof correctAnswers.multipleChoice
                            ]
                          }
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

  return (
    <ScrollArea className="h-full">
      <div className="container mx-auto p-4 bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-purple-900 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-600 dark:text-purple-300">
          TOPIC 2: PLACES (Các địa điểm/nơi chốn)
        </h1>
        {renderContent()}
        {!submenu.startsWith("A") && submenu !== "" && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-full"
            >
              Submit
            </Button>
          </div>
        )}
        {showResults && !submenu.startsWith("A") && (
          <p className="mt-4 text-center text-lg font-semibold text-purple-700 dark:text-purple-300">
            You got {correctCount} out of{" "}
            {Object.keys(correctAnswers.fillInBlank).length +
              Object.keys(correctAnswers.multipleChoice).length}{" "}
            correct.
          </p>
        )}
      </div>
    </ScrollArea>
  );
}
