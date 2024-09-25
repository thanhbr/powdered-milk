import React, { useState, useEffect } from 'react';

interface Choice {
  id: string;
  text: string;
}

interface Question {
  id: number;
  question: string;
  choices: Choice[];
  answer: string[];
  explanation: string;
}

interface QuestionCardProps {
  question: Question;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question }) => {
  const [selectedChoices, setSelectedChoices] = useState<string[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  // Add this useEffect hook
  useEffect(() => {
    setSelectedChoices([]);
    setShowExplanation(false);
  }, [question.id]);

  const handleChoiceSelect = (choiceId: string) => {
    setSelectedChoices(prev =>
      prev.includes(choiceId)
        ? prev.filter(id => id !== choiceId)
        : [...prev, choiceId]
    );
  };

  const handleSubmit = () => {
    setShowExplanation(true);
  };

  const handleReset = () => {
    setSelectedChoices([]);
    setShowExplanation(false);
  };

  const isCorrect = JSON.stringify(selectedChoices.sort()) === JSON.stringify(question.answer.sort());

  return (
    <div className='flex flex-col gap-2'>
      <p className='text-white'><strong>Question {question.id}:</strong> {question.question}</p>
      <div className='flex flex-col gap-2'>
        {question.choices.map((choice) => (
          <label key={choice.id} className='flex items-center gap-2 cursor-pointer'>
            <input
              type="checkbox"
              checked={selectedChoices.includes(choice.id)}
              onChange={() => handleChoiceSelect(choice.id)}
              disabled={showExplanation}
            />
            <p className='m-0 text-white'>{choice.text}</p>
          </label>
        ))}
      </div>
      <div>
        {!showExplanation ? (
          <button onClick={handleSubmit} disabled={selectedChoices.length === 0} className='bg-primary text-white p-2 rounded disabled:bg-grey disabled:cursor-not-allowed'>Submit</button>
        ) : (
          <button onClick={handleReset} className='bg-primary text-white p-2 rounded'>Try Again</button>
        )}
        {showExplanation && (
          <div>
            <div>
              <p className={`text-2xl font-bold ${isCorrect ? 'text-green' : 'text-red'}`}>{isCorrect ? 'Correct!' : 'Incorrect'}</p>
              <p className='font-bold text-2xl text-white'>Answer: {question.answer.join(', ')}</p>
            </div>
            <div className="explanation">
              <div className='text-white'><span className='font-bold'>Explanation:</span> {question.explanation}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
