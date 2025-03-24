import { useState } from "react";
import c21 from "@/assets/imgs/unit1/c21.png";
import c22 from "@/assets/imgs/unit1/c22.png";
import c23 from "@/assets/imgs/unit1/c23.png";
import c24 from "@/assets/imgs/unit1/c24.png";
import c25 from "@/assets/imgs/unit1/c25.png";
import human from "@/assets/imgs/human.png";
import question from "@/assets/imgs/1.png";
import question1 from "@/assets/imgs/2.png";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FillQuestion {
  image: string;
  sentence: string;
  answer: string[];
}

interface ChooseQuestion {
  image: string;
  question: string;
  options: string[];
  answer: number;
}

interface FillAnswers {
  [key: string]: string;
}

interface ChooseAnswers {
  [key: string]: number;
}

export default function EnglishExercise() {
  const [activeTab, setActiveTab] = useState<string>("fill");
  const [fillAnswers, setFillAnswers] = useState<FillAnswers>({});
  const [chooseAnswers, setChooseAnswers] = useState<ChooseAnswers>({});
  const [fillResult, setFillResult] = useState<string | null>(null);
  const [chooseResult, setChooseResult] = useState<string | null>(null);
  const [showFillAnswers, setShowFillAnswers] = useState<boolean>(false);
  const [showChooseAnswers, setShowChooseAnswers] = useState<boolean>(false);
  
  const fillQuestions: FillQuestion[] = [
    {
      image: human,
      sentence: "They __ (not have) __ (any / some) chalk and glue.",
      answer: ["dont have", "any"],
    },
    {
      image: question,
      sentence: '"Do you __ (have) __ (any/some) calculators?"',
      answer: ["have", "any"],
    },
    {
      image: question1,
      sentence: "Mai __ (have) __ (any/some) __ in her pencil case.",
      answer: ["has", "some", "colored pencils"],
    },
  ];
  
  const chooseQuestions: ChooseQuestion[] = [
    {
      image: c21,
      question: "What does she have?",
      options: [
        "She has some paper.",
        "She doesn't have any paper.",
        "She have some paper.",
        "She don't have any paper.",
      ],
      answer: 0, // a. She has some paper.
    },
    {
      image: c22,
      question: "A: _______________  -> B: No, I don't.",
      options: [
        "Do you have some rubber bands?",
        "Do they have any rubber bands?",
        "Do you have any rubber bands?",
        "Do you has any rubber bands?",
      ],
      answer: 2, // c. Do you have any rubber bands?
    },
    {
      image: c23,
      question: "", // No question, only image
      options: [
        "Phong and his friend doesn't have any string.",
        "Phong and his friend don't have any string.",
        "Phong and his friend don't have some string.",
        "Phong and his friend doesn't have some string.",
      ],
      answer: 1, // b. Phong and his friend don't have any string.
    },
    {
      image: c24,
      question: "", // No question, only image
      options: [
        "Our teacher has some magnets and staplers.",
        "Our teacher has any magnets and paint brushes.",
        "Our teacher has some magnets and paint brushes.",
        "Our teacher has some magnets and push pins.",
      ],
      answer: 3, 
    },
    {
      image: c25,
      question: "A: Does she have any scissors? ->B: _____________________",
      options: [
        "Yes, she does.",
        "No, she does not.",
        "Yes, she doesn't.",
        "No, she do.",
      ],
      answer: 1, 
    },
  ];

  const handleFillInput = (index: number, subIndex: number, value: string) => {
    setFillAnswers((prev) => ({
      ...prev,
      [`${index}-${subIndex}`]: value,
    }));
  };

  const handleChooseSelect = (index: number, optionIndex: number) => {
    setChooseAnswers((prev) => ({
      ...prev,
      [index]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    if (activeTab === "fill") {
      setShowFillAnswers(true);
      let correctCount = 0;
      fillQuestions.forEach((question, qIndex) => {
        const isCorrect = question.answer.every((ans, aIndex) => {
          const userAnswer = fillAnswers[`${qIndex}-${aIndex}`]?.trim().toLowerCase();
          return userAnswer === ans.toLowerCase();
        });
        if (isCorrect) correctCount++;
      });
      setFillResult(`You have answered ${correctCount} out of ${fillQuestions.length} questions correctly.`);
    } else if (activeTab === "choose") {
      setShowChooseAnswers(true);
      let correctCount = 0;
      chooseQuestions.forEach((question, index) => {
        if (chooseAnswers[index] === question.answer) {
          correctCount++;
        }
      });
      setChooseResult(`You have answered ${correctCount} out of ${chooseQuestions.length} questions correctly.`);
    }
  };

  const handleReset = () => {
    if (activeTab === "fill") {
      setFillAnswers({});
      setFillResult(null);
      setShowFillAnswers(false);
    } else if (activeTab === "choose") {
      setChooseAnswers({});
      setChooseResult(null);
      setShowChooseAnswers(false);
    }
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-8 text-pink-600 dark:text-pink-300 border-b pb-4">
        C - LET'S REVIEW GRAMMAR TOGETHER!
      </h2>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex justify-center space-x-4">
          <TabsTrigger value="fill">Fill in the blank</TabsTrigger>
          <TabsTrigger value="choose">Choose the correct answer</TabsTrigger>
        </TabsList>

        <TabsContent value="fill">
          <Card>
            <CardContent className="p-4">
              <p className="text-lg font-semibold">Complete the sentences:</p>
              <div className="mt-4 space-y-6">
                {fillQuestions.map((item, index) => (
                  <div key={index} className="flex flex-col space-y-2">
                    <img src={item.image} alt={`Image ${index + 1}`} className="w-[300px] h-[300px] rounded-lg" />

                    <p className="mt-2 text-lg font-medium">
                      <span className="font-bold">Question {index + 1}: </span>
                      {item.sentence.split("__").map((part, i) => (
                        <span key={i}>
                          {part}
                          {i < item.answer.length && (
                            <input
                              type="text"
                              className="border-b-2 border-gray-500 text-center w-20 mx-1"
                              placeholder="?"
                              onChange={(e) => handleFillInput(index, i, e.target.value)}
                              disabled={showFillAnswers}
                              value={fillAnswers[`${index}-${i}`] || ""}
                            />
                          )}
                        </span>
                      ))}
                    </p>
                    {showFillAnswers && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-bold">Answer: </span>
                          {item.answer.join(" - ")}
                        </p>
                        <p className="text-sm mt-1">
                          {item.answer.every((ans, aIndex) => fillAnswers[`${index}-${aIndex}`]?.trim().toLowerCase() === ans.toLowerCase()) ? (
                            <span className="text-green-600">✅ Correct</span>
                          ) : (
                            <span className="text-red-600">❌ Incorrect</span>
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="choose">
          <Card>
            <CardContent className="p-4">
              <p className="text-lg font-semibold">Select the correct answer:</p>
              <div className="mt-4 space-y-6">
                {chooseQuestions.map((item, index) => (
                  <div key={index} className="flex flex-col space-y-2">
                    <img src={item.image} alt="question" className="rounded-lg w-[300px] h-[300px]" />
                    <p className="text-lg font-medium">
                      <span className="font-bold">Question {index + 1}: </span>
                      {item.question}
                    </p>
                    <div className="mt-2 space-y-2">
                      {item.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`w-full p-2 border rounded-md ${
                            chooseAnswers[index] === optionIndex ? "bg-blue-200" : "hover:bg-gray-200"
                          }`}
                          onClick={() => handleChooseSelect(index, optionIndex)}
                          disabled={showChooseAnswers}
                        >
                          {String.fromCharCode(97 + optionIndex)}. {option}
                        </button>
                      ))}
                    </div>
                    {showChooseAnswers && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-bold">Answer: </span>
                          {String.fromCharCode(97 + item.answer)}. {item.options[item.answer]}
                        </p>
                        <p className="text-sm mt-1">
                          {chooseAnswers[index] === item.answer ? (
                            <span className="text-green-600">✅ Correct</span>
                          ) : (
                            <span className="text-red-600">❌ Incorrect</span>
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <div className="mt-4 flex flex-col items-center space-y-2">
          <div className="flex space-x-2">
            <Button onClick={handleSubmit} className="bg-blue-500 text-white px-6 py-2 rounded-md">
              Submit
            </Button>
            <Button onClick={handleReset} className="bg-gray-500 text-white px-6 py-2 rounded-md">
              Reset
            </Button>
          </div>
          {activeTab === "fill" && fillResult && <p className="mt-2 text-lg font-semibold text-green-600">{fillResult}</p>}
          {activeTab === "choose" && chooseResult && <p className="mt-2 text-lg font-semibold text-green-600">{chooseResult}</p>}
        </div>
      </Tabs>
    </div>
  );
}