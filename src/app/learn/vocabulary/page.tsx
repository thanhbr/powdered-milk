"use client";
import { useEffect, useRef, useState } from "react";
import { VOCABULARY } from "./_data/data";

function getRandomVocabulary() {
  const randomIndex = Math.floor(Math.random() * VOCABULARY.length);
  return VOCABULARY[randomIndex];
}

export default function Page() {
  const randomVocabulary = getRandomVocabulary();
  const [showList, setShowList] = useState(false);
  const [vocabulary, setVocabulary] = useState<any>({});
  const [error, setError] = useState(false);
  const inputRef = useRef<any>(null);

  useEffect(() => setVocabulary(randomVocabulary), []);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    if (inputValue === vocabulary.en) {
      setVocabulary(randomVocabulary);
      setShowList(false);
      setError(false);
      inputRef.current.value = "";
    } else {
      setError(true);
    }
  };

  const styleDiv = {
    border: `1px solid ${error ? "red" : "black"}`,
    width: "fit-content",
  };

  const styleInput = {
    border: "none",
    outline: "none",
    padding: 8,
  };

  return (
    <>
      <h2>Vocabulary</h2>
      <div style={{ padding: 32 }}>
        <form onSubmit={onFormSubmit}>
          <div>{vocabulary.vi}</div>
          <div style={styleDiv}>
            <input ref={inputRef} placeholder="enter english" style={styleInput} />
          </div>
        </form>
        <div style={{ marginTop: 32 }}>
          <button onClick={() => setShowList((pre) => !pre)}>Show list</button>
          <ol>
            {showList &&
              VOCABULARY.map((vocal) => (
                <li key={vocal.id}>
                  {vocal.en}({vocal.type}): {vocal.vi}
                </li>
              ))}
          </ol>
        </div>
      </div>
    </>
  );
}
