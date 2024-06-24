import React from "react";
import data from "./assets/data/mots.json";
import { useEffect, useState } from "react";

const extractWords = (jsonData) => {
  const traverse = (obj, keysOfInterest) => {
    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        traverse(obj[key], keysOfInterest);
      } else if (keysOfInterest.includes(key)) {
        words.push(obj[key]);
      }
    }
  };
  const words = [];
  const keysOfInterest = ["mot"];
  traverse(jsonData, keysOfInterest);
  return words;
};

const App = () => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const extractedWords = extractWords(data);
    setWords(extractedWords);
  }, []);

  return (
    <div>
      <h1>Liste des mots</h1>
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
