import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import * as Dialog from "@radix-ui/react-dialog";
import craftClassVideo from "@/assets/videos/unit1/craft_class.mp4";
import bringVideo from "@/assets/videos/unit1/bring.mp4";
import differentVideo from "@/assets/videos/unit1/different.mp4";
import suppliesVideo from "@/assets/videos/unit1/supplies.mp4";
import projectsVideo from "@/assets/videos/unit1/project.mp4";
import excitedVideo from "@/assets/videos/unit1/excited.mp4";
import togetherVideo from "@/assets/videos/unit1/together.mp4";
import finishVideo from "@/assets/videos/unit1/finish.mp4";
import lookForVideo from "@/assets/videos/unit1/look_for.mp4";
import ruleVideo from "@/assets/videos/unit1/rule.mp4";
import newVideo from "@/assets/videos/unit1/new.mp4";
import byYourselfVideo from "@/assets/videos/unit1/by_myself.mp4";
import cau3 from "@/assets/videos/unit1/p42c3.mp4";
import cau4 from "@/assets/videos/unit1/p42c4.mp4";
import hiPhuongVideo from "@/assets/videos/unit1/hi_phuong.mp4";
import inOurCraftClassVideo from "@/assets/videos/unit1/in_our_craft_class.mp4";
import paperGlueScissorsVideo from "@/assets/videos/unit1/paper_glue_scissors.mp4";
import tapeStaplerVideo from "@/assets/videos/unit1/tape_stapler.mp4";
import excitedArtTogetherVideo from "@/assets/videos/unit1/excited_art_together.mp4";
import coloredPencilsPaintVideo from "@/assets/videos/unit1/colored_pencils_paint.mp4";
import greatTimeCreativeVideo from "@/assets/videos/unit1/great_time_creative.mp4";

