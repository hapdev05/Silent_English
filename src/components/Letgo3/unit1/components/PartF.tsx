"use client"

import { useState } from "react"
import need from "@/assets/videos/unit1/need.mp4"
import project from "@/assets/videos/unit1/project.mp4"
import mix from "@/assets/videos/unit1/mix.mp4"
import borrow from "@/assets/videos/unit1/borrow.mp4"
import only from "@/assets/videos/unit1/only.mp4"
import sunset from "@/assets/videos/unit1/sunset.mp4"
import hard from "@/assets/videos/unit1/hardkhokhan.mp4"
import right from "@/assets/videos/unit1/rightchinhxac.mp4"
import slowly from "@/assets/videos/unit1/slowly.mp4"
import finish from "@/assets/videos/unit1/finish.mp4"
import u1f from "@/assets/imgs/unit1/u1f.png"

// Videos mapping
const videos = {
  need: need,
  project: project,
  mix: mix,
  borrow: borrow,
  only: only,
  sunset: sunset,
  hard: hard,
  right: right,
  slowly: slowly,
  finish: finish,
}

type Sentence = {
  text: string
  isCorrect: boolean | null
  isSubmitted: boolean
}

const initialSentences: Sentence[] = [
  { text: "No, but I have red and yellow.", isCorrect: null, isSubmitted: false },
  { text: "Do you have any paintbrushes?", isCorrect: null, isSubmitted: false },
  { text: "I see that Mai has some paintbrushes.", isCorrect: null, isSubmitted: false },
  { text: "I'm painting a sunset, but it's hard to get the colors just right.", isCorrect: null, isSubmitted: false },
]



