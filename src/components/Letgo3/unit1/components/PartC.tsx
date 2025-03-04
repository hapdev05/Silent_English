import { useState } from "react";
import c21 from "@/assets/imgs/unit1/c21.png";
import c22 from "@/assets/imgs/unit1/c22.png";
import c23 from "@/assets/imgs/unit1/c23.png";
import c24 from "@/assets/imgs/unit1/c24.png";
import c25 from "@/assets/imgs/unit1/c25.png";
import c11 from "@/assets/videos/unit1/c11.mp4";
import c12 from "@/assets/videos/unit1/c12.mp4";
import c13 from "@/assets/videos/unit1/c13.mp4";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function EnglishExercise() {
  const [activeTab, setActiveTab] = useState("fill");
  const [fillAnswers, setFillAnswers] = useState({});
  const [chooseAnswers, setChooseAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false); // State để hiển thị đáp án
  const fillQuestions = [
    {
      video: c11,
      sentence: "They __ (not have) __ (any / some) chalk and glue.",
      answer: ["dont have", "any"],
    },
    {
      video: c12,
      sentence: '"Do you __ (have) __ (any/some) calculators?"',
      answer: ["have", "any"],
    },
    {
      video: c13,
      sentence: "Mai __ (have) __ (any/some) __ in her pencil case.",
      answer: ["has", "some", "colored pencils"],
    },
  ];
  
  const chooseQuestions = [
    {
      image: c21,
      question: "What does she have?",
      options: [
        "She has some paper.",
        "She doesn't have any paper.",
        "She have some paper.",
        "She don’t have any paper.",
      ],
      answer: 0, // a. She has some paper.
    },
    {
      image: c22,
      question: "A: _______________ B: No, I don’t.",
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
      question: "", // Không có câu hỏi, chỉ có hình ảnh
      options: [
        "Phong and his friend doesn’t have any string.",
        "Phong and his friend don’t have any string.",
        "Phong and his friend don’t have some string.",
        "Phong and his friend doesn’t have some string.",
      ],
      answer: 1, // b. Phong and his friend don’t have any string.
    },
    {
      image: c24,
      question: "", // Không có câu hỏi, chỉ có hình ảnh
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
      question: "A: Does she have any scissors? B: ______",
      options: [
        "Yes, she does.",
        "No, she does not.",
        "Yes, she doesn’t.",
        "No, she do.",
      ],
      answer: 1, 
    },
  ];

  const handleFillInput = (index, subIndex, value) => {
    setFillAnswers((prev) => ({
      ...prev,
      [`${index}-${subIndex}`]: value,
    }));
  };

  const handleChooseSelect = (index, optionIndex) => {
    setChooseAnswers((prev) => ({
      ...prev,
      [index]: optionIndex,
    }));
  };

  const handleSubmit = () => {
    setShowAnswers(true); // Hiển thị đáp án sau khi nhấn Submit
    let correctCount = 0;

    // Kiểm tra phần Fill in the blank
    fillQuestions.forEach((question, qIndex) => {
      const isCorrect = question.answer.every((ans, aIndex) => {
        const userAnswer = fillAnswers[`${qIndex}-${aIndex}`]?.trim().toLowerCase();
        return userAnswer === ans.toLowerCase();
      });
      if (isCorrect) correctCount++;
    });

    // Kiểm tra phần Choose the correct answer
    chooseQuestions.forEach((question, index) => {
      if (chooseAnswers[index] === question.answer) {
        correctCount++;
      }
    });

    setResult(`Bạn đã làm đúng ${correctCount} trên ${fillQuestions.length + chooseQuestions.length} câu.`);
  };

  // Hàm reset để làm lại bài tập
  const handleReset = () => {
    setFillAnswers({});
    setChooseAnswers({});
    setResult(null);
    setShowAnswers(false);
  };

  return (
    <div className="">
        <h2 className="text-2xl font-semibold mb-8 text-pink-600 dark:text-pink-300 border-b pb-4">
        C - LET’S REVIEW GRAMMAR TOGETHER! (Kiểm tra lại ngữ pháp thôi nào!)
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
                    <video controls className="w-full rounded-lg">
                      <source src={item.video} type="video/mp4" />
                    </video>

                    <p className="mt-2 text-lg font-medium">
                      <span className="font-bold">Câu {index + 1}: </span>
                      {item.sentence.split("__").map((part, i) => (
                        <span key={i}>
                          {part}
                          {i < item.answer.length && (
                            <input
                              type="text"
                              className="border-b-2 border-gray-500 text-center w-20 mx-1"
                              placeholder="?"
                              onChange={(e) => handleFillInput(index, i, e.target.value)}
                              disabled={showAnswers} // Vô hiệu hóa input sau khi Submit
                              value={fillAnswers[`${index}-${i}`] || ""} // Hiển thị giá trị đã điền
                            />
                          )}
                        </span>
                      ))}
                    </p>
                    {showAnswers && ( // Hiển thị đáp án và kết quả đúng/sai
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-bold">Đáp án: </span>
                          {item.answer.join(" - ")}
                        </p>
                        <p className="text-sm mt-1">
                          {item.answer.every((ans, aIndex) => fillAnswers[`${index}-${aIndex}`]?.trim().toLowerCase() === ans.toLowerCase()) ? (
                            <span className="text-green-600">✅ Đúng</span>
                          ) : (
                            <span className="text-red-600">❌ Sai</span>
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
                    <img src={item.image} alt="question" className="w-full rounded-lg" />
                    <p className="text-lg font-medium">
                      <span className="font-bold">Câu {index + 1}: </span>
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
                          disabled={showAnswers} // Vô hiệu hóa nút sau khi Submit
                        >
                          {String.fromCharCode(97 + optionIndex)}. {option}
                        </button>
                      ))}
                    </div>
                    {showAnswers && ( // Hiển thị đáp án và kết quả đúng/sai
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-bold">Đáp án: </span>
                          {String.fromCharCode(97 + item.answer)}. {item.options[item.answer]}
                        </p>
                        <p className="text-sm mt-1">
                          {chooseAnswers[index] === item.answer ? (
                            <span className="text-green-600">✅ Đúng</span>
                          ) : (
                            <span className="text-red-600">❌ Sai</span>
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
          {result && <p className="mt-2 text-lg font-semibold text-green-600">{result}</p>}
        </div>
      </Tabs>
    </div>
  );
}