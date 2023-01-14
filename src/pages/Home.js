import { useState } from "react";

import { Link } from "react-router-dom";
import style from "./home.module.css";
import { validateValue } from "../functions/validateValue";
import { sound } from "../data/soundData";

//Import Pages && Components

const Home = () => {
  localStorage.setItem("playSound", sound);
  const questionsData = ["5", "10", "15", "20"];
  const categoriesData = [
    "Arts & Literature",
    "Film & TV",
    "History",
    "Music",
    "Geography",
    "General Knowledge",
    "Food & Drink",
    "Science",
    "Society & Culture",
    "Sport & Leisure",
  ];

  const levelData = ["Easy", "Medium", "Hard"];

  const [questions, setQuestions] = useState("5");
  const [level, setLevel] = useState("easy");
  const [category, setCategory] = useState(randomCategory());

  function randomCategory() {
    const generateNumbers = Math.floor(Math.random() * 9) + 1;
    return validateValue(categoriesData[generateNumbers]);
  }

  return (
    <div className={style.homeContainer}>
      <div className={style.content}>
        <div className={style.selectWrapper}>
          <h2>Trivia Questions</h2>
          <label htmlFor={category}>Select Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            {categoriesData.map((value, index) => (
              <option key={index} value={validateValue(value)}>
                {value}
              </option>
            ))}
          </select>
          <label htmlFor={level}>Select Level</label>
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            {levelData.map((value, index) => (
              <option key={index} value={validateValue(value)}>
                {value}
              </option>
            ))}
          </select>
          <label htmlFor={questions}>How Many Questions?</label>
          <select
            value={questions}
            onChange={(e) => setQuestions(e.target.value)}>
            {questionsData.map((value, index) => (
              <option key={index} value={validateValue(value)}>
                {value}
              </option>
            ))}
          </select>
          <Link
            to="/quiz"
            state={{
              count: questions,
              level: level,
              category: category,
            }}>
            <button>
              <p>Start</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
