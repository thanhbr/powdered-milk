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
  const randomAWSDocument = getRandomAWSDocument();

  const formatValue = (value: string) => {
    return value.replace(/,|\.|\[|\]|\?|\!/g, "").toLowerCase().trim();
  };

  const handleChangeTextarea = () => {
    if(error) setError(false);
  }

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const textareaValue = textareaRef.current.value;
    if (formatValue(textareaValue) === formatValue(randomAWSDocument.content)) {
      textareaRef.current.value = "";
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    } else {
      setError(true);
    }
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
        <textarea
          ref={textareaRef}
          className="w-[calc(100%-32px)] h-[200px] border-2 rounded-md"
          onChange={handleChangeTextarea}
        />
        {error && <div className="text-red text-2xl font-bold">Error</div>}
        {success && <div className="text-green text-2xl font-bold">Success</div>}
        <button className="p-2 border rounded-md border-sky-400 text-sky-400">
          Submit
        </button>
      </form>
    </div>
  );
}
