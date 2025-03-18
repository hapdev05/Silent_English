"use client"

import { useState } from "react"
import Ihavesome from "../../../../assets/imgs/Ihavesomepoptatochips.png"
import DoThey from "../../../../assets/imgs/Dotheyhaveanypaintbrushes.png"
import HeHas from "../../../../assets/imgs/Hehassomeribbon.png"
import Theydont from "../../../../assets/imgs/Theydonthaveanypeanuts.png"
// Import video
import FixErrorsVideo from "../../../../assets/videos/Fixerrorsandrewritethesentence.mp4"
import RewriteSentenceVideo from "../../../../assets/videos/Rewritethesentence.mp4"
import LookAndWriteVideo from "../../../../assets/videos/Lookandwrite.mp4"
// Add new video imports for vocabulary words
import ColorfulVideo from "../../../../assets/videos/colorful.mp4"
import StoreVideo from "../../../../assets/videos/store.mp4"
import EmptyVideo from "../../../../assets/videos/empty.mp4"
import FridgeVideo from "../../../../assets/videos/fridge.mp4"

type Answer = {
  userAnswer: string
  isCorrect: boolean | null
  correctAnswer: string
  isSubmitted: boolean
}

const PartE = () => {
  // State for modal and video
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // State for answers in each section
  const [section1Answers, setSection1Answers] = useState<Answer[]>([
    { userAnswer: "", isCorrect: null, correctAnswer: "I have some potato chips", isSubmitted: false },
    { userAnswer: "", isCorrect: null, correctAnswer: "Do they have any paint brushes?", isSubmitted: false },
  ])

  const [section2Answers, setSection2Answers] = useState<Answer[]>([
    { userAnswer: "", isCorrect: null, correctAnswer: "He has some ribbon", isSubmitted: false },
    { userAnswer: "", isCorrect: null, correctAnswer: "They don't have any peanuts", isSubmitted: false },
  ])

  const [section3Answers, setSection3Answers] = useState<Answer[]>([
    { userAnswer: "", isCorrect: null, correctAnswer: "He has some glue", isSubmitted: false },
    { userAnswer: "", isCorrect: null, correctAnswer: "Do they have any rubber bands?", isSubmitted: false },
  ])

  // State for section submission
  const [sectionSubmitted, setSectionSubmitted] = useState({
    section1: false,
    section2: false,
    section3: false,
  })

  // Videos list
  const videos = {
    fixErrors: FixErrorsVideo,
    rewriteSentence: RewriteSentenceVideo,
    lookAndWrite: LookAndWriteVideo,
    colorful: ColorfulVideo,
    store: StoreVideo,
    empty: EmptyVideo,
    fridge: FridgeVideo,
  }

  // Handle video display
  const handleShowVideo = (key: keyof typeof videos) => {
    setActiveVideo(videos[key])
    setIsModalOpen(true)
  }

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
    setActiveVideo(null)
  }

  // Handle input change for each section
  const handleInputChange = (sectionNumber: number, index: number, value: string) => {
    if (sectionNumber === 1) {
      const newAnswers = [...section1Answers]
      newAnswers[index] = { ...newAnswers[index], userAnswer: value }
      setSection1Answers(newAnswers)
    } else if (sectionNumber === 2) {
      const newAnswers = [...section2Answers]
      newAnswers[index] = { ...newAnswers[index], userAnswer: value }
      setSection2Answers(newAnswers)
    } else if (sectionNumber === 3) {
      const newAnswers = [...section3Answers]
      newAnswers[index] = { ...newAnswers[index], userAnswer: value }
      setSection3Answers(newAnswers)
    }
  }

  // Submit answers for a section
  const handleSubmit = (sectionNumber: number) => {
    if (sectionNumber === 1) {
      const checkedAnswers = section1Answers.map((answer) => ({
        ...answer,
        isCorrect: answer.userAnswer.trim().toLowerCase() === answer.correctAnswer.toLowerCase(),
        isSubmitted: true,
      }))
      setSection1Answers(checkedAnswers)
      setSectionSubmitted({ ...sectionSubmitted, section1: true })
    } else if (sectionNumber === 2) {
      const checkedAnswers = section2Answers.map((answer) => ({
        ...answer,
        isCorrect: answer.userAnswer.trim().toLowerCase() === answer.correctAnswer.toLowerCase(),
        isSubmitted: true,
      }))
      setSection2Answers(checkedAnswers)
      setSectionSubmitted({ ...sectionSubmitted, section2: true })
    } else if (sectionNumber === 3) {
      const checkedAnswers = section3Answers.map((answer) => ({
        ...answer,
        isCorrect: answer.userAnswer.trim().toLowerCase() === answer.correctAnswer.toLowerCase(),
        isSubmitted: true,
      }))
      setSection3Answers(checkedAnswers)
      setSectionSubmitted({ ...sectionSubmitted, section3: true })
    }
  }

  // Reset answers for a section
  const handleReset = (sectionNumber: number) => {
    if (sectionNumber === 1) {
      const resetAnswers = section1Answers.map((answer) => ({
        ...answer,
        userAnswer: "",
        isCorrect: null,
        isSubmitted: false,
      }))
      setSection1Answers(resetAnswers)
      setSectionSubmitted({ ...sectionSubmitted, section1: false })
    } else if (sectionNumber === 2) {
      const resetAnswers = section2Answers.map((answer) => ({
        ...answer,
        userAnswer: "",
        isCorrect: null,
        isSubmitted: false,
      }))
      setSection2Answers(resetAnswers)
      setSectionSubmitted({ ...sectionSubmitted, section2: false })
    } else if (sectionNumber === 3) {
      const resetAnswers = section3Answers.map((answer) => ({
        ...answer,
        userAnswer: "",
        isCorrect: null,
        isSubmitted: false,
      }))
      setSection3Answers(resetAnswers)
      setSectionSubmitted({ ...sectionSubmitted, section3: false })
    }
  }

  // Add a clickable word component
  const VocabWord = ({ word, videoKey }: { word: string; videoKey: keyof typeof videos }) => (
    <span onClick={() => handleShowVideo(videoKey)} className="text-red-500 cursor-pointer hover:underline">
      {word}
    </span>
  )

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2 text-pink-600 dark:text-pink-300 border-b pb-4">
          E - LET'S PRACTICE WRITING TOGETHER!
        </h2>
        <div className="flex gap-2 mb-6 justify-end">
          <button
            onClick={() => {
              handleSubmit(1)
              handleSubmit(2)
              handleSubmit(3)
            }}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            disabled={sectionSubmitted.section1 && sectionSubmitted.section2 && sectionSubmitted.section3}
          >
            Submit All
          </button>
          <button
            onClick={() => {
              handleReset(1)
              handleReset(2)
              handleReset(3)
            }}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Reset All
          </button>
        </div>
      </div>

      {/* Section I */}
      <div className="mb-8">
        <h3
          onClick={() => handleShowVideo("fixErrors")}
          className="text-xl font-bold mb-4 cursor-pointer text-blue-600 hover:underline"
        >
          I. Fix errors and rewrite the sentence
        </h3>

        <div className="mb-6">
          <p>1. I have some chalk.</p>
          <img src={Ihavesome || "/placeholder.svg"} alt="I have some" className="w-[300px] h-[300px]" />
          <div className="relative">
            <input
              type="text"
              placeholder="I ____"
              className={`border p-2 rounded w-full ${
                section1Answers[0].isSubmitted
                  ? section1Answers[0].isCorrect
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                  : ""
              }`}
              value={section1Answers[0].userAnswer}
              onChange={(e) => handleInputChange(1, 0, e.target.value)}
              disabled={sectionSubmitted.section1}
            />
            {section1Answers[0].isSubmitted && !section1Answers[0].isCorrect && (
              <p className="text-red-500 mt-1">Correct answer: {section1Answers[0].correctAnswer}</p>
            )}
          </div>
        </div>

        <div>
          <p>2. Does they have some paint brushes?</p>
          <img
            src={DoThey || "/placeholder.svg"}
            alt="Do they have some paint brushes"
            className="w-[300px] h-[300px]"
          />
          <div className="relative">
            <input
              type="text"
              placeholder="____ they ____?"
              className={`border p-2 rounded w-full ${
                section1Answers[1].isSubmitted
                  ? section1Answers[1].isCorrect
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                  : ""
              }`}
              value={section1Answers[1].userAnswer}
              onChange={(e) => handleInputChange(1, 1, e.target.value)}
              disabled={sectionSubmitted.section1}
            />
            {section1Answers[1].isSubmitted && !section1Answers[1].isCorrect && (
              <p className="text-red-500 mt-1">Correct answer: {section1Answers[1].correctAnswer}</p>
            )}
          </div>
        </div>
      </div>

      {/* Section II */}
      <div className="mb-8">
        <h3
          onClick={() => handleShowVideo("rewriteSentence")}
          className="text-xl font-bold mb-4 cursor-pointer text-blue-600 hover:underline"
        >
          II. Rewrite the sentence
        </h3>

        <p className="text-lg text-red-600 mb-4">
          Example: I want to buy some crackers. =&gt; I don't have any crackers.
        </p>

        <div className="mb-6">
          <p>
            1. These ribbons are very <VocabWord word="colorful" videoKey="colorful" />.
          </p>
          
          <img src={HeHas || "/placeholder.svg"} alt="He has some ribbons" className="w-[300px] h-[300px]" />
          <div className="relative">
            <input
              type="text"
              placeholder="He ____"
              className={`border p-2 rounded w-full ${
                section2Answers[0].isSubmitted
                  ? section2Answers[0].isCorrect
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                  : ""
              }`}
              value={section2Answers[0].userAnswer}
              onChange={(e) => handleInputChange(2, 0, e.target.value)}
              disabled={sectionSubmitted.section2}
            />
            {section2Answers[0].isSubmitted && !section2Answers[0].isCorrect && (
              <p className="text-red-500 mt-1">Correct answer: {section2Answers[0].correctAnswer}</p>
            )}
          </div>
        </div>

        <div>
          <p>
            2. They go to the <VocabWord word="store" videoKey="store" /> to buy some peanuts{" "}
             the <VocabWord word="fridge" videoKey="fridge" /> is{" "}
            <VocabWord word="empty" videoKey="empty" />.
          </p>
          <img src={Theydont || "/placeholder.svg"} alt="They don't have any peanuts" className="w-[300px] h-[300px]" />
          <div className="relative">
            <input
              type="text"
              placeholder="They ____"
              className={`border p-2 rounded w-full ${
                section2Answers[1].isSubmitted
                  ? section2Answers[1].isCorrect
                    ? "border-green-500 bg-green-50"
                    : "border-red-500 bg-red-50"
                  : ""
              }`}
              value={section2Answers[1].userAnswer}
              onChange={(e) => handleInputChange(2, 1, e.target.value)}
              disabled={sectionSubmitted.section2}
            />
            {section2Answers[1].isSubmitted && !section2Answers[1].isCorrect && (
              <p className="text-red-500 mt-1">Correct answer: {section2Answers[1].correctAnswer}</p>
            )}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button onClick={handleCloseModal} className="absolute top-2 right-2 text-red-500 text-xl font-bold">
              X
            </button>
            {activeVideo && <video controls src={activeVideo} className="w-full h-auto"></video>}
          </div>
        </div>
      )}
    </div>
  )
}

export default PartE

