"use client";
import { useRef, useState } from "react";
import { DOCS_AWS } from "./_data/data";

function getRandomAWSDocument() {
  const randomIndex = Math.floor(Math.random() * DOCS_AWS.length);
  return DOCS_AWS[randomIndex];
}

export default function AWSPage() {
  const textareaRef = useRef<any>(null);
  const [error, setError] = useState(false);
  const randomAWSDocument = getRandomAWSDocument();

  const formatValue = (value: string) => {
    return value.replace(/,|\.|\[|\]|\?|\!/g, "").toLowerCase();
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const textareaValue = textareaRef.current.value;
    if (formatValue(textareaValue) === formatValue(randomAWSDocument.content)) {
      textareaRef.current.value = "";
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input ref={textareaRef} className="w-full h-[200px]" />
        {error && <div className="text-red">Error</div>}
        <button className="p-2 border rounded-md border-sky-400 text-sky-400" type="button">
          Submit
        </button>
      </form>
      <div>
        <div>
          <p className="text-2xl font-bold">{randomAWSDocument.title}</p>
        </div>
        <div>
          <p>{randomAWSDocument.content}</p>
        </div>
      </div>
    </>
  );
}