export default function ReadingComprehension() {
  const [activeTab, setActiveTab] = useState("fill");
  const [fillAnswers, setFillAnswers] = useState({});
  const [chooseAnswers, setChooseAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Danh sách video tương ứng với các từ
  const wordVideos = {
    "craft class": craftClassVideo,
    bring: bringVideo,
    different: differentVideo,
    supplies: suppliesVideo,
    projects: projectsVideo,
    excited: excitedVideo,
    together: togetherVideo,
    finish: finishVideo,
    "look for": lookForVideo,
    rule: ruleVideo,
    new: newVideo,
    "by yourself": byYourselfVideo,
    cau3: cau3,
    cau4: cau4,
    "Hi, I'm Phuong.mp4": hiPhuongVideo,
    "In our craft class, we bring different supplies to.mp4": inOurCraftClassVideo,
    "I have some paper, glue, and scissors..mp4": paperGlueScissorsVideo,
    "My friend has some tape and a stapler..mp4": tapeStaplerVideo,
    "So we are excited about creating cool art together.mp4": excitedArtTogetherVideo,
    "We also need some colored pencils and paint to fin.mp4": coloredPencilsPaintVideo,
    "It’s a great time to be creative and help each o.mp4": greatTimeCreativeVideo,
  };

  // Đoạn văn với các từ có thể nhấp để xem video
  const paragraph = `
    Hi, I’m Phuong. ___ (1) our <span data-word="craft class" class="text-blue-500 cursor-pointer hover:underline">craft class</span>, 
    we <span data-word="bring" class="text-blue-500 cursor-pointer hover:underline">bring</span> 
    <span data-word="different" class="text-blue-500 cursor-pointer hover:underline">different</span> 
    <span data-word="supplies" class="text-blue-500 cursor-pointer hover:underline">supplies</span> 
    to make fun <span data-word="projects" class="text-blue-500 cursor-pointer hover:underline">projects</span>. 
    I have some paper, glue, and scissors. My friend has some ___ (2) and a stapler. 
    __ (3) we are <span data-word="excited" class="text-blue-500 cursor-pointer hover:underline">excited</span> 
    about creating cool art <span data-word="together" class="text-blue-500 cursor-pointer hover:underline">together</span>. 
    We also need some colored pencils and paint to <span data-word="finish" class="text-blue-500 cursor-pointer hover:underline">finish</span> 
    our work. It’s a ____ (4) time to be creative and help each other.
  `;

  // Câu hỏi điền vào chỗ trống
  const fillQuestions = [
    {
      question: "1. ___ our craft class, we bring different supplies to make fun projects.",
      options: ["in", "on", "at", "of"],
      answer: 0, // in
    },
    {
      question: "2. My friend has some ___ and a stapler.",
      options: ["calculators", "candy", "chalk", "tape"],
      answer: 3, // tape
    },
    {
      question: "3. ___ we are excited about creating cool art together.",
      options: ["But", "So", "Because", "Or"],
      answer: 1, // So
    },
    {
      question: "4. It’s a ____ time to be creative and help each other.",
      options: ["greatness", "greatly", "great", "greatful"],
      answer: 2, // great
    },
  ];

  // Câu hỏi chọn câu trả lời đúng
  const chooseQuestions = [
    {
      question: "1. What supplies does Phuong have for the craft project?",
      options: [
        "a. Tape and a stapler",
        "b. Paper, glue, and scissors",
        "c. Colored pencils and paint",
        "d. Only scissors",
      ],
      answer: 1, // b. Paper, glue, and scissors
    },
    {
      question: "2. Which of these is NOT mentioned as something Phuong or her friend has?",
      options: [
        "a. Paper",
        "b. Tape",
        "c. Markers",
        "d. Scissors",
      ],
      answer: 2, // c. Markers
    },
    {
      question: "<span data-word='cau3' class='text-blue-500 cursor-pointer hover:underline'>3. What is the main idea of the passage?</span>",
      options: [
        "a. Phuong and her friend make art together.",
        "b. Phuong <span data-word='look for' class='text-blue-500 cursor-pointer hover:underline'>looks for</span> more supplies.",
        "c. Phuong's friend does not like crafts.",
        "d. Phuong and her friend only use paper.",
      ],
      answer: 0, // a. Phuong and her friend make art together.
    },
    {
      question: "<span data-word='cau4' class='text-blue-500 cursor-pointer hover:underline'>4. What does the word \"creative\" mean in this passage?</span>",
      options: [
        "A. Following <span data-word='rule' class='text-blue-500 cursor-pointer hover:underline'>rules</span>",
        "B. Making <span data-word='new' class='text-blue-500 cursor-pointer hover:underline'>new</span> things",
        "C. Using only paper",
        "D. Working <span data-word='by yourself' class='text-blue-500 cursor-pointer hover:underline'>by yourself</span>",
      ],
      answer: 1, // B. Making new things
    },
  ];

  // Xử lý chọn đáp án cho phần điền vào chỗ trống
  const handleFillSelect = (index, optionIndex) => {
    setFillAnswers((prev) => ({
      ...prev,
      [index]: optionIndex,
    }));
  };

  // Xử lý chọn đáp án cho phần chọn câu trả lời đúng
  const handleChooseSelect = (index, optionIndex) => {
    setChooseAnswers((prev) => ({
      ...prev,
      [index]: optionIndex,
    }));
  };

  // Xử lý khi nhấn nút Submit
  const handleSubmit = () => {
    setShowAnswers(true);
    let correctCount = 0;

    // Kiểm tra phần điền vào chỗ trống
    fillQuestions.forEach((question, index) => {
      if (fillAnswers[index] === question.answer) {
        correctCount++;
      }
    });

    // Kiểm tra phần chọn câu trả lời đúng
    chooseQuestions.forEach((question, index) => {
      if (chooseAnswers[index] === question.answer) {
        correctCount++;
      }
    });

    setResult(`Bạn đã làm đúng ${correctCount} trên ${fillQuestions.length + chooseQuestions.length} câu.`);
  };

  // Xử lý khi nhấn nút Reset
  const handleReset = () => {
    setFillAnswers({});
    setChooseAnswers({});
    setResult(null);
    setShowAnswers(false);
  };

  // Xử lý khi click vào từ để hiển thị video
  const handleWordClick = (word) => {
    setSelectedVideo(wordVideos[word]);
  };

  // Đóng modal
  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-8 text-pink-600 dark:text-pink-300 border-b pb-4">
        D - LET’S PRACTICE READING COMPREHENSION TOGETHER!
      </h2>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex justify-center space-x-4">
          <TabsTrigger value="fill">Fill in the blank</TabsTrigger>
          <TabsTrigger value="choose">Choose the correct answer</TabsTrigger>
        </TabsList>

        <TabsContent value="fill">
          <Card>
            <CardContent className="p-4">
              <p className="text-lg font-semibold">Complete the paragraph:</p>
              <video src={selectedVideo} controls className="mt-4" />
              <p
                className="mt-4 text-gray-700"
                dangerouslySetInnerHTML={{ __html: paragraph }}
                onClick={(e) => {
                  if (e.target.dataset.word) {
                    handleWordClick(e.target.dataset.word);
                  }
                }}
              />
              <div className="mt-4 space-y-6">
                {fillQuestions.map((item, index) => (
                  <div key={index} className="flex flex-col space-y-2">
                    <p className="text-lg font-medium">{item.question}</p>
                    <div className="mt-2 space-y-2">
                      {item.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`w-full p-2 border rounded-md ${
                            fillAnswers[index] === optionIndex ? "bg-blue-200" : "hover:bg-gray-200"
                          }`}
                          onClick={() => handleFillSelect(index, optionIndex)}
                          disabled={showAnswers}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                    {showAnswers && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-bold">Đáp án: </span>
                          {item.options[item.answer]}
                        </p>
                        <p className="text-sm mt-1">
                          {fillAnswers[index] === item.answer ? (
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

              {/* Nút Submit và Reset */}
              <div className="mt-6 flex flex-col items-center space-y-2">
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

              {/* Thanh gạch ngang ở trên cùng */}
              <hr className="my-10 border-t border-gray-300" />

              {/* Phần dịch và video */}
              <div className="mt-8">
                <h3 className="text-2xl underline font-semibold mb-6">Translate:</h3>
                <div className="space-y-8">
                  {/* Cặp 1 */}
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg font-medium text-center">Hi, I’m Phuong.</p>
                    <video controls src={wordVideos["Hi, I'm Phuong.mp4"]} className="w-2/3 h-auto rounded-lg shadow-md" />
                  </div>
                  <hr className="w-1/3 mx-auto border-t border-gray-300" />

                  {/* Cặp 2 */}
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg font-medium text-center">In our craft class, we bring different supplies to make fun projects.</p>
                    <video controls src={wordVideos["In our craft class, we bring different supplies to.mp4"]} className="w-2/3 h-auto rounded-lg shadow-md" />
                  </div>
                  <hr className="w-1/3 mx-auto border-t border-gray-300" />

                  {/* Cặp 3 */}
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg font-medium text-center">I have some paper, glue, and scissors.</p>
                    <video controls src={wordVideos["I have some paper, glue, and scissors..mp4"]} className="w-2/3 h-auto rounded-lg shadow-md" />
                  </div>
                  <hr className="w-1/3 mx-auto border-t border-gray-300" />

                  {/* Cặp 4 */}
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg font-medium text-center">My friend has some tape and a stapler.</p>
                    <video controls src={wordVideos["My friend has some tape and a stapler..mp4"]} className="w-2/3 h-auto rounded-lg shadow-md" />
                  </div>
                  <hr className="w-1/3 mx-auto border-t border-gray-300" />

                  {/* Cặp 5 */}
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg font-medium text-center">So we are excited about creating cool art together.</p>
                    <video controls src={wordVideos["So we are excited about creating cool art together.mp4"]} className="w-2/3 h-auto rounded-lg shadow-md" />
                  </div>
                  <hr className="w-1/3 mx-auto border-t border-gray-300" />

                  {/* Cặp 6 */}
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg font-medium text-center">We also need some colored pencils and paint to finish our work.</p>
                    <video controls src={wordVideos["We also need some colored pencils and paint to fin.mp4"]} className="w-2/3 h-auto rounded-lg shadow-md" />
                  </div>
                  <hr className="w-1/3 mx-auto border-t border-gray-300" />

                  {/* Cặp 7 */}
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg font-medium text-center">It’s a great time to be creative and help each other.</p>
                    <video controls src={wordVideos["It’s a great time to be creative and help each o.mp4"]} className="w-2/3 h-auto rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="choose">
          <Card>
            <CardContent className="p-4">
              <p className="text-lg font-semibold">Choose the correct answer:</p>
              <div className="mt-4 space-y-6">
                {chooseQuestions.map((item, index) => (
                  <div key={index} className="flex flex-col space-y-2">
                    <u className="text-lg font-medium">
                      <span
                        dangerouslySetInnerHTML={{ __html: item.question }}
                        onClick={(e) => {
                          if (e.target.dataset.word) {
                            handleWordClick(e.target.dataset.word);
                          }
                        }}
                      />
                    </u>
                    <div className="mt-2 space-y-2">
                      {item.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          className={`w-full p-2 border rounded-md ${
                            chooseAnswers[index] === optionIndex ? "bg-blue-200" : "hover:bg-gray-200"
                          }`}
                          onClick={() => handleChooseSelect(index, optionIndex)}
                          disabled={showAnswers}
                        >
                          <span
                            dangerouslySetInnerHTML={{ __html: option }}
                            onClick={(e) => {
                              if (e.target.dataset.word) {
                                handleWordClick(e.target.dataset.word);
                              }
                            }}
                          />
                        </button>
                      ))}
                    </div>
                    {showAnswers && (
                      <div className="mt-2">
                        <p className="text-sm text-gray-600">
                          <span className="font-bold">Đáp án: </span>
                          <span
                            dangerouslySetInnerHTML={{ __html: item.options[item.answer] }}
                            onClick={(e) => {
                              if (e.target.dataset.word) {
                                handleWordClick(e.target.dataset.word);
                              }
                            }}
                          />
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

              {/* Nút Submit và Reset */}
              <div className="mt-6 flex flex-col items-center space-y-2">
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

              {/* Thanh gạch ngang ở trên cùng */}
              <hr className="my-10 border-t border-gray-300" />

              {/* Phần dịch và video */}
              <div className="mt-8">
                <h3 className="text-2xl underline font-semibold mb-6">Translate:</h3>
                <div className="space-y-8">
                  {/* Cặp 1 */}
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg font-medium text-center">Hi, I’m Phuong.</p>
                    <video controls src={wordVideos["Hi, I'm Phuong.mp4"]} className="w-2/3 h-auto rounded-lg shadow-md" />
                  </div>
                  <hr className="w-1/3 mx-auto border-t border-gray-300" />

                  {/* Cặp 2 */}
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg font-medium text-center">In our craft class, we bring different supplies to make fun projects.</p>
                    <video controls src={wordVideos["In our craft class, we bring different supplies to.mp4"]} className="w-2/3 h-auto rounded-lg shadow-md" />
                  </div>
                  <hr className="w-1/3 mx-auto border-t border-gray-300" />

                  {/* Cặp 3 */}
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg font-medium text-center">I have some paper, glue, and scissors.</p>
                    <video controls src={wordVideos["I have some paper, glue, and scissors..mp4"]} className="w-2/3 h-auto rounded-lg shadow-md" />
                  </div>
                  <hr className="w-1/3 mx-auto border-t border-gray-300" />

                  {/* Cặp 4 */}
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg font-medium text-center">My friend has some tape and a stapler.</p>
                    <video controls src={wordVideos["My friend has some tape and a stapler..mp4"]} className="w-2/3 h-auto rounded-lg shadow-md" />
                  </div>
                  <hr className="w-1/3 mx-auto border-t border-gray-300" />

                  {/* Cặp 5 */}
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg font-medium text-center">So we are excited about creating cool art together.</p>
                    <video controls src={wordVideos["So we are excited about creating cool art together.mp4"]} className="w-2/3 h-auto rounded-lg shadow-md" />
                  </div>
                  <hr className="w-1/3 mx-auto border-t border-gray-300" />

                  {/* Cặp 6 */}
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg font-medium text-center">We also need some colored pencils and paint to finish our work.</p>
                    <video controls src={wordVideos["We also need some colored pencils and paint to fin.mp4"]} className="w-2/3 h-auto rounded-lg shadow-md" />
                  </div>
                  <hr className="w-1/3 mx-auto border-t border-gray-300" />

                  {/* Cặp 7 */}
                  <div className="flex flex-col items-center space-y-4">
                    <p className="text-lg font-medium text-center">It’s a great time to be creative and help each other.</p>
                    <video controls src={wordVideos["It’s a great time to be creative and help each o.mp4"]} className="w-2/3 h-auto rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Modal hiển thị video */}
      <Dialog.Root open={!!selectedVideo} onOpenChange={closeModal}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <Dialog.Content className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl mx-4">
              <div className="flex justify-center">
                <video controls src={selectedVideo} className="w-full h-auto max-h-[80vh]" />
              </div>
              <Dialog.Close className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                &times;
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}