"use client";

import { useState, useEffect } from "react";
import QuestionCard from "./_components/QuestionCard";
import { QUESTIONS } from "./_data/data";

export default function PMP() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number | null>(null);
  const [searchId, setSearchId] = useState<string>("");
  const [searchedQuestion, setSearchedQuestion] = useState<typeof QUESTIONS[0] | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * QUESTIONS.length);
    setCurrentQuestionIndex(randomIndex);
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex === null) return 0;
      return (prevIndex + 1) % QUESTIONS.length;
    });
    setSearchedQuestion(null);
    setSearchId("");
  };

  const handleSearch = () => {
    const question = QUESTIONS.find(q => q.id === parseInt(searchId, 10));
    setSearchedQuestion(question || null);
    setCurrentQuestionIndex(null);
  };

  return (
    <div className="container">
      <p className="text-2xl font-bold">PMP Question Time</p>

      <div className="mb-4 flex flex-row gap-8">
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Enter question number"
          className="mr-2 p-2 border rounded w-1/2"
        />
        <button onClick={handleSearch} className="bg-primary text-white px-2 py-2 bg-green-500  rounded">
          Search
        </button>
        <button onClick={handleNextQuestion} className="bg-primary text-white mt-4 px-2 py-2 bg-blue-500  rounded">
          Next random question
        </button>
      </div>

      {searchedQuestion && (
        <QuestionCard question={searchedQuestion} />
      )}

      {currentQuestionIndex !== null && !searchedQuestion && (
        <QuestionCard question={QUESTIONS[currentQuestionIndex]} />
      )}
    </div>
  );
}
