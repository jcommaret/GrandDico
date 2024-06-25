import React from "react";
import data from "./assets/data/mots.json";
import { useEffect, useState } from "react";

const getWords = (jsonData) => {
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

const getFormes = (jsonData) => {
  const traverse = (obj, keysOfInterest) => {
    for (let key in obj) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        traverse(obj[key], keysOfInterest);
      } else if (keysOfInterest.includes(key)) {
        formes.push(obj[key]);
      }
    }
  };
  const formes = [];
  const keysOfInterest = ["formes"];
  traverse(jsonData, keysOfInterest);
  return formes;
};

const wordBlock = (words, formes) => {
  return words.map((word, index) => (
    <li key={index}>
      {word} <br />
      <b>Formes :</b> {formes[index]}
      <br />
    </li>
  ));
};

const App = () => {
  const [words, setWords] = useState([]);
  const [formes, setFormes] = useState([]);

  useEffect(() => {
    const extractedWords = getWords(data);
    const extractedFormes = getFormes(data);
    setWords(extractedWords);
    setFormes(extractedFormes);
  }, []);
  return (
    <div>
      <h1>Liste des mots</h1>
      <ul>{wordBlock(words, formes)}</ul>
    </div>
  );
};

export default App;
