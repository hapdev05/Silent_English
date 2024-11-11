import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import React, { useState, useEffect } from "react";

type WordType = "classroom" | "artRoom";

interface LetterCell {
  letter: string;
  id: number;
}

export default function Unit2({ submenu }: { submenu: string }) {
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
      case "A - Từ vựng (VOCABULARY)":
        return (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-pink-600 dark:text-pink-300">
              A - Từ vựng (VOCABULARY)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { word: "music room", translation: "phòng âm nhạc" },
                { word: "science room", translation: "phòng khoa học" },
                { word: "gym", translation: "phòng thể dục" },
                { word: "classroom", translation: "phòng học" },
                { word: "art room", translation: "phòng nghệ thuật" },
                { word: "lunchroom", translation: "phòng ăn trưa" },
                { word: "office", translation: "văn phòng" },
                { word: "library", translation: "thư viện" },
              ].map((item) => (
                <Card
                  key={item.word}
                  className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 hover:shadow-lg transition-shadow duration-200"
                >
                  <CardContent className="p-4">
                    <p className="text-center font-semibold text-purple-700 dark:text-purple-300">
                      {item.word}
                    </p>
                    <p className="text-center text-sm text-pink-600 dark:text-pink-300">
                      {item.translation}
                    </p>
                    <div className="w-full h-32 bg-white dark:bg-gray-700 rounded-md mt-2 shadow-inner"></div>
                    <div className="w-full h-8 bg-gray-200 dark:bg-gray-600 rounded-md mt-2 shadow-inner"></div>
                  </CardContent>
                </Card>
              ))}
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
              Welcome to Unit 2: Places
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
          UNIT 2: PLACES
        </h1>
        {renderContent()}
        {submenu !== "A" && (
          <Button
            onClick={handleSubmit}
            className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-200 transform hover:scale-105"
          >
            Submit
          </Button>
        )}
        {showResults && (
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
