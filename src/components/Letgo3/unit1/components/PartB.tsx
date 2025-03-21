import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"
import { AlertCircle, CheckCircle, RefreshCw } from "lucide-react"
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import stapler from "../../../../assets/imgs/stapler.jpg"
import paintbrush from "../../../../assets/imgs/paintbrush.jpg"
import paint from "../../../../assets/imgs/paint.png"
import ribbon from "../../../../assets/imgs/ribbon.png"
import popcorn from "../../../../assets/imgs/popcorn.png"
import crackers from "../../../../assets/imgs/crackers.png"
import chalk from "../../../../assets/imgs/chalk.jpg"
import peanuts from "../../../../assets/imgs/peanuts.png"
import paper from "../../../../assets/imgs/paper.png"
import string from "../../../../assets/imgs/string.png"
import calculator from "../../../../assets/imgs/calculator.jpg"
import scissors from "../../../../assets/imgs/scissors.png"
import coloredPencil from "../../../../assets/imgs/coloredpencil.jpeg"
import rubberBand from "../../../../assets/imgs/rubber.jpg"
import potatoChips from "../../../../assets/imgs/potato.png"
// Import videos for questions
import foodTvVideo from "../../../../assets/videos/food-tv.mp4"
import craftSuppliesVideo from "../../../../assets/videos/craft-supplies.mp4"
import calculatorVideo from "../../../../assets/videos/calculator.mp4"
import attachPaperVideo from "../../../../assets/videos/attach-paper.mp4"

// Define types for state objects
type DragDropAnswersType = {
  [key: string]: string[]
}

type FillInBlankAnswersType = {
  stapler: string;
  paintbrush: string;
  paint: string;
  ribbon: string;
  popcorn: string;
  crackers: string;
  chalk: string;
  peanuts: string;
  paper: string;
  string: string;
}

type ArrangeLettersItemsType = "calculator" | "scissors" | "coloredPencil" | "rubberBand" | "potatoChips";

type ArrangeLettersAnswersType = {
  [key in ArrangeLettersItemsType]: string[]
}

type ScrambledLettersType = {
  [key in ArrangeLettersItemsType]: string[]
}

type CorrectAnswersType = {
  fillInBlank: FillInBlankAnswersType;
  dragDrop: {
    [key: string]: string[]
  };
  arrangeLetters: {
    [key in ArrangeLettersItemsType]: string
  };
  scrambledWords: {
    [key in ArrangeLettersItemsType]: string
  };
}

type QuestionVideosType = {
  [key: string]: string
}