const PartF = () => {
  // State for sentences and arranged sentences
  const [sentences, setSentences] = useState<Sentence[]>(initialSentences)
  const [placedSentences, setPlacedSentences] = useState<(string | null)[]>([null, null, null, null])
  const [feedback, setFeedback] = useState<string | null>(null)

  // State for modal and video
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // State for image modal
  const [activeImage, setActiveImage] = useState<string | null>(null)
  const [isImageModalOpen, setIsImageModalOpen] = useState<boolean>(false)

  // Handle drag and drop
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, text: string) => {
    e.dataTransfer.setData("text/plain", text)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault()
    const text = e.dataTransfer.getData("text/plain")

    // Remove the text from its previous position if it exists
    const newPlacedSentences = [...placedSentences]
    const existingIndex = newPlacedSentences.indexOf(text)
    if (existingIndex !== -1) {
      newPlacedSentences[existingIndex] = null
    }

    newPlacedSentences[index] = text
    setPlacedSentences(newPlacedSentences)
    setFeedback(null) // Clear feedback on new arrangement
  }

  // Handle dragover to show drop zone is active
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.currentTarget.classList.add("bg-blue-50")
  }

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove("bg-blue-50")
  }

  // Handle submit and reset
  const handleSubmit = () => {
    // Check if all spaces are filled
    if (placedSentences.some((s) => s === null)) {
      setFeedback("Please fill in all the blanks before submitting.")
      return
    }

    const correctOrder = initialSentences.map((s) => s.text)
    const newSentences = [...sentences]

    let correctCount = 0 // Biến đếm số câu đúng

    // Check each sentence
    placedSentences.forEach((text, index) => {
      if (text) {
        const sentenceIndex = initialSentences.findIndex((s) => s.text === text)
        if (sentenceIndex !== -1) {
          newSentences[sentenceIndex].isSubmitted = true
          newSentences[sentenceIndex].isCorrect = index === sentenceIndex

          // Nếu câu đúng, tăng biến đếm
          if (index === sentenceIndex) {
            correctCount++
          }
        }
      }
    })

    setSentences(newSentences)

    const isCorrect = JSON.stringify(placedSentences) === JSON.stringify(correctOrder)
    setFeedback(
      isCorrect
        ? "Correct! Well done!"
        : `Not quite right. You got ${correctCount} out of ${initialSentences.length} correct. Try rearranging the sentences.`
    )
  }

  const handleReset = () => {
    setPlacedSentences([null, null, null, null])
    setSentences(initialSentences.map((s) => ({ ...s, isCorrect: null, isSubmitted: false })))
    setFeedback(null)
  }

  // Handle video display
  const handleShowVideo = (key: keyof typeof videos) => {
    setActiveVideo(videos[key])
    setIsModalOpen(true)
  }

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Pause the video when closing modal
    const videoElement = document.querySelector("video")
    if (videoElement) {
      videoElement.pause()
    }
    setActiveVideo(null)
  }

  // Handle image display
  const handleShowImage = (image: string) => {
    setActiveImage(image)
    setIsImageModalOpen(true)
  }

  // Close image modal
  const handleCloseImageModal = () => {
    setIsImageModalOpen(false)
    setActiveImage(null)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-pink-600 dark:text-pink-300 border-b pb-4">
        F - LET’S COMMUNICATE!
      </h2>
      <div className="mb-8 border rounded-lg p-6 bg-white shadow">
        {/* New Words Section - First */}
        <h3 className="text-xl font-bold mb-4 border-b pb-2">New words:</h3>

        <div className="flex flex-wrap gap-4 mb-6">
          {Object.entries(videos).map(([word]) => (
            <div
              key={word}
              onClick={() => handleShowVideo(word as keyof typeof videos)}
              className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full cursor-pointer 
                        hover:bg-blue-100 transition-colors flex items-center gap-2 border border-blue-200"
            >
              <span>{word}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          ))}
        </div>

        {/* Image placeholder */}
        <div className="mt-4 mb-6 bg-gray-100 p-4 rounded-lg flex items-center justify-center h-64">
          <div className="text-gray-500">
            <img
              src={u1f}
              alt="Conversation scene"
              className="w-full h-auto max-h-64 object-contain mx-auto cursor-pointer"
              onClick={() => handleShowImage(u1f)}
            />
          </div>
        </div>

        {/* I - Arrange the Sentences */}
        <h3 className="text-xl font-bold mb-4 border-b pb-2">I. Arrange the sentences.</h3>

        {/* Hiển thị đáp án để kéo thả */}
        <div className="mb-4">
          <h4 className="font-bold mb-2">Answers:</h4>
          <div className="flex flex-wrap gap-3">
            {initialSentences.map((sentence, index) => (
              <div
                key={index}
                draggable
                onDragStart={(e) => handleDragStart(e, sentence.text)}
                className={`p-3 rounded cursor-move transition-colors ${
                  placedSentences.includes(sentence.text)
                    ? "opacity-50 bg-gray-100 border border-gray-300"
                    : "opacity-100 bg-green-50 hover:bg-green-100 border border-green-200"
                }`}
              >
                {sentence.text}
              </div>
            ))}
          </div>
        </div>

        {/* Conversation with blanks */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="space-y-3">
            <p><strong>Nam:</strong> Hey Phuong, do you have any orange paint? I need it for my project.</p>
            <p>
              <strong>Phuong:</strong> (1)
              <div
                onDrop={(e) => handleDrop(e, 0)}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`inline-block mx-2 px-2 py-1 min-w-40 min-h-8 border-2 border-dashed rounded ${
                  placedSentences[0]
                    ? sentences[initialSentences.findIndex((s) => s.text === placedSentences[0])].isSubmitted
                      ? sentences[initialSentences.findIndex((s) => s.text === placedSentences[0])].isCorrect
                        ? "border-green-300 bg-green-50"
                        : "border-red-300 bg-red-50"
                      : "border-blue-300 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                {placedSentences[0] || "_________________"}
              </div>. You can mix those to make orange.
            </p>
            <p>
              <strong>Nam:</strong> Oh, great idea! Thanks! (2)
              <div
                onDrop={(e) => handleDrop(e, 1)}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`inline-block mx-2 px-2 py-1 min-w-40 min-h-8 border-2 border-dashed rounded ${
                  placedSentences[1]
                    ? sentences[initialSentences.findIndex((s) => s.text === placedSentences[1])].isSubmitted
                      ? sentences[initialSentences.findIndex((s) => s.text === placedSentences[1])].isCorrect
                        ? "border-green-300 bg-green-50"
                        : "border-red-300 bg-red-50"
                      : "border-blue-300 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                {placedSentences[1] || "____________"}
              </div>. I want to borrow one.
            </p>
            <p>
              <strong>Phuong:</strong> I only have one today for myself. (3)
              <div
                onDrop={(e) => handleDrop(e, 2)}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`inline-block mx-2 px-2 py-1 min-w-40 min-h-8 border-2 border-dashed rounded ${
                  placedSentences[2]
                    ? sentences[initialSentences.findIndex((s) => s.text === placedSentences[2])].isSubmitted
                      ? sentences[initialSentences.findIndex((s) => s.text === placedSentences[2])].isCorrect
                        ? "border-green-300 bg-green-50"
                        : "border-red-300 bg-red-50"
                      : "border-blue-300 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                {placedSentences[2] || "____________"}
              </div>.
            </p>
            <p>
              <strong>Nam:</strong> Okay, I ask her now. (4)
              <div
                onDrop={(e) => handleDrop(e, 3)}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={`inline-block mx-2 px-2 py-1 min-w-40 min-h-8 border-2 border-dashed rounded ${
                  placedSentences[3]
                    ? sentences[initialSentences.findIndex((s) => s.text === placedSentences[3])].isSubmitted
                      ? sentences[initialSentences.findIndex((s) => s.text === placedSentences[3])].isCorrect
                        ? "border-green-300 bg-green-50"
                        : "border-red-300 bg-red-50"
                      : "border-blue-300 bg-blue-50"
                    : "border-gray-300"
                }`}
              >
                {placedSentences[3] || "____________"}
              </div>.
            </p>
            <p><strong>Phuong:</strong> Yeah, sunsets are hard. Take your time and mix the colors slowly.</p>
            <p><strong>Nam:</strong> Thanks for your advice, Phuong. Let's finish before the bell rings!</p>
          </div>
        </div>

        {/* Feedback message */}
        {feedback && (
          <div className={`mb-4 p-3 rounded ${
            feedback.includes("Correct")
              ? "bg-green-100 text-green-700"
              : feedback.includes("Not quite")
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
          }`}>
            {feedback}
          </div>
        )}

        <div className="flex gap-3 mb-6">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition-colors"
          >
            Check Answers
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded font-medium transition-colors"
          >
            Reset
          </button>
        </div>

        {/* Part II */}
        <h3 className="text-xl font-bold mb-4 border-b pb-2">II - Click on the icon and join the conversation.</h3>

        {/* Image with link */}
        <div
          className="mt-4 mb-6 bg-gray-100 p-4 rounded-lg flex items-center justify-center h-64 cursor-pointer hover:bg-gray-200 transition-colors"
          onClick={() => window.open("#", "_blank")}
        >
          <div className="text-center">
            <img
              src="/api/placeholder/400/320"
              alt="Click to join conversation"
              className="max-h-48 mx-auto mb-2"
            />
            <p className="text-blue-600 font-medium">Click to join the conversation</p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={handleCloseModal}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseModal}
              className="absolute -top-3 -right-3 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              ✕
            </button>
            {activeVideo && (
              <div className="mt-2">
                <p className="text-lg font-medium mb-2 text-center">
                  {Object.entries(videos).find(([, path]) => path === activeVideo)?.[0]}
                </p>
                <video
                  controls
                  autoPlay
                  src={activeVideo}
                  className="w-full h-auto rounded"
                ></video>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={handleCloseImageModal}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseImageModal}
              className="absolute -top-3 -right-3 bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              ✕
            </button>
            {activeImage && (
              <div className="mt-2 p-4">
                <img
                  src={activeImage}
                  alt="Zoomed Image"
                  className="w-full h-auto max-h-[80vh] object-contain rounded"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default PartF