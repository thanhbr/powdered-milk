"use client";

import { useEffect, useState } from "react";
import QuestionCard from "./_components/QuestionCard";
import { QUESTIONS } from "./_data/data";

export default function PMP() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number | null>(0);
  const [searchId, setSearchId] = useState<string>("");
  const [searchedQuestion, setSearchedQuestion] = useState<typeof QUESTIONS[0] | null>(null);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => {
      if (prevIndex === null) {
        if (searchedQuestion) {
          const currentIndex = QUESTIONS.findIndex(q => q.id === searchedQuestion.id);
          return (currentIndex + 1) % QUESTIONS.length;
        }
        return 0;
      }
      return (prevIndex + 1) % QUESTIONS.length;
    });
    setSearchedQuestion(null);
    setSearchId("");
  };

  const handleSearch = () => {
    if (searchId.trim() === "") {
      setSearchedQuestion(QUESTIONS[0]);
      setCurrentQuestionIndex(0);
    } else {
      const question = QUESTIONS.find(q => q.id === parseInt(searchId, 10));
      setSearchedQuestion(question || null);
      setCurrentQuestionIndex(null);
    }
  };

  useEffect(() => {
    const navBar = document.getElementById("nav-bar");
    if (navBar) {
      navBar.remove();
    }
  }, []);

  return (
    <div className="container pt-8 pb-20">
      <p className="text-2xl font-bold">Scrum Question Time</p>

      <div className="mb-4 flex flex-row gap-2">
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Enter question number"
          className="mr-2 p-2 border rounded w-1/2"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button onClick={handleSearch} className="bg-primary text-white px-2 py-2 bg-green-500  rounded">
          Search
        </button>
        <button onClick={handleNextQuestion} className="bg-primary text-white px-2 py-2 bg-blue-500  rounded">
          Next
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
