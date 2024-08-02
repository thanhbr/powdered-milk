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
  const [correct, setCorrect] = useState(false);
  const [hide, setHide] = useState(true);
  const inputRef = useRef<any>(null);

  useEffect(() => setVocabulary(randomVocabulary), []);

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    if (inputValue === vocabulary.en) {
      setVocabulary(randomVocabulary);
      setShowList(false);
      setError(false);
      setCorrect(true);
      setHide(true);
      inputRef.current.value = "";
      setTimeout(() => setCorrect(false), 2000);
    } else {
      setError(true);
    }
  };

  const handleRefresh = () => {
    setVocabulary(randomVocabulary);
    setShowList(false);
    setError(false);
    inputRef.current.value = "";
  }

  const handleHide = () => setHide(pre => !pre)

  const styleDiv = {
    border: `2px solid ${error ? "red" : correct ? "green" : "black"}`,
    width: "fit-content",
    margin: "16px 0"
  };

  const styleInput = {
    border: "none",
    outline: "none",
    padding: 8,
    width: "70vw"
  };

  return (
    <>
      <h2>Vocabulary</h2>
      <div style={{ padding: 32 }}>
        <form onSubmit={onFormSubmit}>
          <div>
            <button type="button" onClick={handleRefresh}>refresh</button>
            <span style={{margin: 8}}>{vocabulary.vi}</span>
          </div>
          <div style={styleDiv}>
            <input ref={inputRef} placeholder="enter english" style={styleInput} />
          </div>
          <div style={{display: "flex", gap: 8}}>
            <button type="button" onClick={handleHide}>{hide ? "Show" : "Hide"}</button>
            {!hide && <p>{vocabulary.en}</p>}
          </div>
        </form>
        <div style={{ marginTop: 32 }}>
          <button onClick={() => setShowList((pre) => !pre)}>Show list</button>
          <ol>
            {showList &&
              VOCABULARY.map((vocal) => (
                <li key={vocal.id}>
                  <strong>{vocal.en}{vocal.type ? `(${vocal.type})` : ""}</strong>: {vocal.vi}
                </li>
              ))}
          </ol>
        </div>
      </div>
    </>
  );
}