const PartB = () => {
  const [showResults, setShowResults] = useState(false)
  const [score, setScore] = useState(0)
  const [activeTab, setActiveTab] = useState("complete-words")
  const [dragDropAnswers, setDragDropAnswers] = useState<DragDropAnswersType>({"1": [], "2": [], "3": [], "4": []})
  const [availableWords, setAvailableWords] = useState(["candy", "tape", "magnet", "glue", "popcorn", "scissors", "crackers", "T-shirt", "calculator", "push pin"])
  const [showVideo, setShowVideo] = useState<string | null>(null)

  const questionVideos: QuestionVideosType = {
    "1": foodTvVideo,
    "2": craftSuppliesVideo,
    "3": calculatorVideo,
    "4": attachPaperVideo
  }

  const [fillInBlankAnswers, setFillInBlankAnswers] = useState<FillInBlankAnswersType>({
    stapler: "",
    paintbrush: "",
    paint: "",
    ribbon: "",
    popcorn: "",
    crackers: "",
    chalk: "",
    peanuts: "",
    paper: "",
    string: "",
  })

  // State for arranging letters
  const [arrangeLettersAnswers, setArrangeLettersAnswers] = useState<ArrangeLettersAnswersType>({
    calculator: [],
    scissors: [],
    coloredPencil: [],
    rubberBand: [],
    potatoChips: [],
  })

  // State for scrambled letters
  const [scrambledLetters, setScrambledLetters] = useState<ScrambledLettersType>({
    calculator: [],
    scissors: [],
    coloredPencil: [],
    rubberBand: [],
    potatoChips: [],
  })

  const handleFillInBlankChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFillInBlankAnswers(prev => ({
      ...prev,
      [name]: value
    }) as FillInBlankAnswersType)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const { source, destination } = result;
    
    if (source.droppableId === 'wordBank' && destination.droppableId !== 'wordBank') {
      // Moving from word bank to an answer slot
      const newAvailableWords = [...availableWords];
      const [removed] = newAvailableWords.splice(source.index, 1);
      
      const newDragDropAnswers = {...dragDropAnswers};
      newDragDropAnswers[destination.droppableId] = [...(newDragDropAnswers[destination.droppableId] || []), removed];
      
      setAvailableWords(newAvailableWords);
      setDragDropAnswers(newDragDropAnswers);
    } else if (source.droppableId !== 'wordBank' && destination.droppableId === 'wordBank') {
      // Moving back to word bank
      const sourceAnswers = [...dragDropAnswers[source.droppableId]];
      const [removed] = sourceAnswers.splice(source.index, 1);
      
      setAvailableWords([...availableWords, removed]);
      setDragDropAnswers({
        ...dragDropAnswers,
        [source.droppableId]: sourceAnswers
      });
    }
  };

  const correctAnswers: CorrectAnswersType = {
    fillInBlank: {
      stapler: "stapler",
      paintbrush: "paint brush",
      paint: "paint",
      ribbon: "ribbon",
      popcorn: "popcorn",
      crackers: "crackers",
      chalk: "chalk",
      paper: "paper",
      peanuts: "peanuts",
      string: "string",
    },
    dragDrop: {
      "1": ["candy", "popcorn", "crackers"],
      "2": ["tape", "glue", "scissors"],
      "3": ["calculator"],
      "4": ["push pin", "magnet"]
    },
    arrangeLetters: {
      calculator: "calculator",
      scissors: "scissors",
      coloredPencil: "colored pencil",
      rubberBand: "rubber band",
      potatoChips: "potato chips",
    },
    scrambledWords: {
      calculator: "tacluactor",
      scissors: "sosicras",
      coloredPencil: "ncloodpeecil",
      rubberBand: "bubnerdrab",
      potatoChips: "hoptostaci",
    },
  }

  // Initialize scrambled letters
  useEffect(() => {
    const initialScrambledLetters: ScrambledLettersType = {
      calculator: [],
      scissors: [],
      coloredPencil: [],
      rubberBand: [],
      potatoChips: [],
    }

    const initialArrangeLettersAnswers: ArrangeLettersAnswersType = {
      calculator: [],
      scissors: [],
      coloredPencil: [],
      rubberBand: [],
      potatoChips: [],
    }

    Object.keys(correctAnswers.arrangeLetters).forEach((key) => {
      const itemKey = key as ArrangeLettersItemsType;
      const word = correctAnswers.arrangeLetters[itemKey];
      // Convert word to array of letters and shuffle
      const letters = word.split("").sort(() => Math.random() - 0.5);
      initialScrambledLetters[itemKey] = letters;
      initialArrangeLettersAnswers[itemKey] = [];
    });

    setScrambledLetters(initialScrambledLetters);
    setArrangeLettersAnswers(initialArrangeLettersAnswers);
  }, []);

  // Handle clicking on a letter in the scrambled area
  const handleLetterClick = (item: ArrangeLettersItemsType, letterIndex: number) => {
    if (showResults) return;

    const letter = scrambledLetters[item][letterIndex];

    // Create a copy of scrambled letters and remove the selected letter
    const newScrambledLetters = { ...scrambledLetters };
    newScrambledLetters[item] = [
      ...newScrambledLetters[item].slice(0, letterIndex),
      ...newScrambledLetters[item].slice(letterIndex + 1),
    ];

    // Add the letter to the answer array
    const newArrangeLettersAnswers = { ...arrangeLettersAnswers };
    newArrangeLettersAnswers[item] = [
      ...newArrangeLettersAnswers[item],
      letter,
    ];

    setScrambledLetters(newScrambledLetters);
    setArrangeLettersAnswers(newArrangeLettersAnswers);
  };

  // Handle clicking on a letter in the answer area to remove it
  const handleAnswerLetterClick = (item: ArrangeLettersItemsType, letterIndex: number) => {
    if (showResults) return;

    const letter = arrangeLettersAnswers[item][letterIndex];

    // Create a copy of the answer array and remove the selected letter
    const newArrangeLettersAnswers = { ...arrangeLettersAnswers };
    newArrangeLettersAnswers[item] = [
      ...newArrangeLettersAnswers[item].slice(0, letterIndex),
      ...newArrangeLettersAnswers[item].slice(letterIndex + 1),
    ];

    // Add the letter back to the scrambled letters array
    const newScrambledLetters = { ...scrambledLetters };
    newScrambledLetters[item] = [
      ...newScrambledLetters[item],
      letter,
    ];

    setArrangeLettersAnswers(newArrangeLettersAnswers);
    setScrambledLetters(newScrambledLetters);
  };

  // Check answers and calculate score
  const handleSubmit = () => {
    let correctCount = 0;
    if (activeTab === "complete-words") {
      // Count correct answers for fill-in-the-blank
      Object.keys(fillInBlankAnswers).forEach((key) => {
        const typedKey = key as keyof FillInBlankAnswersType;
        if (
          fillInBlankAnswers[typedKey].toLowerCase() ===
          correctAnswers.fillInBlank[typedKey]
        ) {
          correctCount++;
        }
      });
    } else if (activeTab === "arrange-letters") {
      // Count correct answers for letter arrangement
      Object.keys(arrangeLettersAnswers).forEach((key) => {
        const typedKey = key as ArrangeLettersItemsType;
        const userAnswer = arrangeLettersAnswers[typedKey].join("");
        if (
          userAnswer.toLowerCase() ===
          correctAnswers.arrangeLetters[typedKey].toLowerCase()
        ) {
          correctCount++;
        }
      });
    } else if (activeTab === "drag-drop") {
      // Count correct answers for drag-and-drop
      Object.keys(dragDropAnswers).forEach((key) => {
        if (JSON.stringify(dragDropAnswers[key]) === JSON.stringify(correctAnswers.dragDrop[key])) {
          correctCount++;
        }
      });
    }

    setScore(correctCount);
    setShowResults(true);
  };

  // Reset function for starting over
  const handleReset = () => {
    setShowResults(false);
    setScore(0);

    if (activeTab === "complete-words") {
      setFillInBlankAnswers({
        stapler: "",
        paintbrush: "",
        paint: "",
        ribbon: "",
        popcorn: "",
        crackers: "",
        chalk: "",
        peanuts: "",
        paper: "",
        string: "",
      });
    } else if (activeTab === "arrange-letters") {
      // Reset letter arrangement
      const initialScrambledLetters: ScrambledLettersType = {
        calculator: [],
        scissors: [],
        coloredPencil: [],
        rubberBand: [],
        potatoChips: [],
      };
      
      const initialArrangeLettersAnswers: ArrangeLettersAnswersType = {
        calculator: [],
        scissors: [],
        coloredPencil: [],
        rubberBand: [],
        potatoChips: [],
      };

      Object.keys(correctAnswers.arrangeLetters).forEach((key) => {
        const typedKey = key as ArrangeLettersItemsType;
        const word = correctAnswers.arrangeLetters[typedKey];
        // Convert word to array of letters and shuffle
        const letters = word.split("").sort(() => Math.random() - 0.5);
        initialScrambledLetters[typedKey] = letters;
        initialArrangeLettersAnswers[typedKey] = [];
      });

      setScrambledLetters(initialScrambledLetters);
      setArrangeLettersAnswers(initialArrangeLettersAnswers);
    } else if (activeTab === "drag-drop") {
      // Reset drag-and-drop
      setDragDropAnswers({"1": [], "2": [], "3": [], "4": []});
      setAvailableWords(["candy", "tape", "magnet", "glue", "popcorn", "scissors", "crackers", "T-shirt", "calculator", "push pin"]);
    }
  };

  // Shuffle letters function
  const handleShuffleLetters = (item: ArrangeLettersItemsType) => {
    if (showResults) return;

    const letters = [...scrambledLetters[item]];
    const shuffledLetters = letters.sort(() => Math.random() - 0.5);

    setScrambledLetters({
      ...scrambledLetters,
      [item]: shuffledLetters,
    });
  };

  const fillInBlankItems = [
    "stapler",
    "paintbrush",
    "paint",
    "ribbon",
    "popcorn",
    "crackers",
    "chalk",
    "peanuts",
    "paper",
    "string",
  ];
  
  const arrangeLettersItems: ArrangeLettersItemsType[] = ["calculator", "scissors", "coloredPencil", "rubberBand", "potatoChips"];
 
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8 text-pink-600 dark:text-pink-300 border-b pb-4">
      B - LET’S REVIEW VOCABULARY TOGETHER!
      </h2>

      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg w-[80vw] max-w-4xl">
            <div className="flex justify-end mb-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowVideo(null)}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                ✕
              </Button>
            </div>
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <video
                src={showVideo}
                className="absolute inset-0 w-full h-full"
                controls
                autoPlay
              />
            </div>
          </div>
        </div>
      )}

      <Tabs
        defaultValue="complete-words"
        className="mb-8"
        onValueChange={(value) => {
          setActiveTab(value)
          setShowResults(false)
          setScore(0)
        }}
      >
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="complete-words">I. Complete words</TabsTrigger>
          <TabsTrigger value="arrange-letters">II. Arrange the letters</TabsTrigger>
          <TabsTrigger value="drag-drop">III. Arrange the words</TabsTrigger>
        </TabsList>

        <div className="mt-6 mb-6 flex gap-4">
          <Button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-medium"
            disabled={showResults}
          >
            Submit
          </Button>

          {showResults && (
            <Button
              onClick={handleReset}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg text-lg font-medium"
            >
              Reset
            </Button>
          )}
        </div>

        {/* Hiển thị điểm số khi đã submit */}
        {showResults && (
          <div
            className={`mb-8 p-4 rounded-lg ${
              score === (activeTab === "complete-words" ? fillInBlankItems.length : arrangeLettersItems.length)
                ? "bg-green-100 text-green-800"
                : "bg-blue-100 text-blue-800"
            }`}
          >
            <h3 className="text-xl font-bold">
              {score === (activeTab === "complete-words" ? fillInBlankItems.length : arrangeLettersItems.length)
                ? "Tuyệt vời! Bạn đã trả lời đúng tất cả câu hỏi!"
                : `Bạn đã trả lời đúng ${score}/${activeTab === "complete-words" ? fillInBlankItems.length : arrangeLettersItems.length} câu hỏi.`}
            </h3>
          </div>
        )}

        <TabsContent value="complete-words">
          <div className="space-y-8">
            {fillInBlankItems.map((item, index) => (
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
                      {item === "stapler" ? (
                        <div>
                          <p className="text-xl mb-4">s _ _ _ l _ _</p>
                          <img
                            src={stapler || "/placeholder.svg"}
                            alt="stapler"
                            className="mt-2 rounded-lg max-w-sm-[100px] shadow-md w-[300px] h-[300px]"
                          />
                        </div>
                      ) : item === "paintbrush" ? (
                        <div>
                          <p className="text-xl mb-4">p_ _ _ _ br_ _ _</p>
                          <img
                            src={paintbrush || "/placeholder.svg"}
                            alt="paintbrush"
                            className="mt-2 rounded-lg max-w-sm-[100px] shadow-md w-[300px] h-[300px]"
                          />
                        </div>
                      ) : item === "paint" ? (
                        <div>
                          <p className="text-xl mb-4">____t</p>
                          <img
                            src={paint || "/placeholder.svg"}
                            alt="paint"
                            className="mt-2 rounded-lg max-w-sm-[100px] shadow-md w-[300px] h-[300px]"
                          />
                        </div>
                      ) : item === "ribbon" ? (
                        <div>
                          <p className="text-xl mb-4">ri____</p>
                          <img
                            src={ribbon || "/placeholder.svg"}
                            alt="ribbon"
                            className="mt-2 rounded-lg max-w-sm-[100px] shadow-md w-[300px] h-[300px]"
                          />
                        </div>
                      ) : item === "popcorn" ? (
                        <div>
                          <p className="text-xl mb-4">p _ _ c _ _ _</p>
                          <img
                            src={popcorn || "/placeholder.svg"}
                            alt="popcorn"
                            className="mt-2 rounded-lg max-w-sm-[100px] shadow-md w-[300px] h-[300px]"
                          />
                        </div>
                      ) : item === "crackers" ? (
                        <div>
                          <p className="text-xl mb-4">cr _ _ _ _ _ s</p>
                          <img
                            src={crackers || "/placeholder.svg"}
                            alt="crackers"
                            className="mt-2 rounded-lg max-w-sm-[100px] shadow-md w-[300px] h-[300px]"
                          />
                        </div>
                      ) : item === "chalk" ? (
                        <div>
                          <img
                            src={chalk || "/placeholder.svg"}
                            alt="chalk"
                            className="mt-2 rounded-lg max-w-sm-[100px] shadow-md w-[300px] h-[300px]"
                          />
                          <p className="text-xl mb-4">ch____</p>
                        </div>
                      ) : item === "peanuts" ? (
                        <div>
                          <p className="text-xl mb-4">p_ _ n _ _ _</p>
                          <img
                            src={peanuts || "/placeholder.svg"}
                            alt="peanuts"
                            className="mt-2 rounded-lg max-w-sm-[100px] shadow-md w-[300px] h-[300px]"
                          />
                        </div>
                      ) : item === "paper" ? (
                        <div>
                          <p className="text-xl mb-4">p____</p>
                          <img
                            src={paper || "/placeholder.svg"}
                            alt="paper"
                            className="mt-2 rounded-lg max-w-sm-[100px] shadow-md w-[300px] h-[300px]"
                          />
                        </div>
                      ) : (
                        <div>
                          <p className="text-xl mb-4">str___</p>
                          <img
                            src={string || "/placeholder.svg"}
                            alt="string"
                            className="mt-2 rounded-lg max-w-sm-[100px] shadow-md w-[300px] h-[300px]"
                          />
                        </div>
                      )}
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="relative">
                    <Input
                      name={item}
                      value={fillInBlankAnswers[item as keyof typeof fillInBlankAnswers]}
                      onChange={handleFillInBlankChange}
                      placeholder="Enter your answer"
                      className={`bg-white dark:bg-gray-800 text-lg p-6 
                                  ${
                                    showResults
                                      ? fillInBlankAnswers[item as keyof typeof fillInBlankAnswers].toLowerCase() ===
                                        correctAnswers.fillInBlank[item as keyof typeof correctAnswers.fillInBlank]
                                        ? "border-green-500 ring-2 ring-green-500 focus:ring-green-500"
                                        : "border-red-500 ring-2 ring-red-500 focus:ring-red-500"
                                      : "focus:ring-purple-500"
                                  }`}
                      disabled={showResults}
                    />

                    {/* Thêm icon đánh dấu đúng/sai */}
                    {showResults && (
                      <div className="absolute right-4 top-4">
                        {fillInBlankAnswers[item as keyof typeof fillInBlankAnswers].toLowerCase() ===
                        correctAnswers.fillInBlank[item as keyof typeof correctAnswers.fillInBlank] ? (
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        ) : (
                          <AlertCircle className="h-6 w-6 text-red-500" />
                        )}
                      </div>
                    )}
                  </div>

                  {showResults &&
                    fillInBlankAnswers[item as keyof typeof fillInBlankAnswers].toLowerCase() !==
                      correctAnswers.fillInBlank[item as keyof typeof correctAnswers.fillInBlank] && (
                      <p className="text-red-500 mt-4 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        Correct answer:{" "}
                        <span className="font-semibold">
                          {correctAnswers.fillInBlank[item as keyof typeof correctAnswers.fillInBlank]}
                        </span>
                      </p>
                    )}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="drag-drop">
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-center">
                    Arrange the words
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Word Bank */}
                    <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800">
                      <h3 className="mb-4 font-semibold">Word Bank</h3>
                      <Droppable droppableId="wordBank" direction="horizontal">
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="flex flex-wrap gap-2"
                          >
                            {availableWords.map((word, index) => (
                              <Draggable key={word} draggableId={word} index={index}>
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className="px-3 py-2 bg-white dark:bg-gray-700 rounded-md shadow-sm border border-gray-200 dark:border-gray-600"
                                  >
                                    {word}
                                  </div>
                                )}
                              </Draggable>
                            ))}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                    </div>

                    {/* Questions */}
                    <div className="space-y-4">
                      {Object.entries({
                        "1": "I have some food, so let's watch TV together!",
                        "2": "I have some supplies for the craft class.",
                        "3": "I have a tool for very fast calculations.",
                        "4": "I have some tools to attach the paper to the board."
                      }).map(([id, question]) => (
                        <div 
                          key={id} 
                          className="p-4 border rounded-lg"
                        >
                          <u 
                            className="mb-2 cursor-pointer hover:text-blue-600 dark:hover:text-blue-400" 
                            onClick={() => setShowVideo(questionVideos[id as keyof typeof questionVideos])}
                          >
                            {question}
                          </u>
                          <Droppable droppableId={id} direction="horizontal">
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="min-h-[50px] p-2 bg-gray-50 dark:bg-gray-800 rounded-md flex flex-wrap gap-2"
                              >
                                {dragDropAnswers[id]?.map((word, index) => (
                                  <Draggable key={word} draggableId={word} index={index}>
                                    {(provided) => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className="px-3 py-2 bg-white dark:bg-gray-700 rounded-md shadow-sm border border-gray-200 dark:border-gray-600"
                                      >
                                        {word}
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                          {showResults && (
                            <div className="mt-2">
                              {JSON.stringify(dragDropAnswers[id]) === JSON.stringify(correctAnswers.dragDrop[id]) ? (
                                <div className="flex items-center text-green-600 dark:text-green-400">
                                  <CheckCircle className="w-5 h-5 mr-2" />
                                  <span>Correct!</span>
                                </div>
                              ) : (
                                <div className="flex items-center text-red-600 dark:text-red-400">
                                  <AlertCircle className="w-5 h-5 mr-2" />
                                  <span>Incorrect</span>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </DragDropContext>
        </TabsContent>

        <TabsContent value="arrange-letters">
          <div className="space-y-8">
            {arrangeLettersItems.map((item, index) => (
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
                      <div>
                        {item === "calculator" ? (
                          <img
                            src={calculator || "/placeholder.svg"}
                            alt="calculator"
                            className="mt-2 rounded-lg shadow-md w-[300px] h-[300px] object-cover"
                          />
                        ) : item === "scissors" ? (
                          <img
                            src={scissors || "/placeholder.svg"}
                            alt="scissors"
                            className="mt-2 rounded-lg shadow-md w-[300px] h-[300px] object-cover"
                          />
                        ) : item === "coloredPencil" ? (
                          <div>
                            <img
                              src={coloredPencil || "/placeholder.svg"}
                              alt="colored pencil"
                              className="mt-2 rounded-lg shadow-md w-[300px] h-[300px] object-cover"
                            />
                          </div>
                        ) : item === "rubberBand" ? (
                          <div>
                            <img
                              src={rubberBand || "/placeholder.svg"}
                              alt="rubber band"
                              className="mt-2 rounded-lg shadow-md w-[300px] h-[300px] object-cover"
                            />
                          </div>
                        ) : (
                          <div>
                            <img
                              src={potatoChips || "/placeholder.svg"}
                              alt="potato chips"
                              className="mt-2 rounded-lg shadow-md w-[300px] h-[300px] object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  {/* Khu vực hiển thị đáp án */}
                  <div className="mb-6">
                    <div className="text-lg font-medium mb-2">Your answer:</div>
                    <div className="flex flex-wrap gap-2 min-h-[60px] p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-dashed border-purple-300 dark:border-purple-700">
                      {arrangeLettersAnswers[item as keyof typeof arrangeLettersAnswers]?.map((letter, letterIndex) => (
                        <Button
                          key={`answer-${letterIndex}`}
                          variant="outline"
                          className={`h-12 w-12 text-xl font-bold transition-all transform hover:scale-105 
                            ${
                              showResults
                                ? arrangeLettersAnswers[item as keyof typeof arrangeLettersAnswers]
                                    .join("")
                                    .toLowerCase() ===
                                  correctAnswers.arrangeLetters[
                                    item as keyof typeof correctAnswers.arrangeLetters
                                  ].toLowerCase()
                                  ? "bg-green-100 border-green-500 text-green-700"
                                  : "bg-red-100 border-red-500 text-red-700"
                                : "bg-purple-100 border-purple-300 text-purple-700 dark:bg-purple-900 dark:border-purple-700 dark:text-purple-300"
                            }`}
                          onClick={() => handleAnswerLetterClick(item, letterIndex)}
                          disabled={showResults}
                        >
                          {letter}
                        </Button>
                      ))}
                    </div>

                    {/* Hiển thị đáp án đúng khi người dùng trả lời sai */}
                    {showResults &&
                      arrangeLettersAnswers[item as keyof typeof arrangeLettersAnswers].join("").toLowerCase() !==
                        correctAnswers.arrangeLetters[
                          item as keyof typeof correctAnswers.arrangeLetters
                        ].toLowerCase() && (
                        <p className="text-red-500 mt-4 flex items-center gap-2">
                          <AlertCircle className="h-5 w-5" />
                          Đáp án đúng:{" "}
                          <span className="font-semibold">
                            {correctAnswers.arrangeLetters[item as keyof typeof correctAnswers.arrangeLetters]}
                          </span>
                        </p>
                      )}
                  </div>

                  {/* Khu vực hiển thị các chữ cái để sắp xếp */}
                  <div className="mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-lg font-medium">Available letters:</div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-1 text-purple-600 dark:text-purple-400"
                        onClick={() => handleShuffleLetters(item)}
                        disabled={showResults || scrambledLetters[item as keyof typeof scrambledLetters]?.length === 0}
                      >
                        <RefreshCw className="h-4 w-4" />
                        Shuffle
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {scrambledLetters[item as keyof typeof scrambledLetters]?.map((letter, letterIndex) => (
                        <Button
                          key={`letter-${letterIndex}`}
                          variant="outline"
                          className="h-12 w-12 text-xl font-bold bg-blue-100 border-blue-300 text-blue-700 dark:bg-blue-900 dark:border-blue-700 dark:text-blue-300 transition-all transform hover:scale-110"
                          onClick={() => handleLetterClick(item, letterIndex)}
                          disabled={showResults}
                        >
                          {letter}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
      </Tabs>
    </div>
  )
}

export default PartB

