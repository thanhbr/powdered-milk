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
    <div style={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
      <p><strong>Question {question.id}:</strong> {question.question}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: "1rem" }}>
        {question.choices.map((choice) => (
          <label key={choice.id} style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={selectedChoices.includes(choice.id)}
              onChange={() => handleChoiceSelect(choice.id)}
              disabled={showExplanation}
            />
            {choice.text}
          </label>
        ))}
      </div>
      <div>
        {!showExplanation ? (
          <button onClick={handleSubmit}>Submit</button>
        ) : (
          <button onClick={handleReset}>Try Again</button>
        )}
        {showExplanation && (
          <div>
            <div>
              <h3>Answer: {question.answer.join(', ')}</h3>
            </div>
            <div className="explanation">
              <h3 style={{ color: isCorrect ? 'green' : 'red' }}>{isCorrect ? 'Correct!' : 'Incorrect'}</h3>
              <p>{question.explanation}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
