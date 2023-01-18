import { useEffect, useState } from "react";
import style from "./Home.module.css";
import { validateValue } from "../../functions/validateValue";
import { levelData, categoriesData, questionsData } from "../../data/soundData";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState("5");
  const [level, setLevel] = useState("easy");
  const [category, setCategory] = useState(randomCategory());
  const [submit, isSubmit] = useState(false);

  useEffect(() => {
    if (submit !== false) {
      navigate("/quiz", {
        state: {
          count: questions,
          category: category,
          level: level,
        },
      });
    }
  });

  function randomCategory() {
    const generateNumbers = Math.floor(Math.random() * 9) + 1;
    return validateValue(categoriesData[generateNumbers]);
  }

  return (
    <div className={style.homeContainer}>
      <div className={style.content}>
        <div className={style.selectWrapper}>
          <h2>
            <span>T</span>RIVIA <span>Q</span>UIZ
          </h2>
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
          <div className={style.buttonWrapper}>
            <button className={style.homeButton} onClick={() => isSubmit(true)}>
              <p>START</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
