import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Card, CardContent } from "@/components/ui/card";

import IhavesomecrackersVideo from "@/assets/videos/unit1/Ihavesomecrackers.mp4";
import IdonthaveanycandyVideo from "@/assets/videos/unit1/Idon'thaveanycandy.mp4";
import WhatdoeshaveVideo from "@/assets/videos/unit1/Whatdoeshehave.mp4";
import HehassomechalkVideo from "@/assets/videos/unit1/Hehassomechalk.mp4";
import DotheyhaveanymagnetsVideo from "@/assets/videos/unit1/Dotheyhaveanymagnets.mp4";
import YestheydoNotheydontVideo from "@/assets/videos/unit1/Yestheydonotheydon't.mp4";


const PartA = ({ currentItems, currentPage, totalPages, handlePageChange }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const sentencePatterns = [
      {
        id: 1,
        content: [
          "1",
          "I have some crackers.",
          "Tôi có một ít bánh quy.",
          "Sign language: ",
          "⦿ " + IhavesomecrackersVideo,
          "I don’t have any candy.",
          "Tôi không có bất kì cái kẹo nào.",
          "Sign language: ",
          "⦿ " + IdonthaveanycandyVideo
        ]
      },
      {
        id: 2,
        content: [
          "2",
          "What does he have?",
          "Anh ấy có cái gì?",
          "Sign language: ",
          "⦿ " + WhatdoeshaveVideo,
          "He has some chalk.",
          "Anh ấy có một ít phấn.",
          "Sign language: ",
          "⦿ " + HehassomechalkVideo
        ]
      },
      {
        id: 3,
        content: [
          "3",
          "Do they have any magnets?",
          "Họ có bất kì cái nam châm nào không?",
          "Sign language: ",
          "⦿ " + DotheyhaveanymagnetsVideo,
          "Yes, they do./ No, they don’t.",
          "Có, họ có. / Không, họ không có.",
          "Sign language: ",
          "⦿ " + YestheydoNotheydontVideo
        ]
      }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-8 text-pink-600 dark:text-pink-300 border-b pb-4">
        A - COMPETENCES - VOCABULARY - SENTENCES PATTERNS
      </h2>

      <div className="mb-6 bg-blue-50 dark:bg-blue-900 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">1. COMPETENCES</h3>
        <ul className="list-disc pl-6 space-y-2 text-blue-800 dark:text-blue-200">
          <li>Describing locations</li>
          <li>Asking about past and current locations (singular & plural)</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300">2. Vocabulary</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentItems.map((item) => (
          <Card key={item.word} className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-800 dark:to-purple-800 hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <p className="font-semibold text-lg text-purple-700 dark:text-purple-300 min-w-[100px]">{item.word}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 px-2">{item.pronunciation}</p>
                <p className="text-sm font-medium text-pink-600 dark:text-pink-300 min-w-[80px] text-right">{item.translation}</p>
              </div>
              <div className="relative">
                {selectedCard === item.word ? (
                  <ReactPlayer url={item.video} controls width="100%" height="100%" />
                ) : (
                  <div className="w-full h-40 bg-gray-200 dark:bg-gray-700 rounded-md mb-3 overflow-hidden relative group">
                    <img src={item.image} alt="" className="w-full h-full object-cover" />
                    <button onClick={() => setSelectedCard(item.word)} className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                      ▶️
                    </button>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">{item.example}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 gap-2">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="px-4 py-2 rounded-md bg-blue-500 text-white disabled:bg-gray-300">Previous</button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button key={i + 1} onClick={() => handlePageChange(i + 1)} className={`px-4 py-2 rounded-md ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{i + 1}</button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="px-4 py-2 rounded-md bg-blue-500 text-white disabled:bg-gray-300">Next</button>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300 mt-8">3. Sentences Patterns</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {sentencePatterns.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-4 border">
                  {item.content.map((row, index) => (
                    <div key={index} className={row.startsWith('⦿') ? 'text-red-500' : 'py-3 text-blue-600 font-semibold'}>
                      {row.startsWith('⦿') ? <video className="w-full max-w-[300px] mt-2" controls src={row.replace('⦿ ', '')} /> : row}
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PartA;
