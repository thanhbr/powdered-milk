"use client";
import { useRef, useState } from "react";
import { DOCS_AWS } from "./_data/data";

function getRandomAWSDocument() {
  const randomIndex = Math.floor(Math.random() * DOCS_AWS.length);
  return DOCS_AWS[randomIndex];
}

export default function AWSPage() {
  const textareaRef = useRef<any>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [highlightedText, setHighlightedText] = useState<JSX.Element[]>([]);
  const randomAWSDocument = getRandomAWSDocument();

  const formatValue = (value: string) => {
    return value.replace(/,|\.|\[|\]|\?|\!/g, "").toLowerCase().trim();
  };

  const handleChangeTextarea = () => {
    setError(false);
    setHighlightedText([]);
  };


  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const textareaValue = textareaRef.current.value;
    if (formatValue(textareaValue) === formatValue(randomAWSDocument.content)) {
      textareaRef.current.value = "";
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } else {
      setError(true);
      highlightErrors(textareaValue, randomAWSDocument.content);
    }
  };

  const highlightErrors = (input: string, correct: string) => {
    const inputWords = input.trim().split(/\s+/);
    const correctWords = correct.trim().split(/\s+/);
    const highlighted: any[] = [];

    const minLength = Math.min(inputWords.length, correctWords.length);
    for (let i = 0; i < minLength; i++) {
      if (inputWords[i] !== correctWords[i]) {
        highlighted.push(
          <span key={i} className="text-red">
            {inputWords[i] + " "}
          </span>
        );
      } else {
        highlighted.push(inputWords[i] + " ");
      }
    }

    // Highlight remaining words in longer string
    if (inputWords.length > correctWords.length) {
      highlighted.push(
        <span key="extra" className="text-red-500">
          {inputWords.slice(minLength).join(" ")}
        </span>
      );
    } else if (correctWords.length > inputWords.length) {
      highlighted.push(
        <span key="missing" className="text-red-500">
          {correctWords.slice(minLength).join(" ")}
        </span>
      );
    }

    setHighlightedText(highlighted);
  };

  return (
    <div className=" m-4">
      <div>
        <div>
          <p className="text-2xl font-bold">{randomAWSDocument.title}</p>
        </div>
        <div>
          <p>{randomAWSDocument.content}</p>
        </div>
      </div>
      <form onSubmit={onFormSubmit}>
        <div className="w-[calc(100%-32px)] h-[200px] border-2 rounded-md p-2">
          {highlightedText.length > 0 ? (
            <p>{highlightedText}</p>
          ) : (
            <textarea
              ref={textareaRef}
              className="w-full h-full resize-none outline-none"
              onChange={handleChangeTextarea}
            />
          )}
        </div>
        {error && <div className="text-red text-2xl font-bold">Error</div>}
        {success && (
          <div className="text-green text-2xl font-bold">Success</div>
        )}
        <div className="mt-4 flex gap-4">
          <button className="p-2 border rounded-md border-sky-400 text-sky-400">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
