import { useEffect, useState } from "react";
import { validateValue, randomCategory } from "../../functions/functions";
import { levelData, categoriesData, questionsData } from "../../data/Datas";
import { useNavigate } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState("5");
  const [level, setLevel] = useState("easy");
  const [category, setCategory] = useState(randomCategory(categoriesData));
  const [soundEffects, isSoundEffects] = useState(true);
  const [submit, isSubmit] = useState(false);

  useEffect(() => {
    if (submit !== false) {
      navigate("/quiz", {
        state: {
          count: questions,
          category: category,
          level: level,
          sound: soundEffects,
        },
      });
    }
  });

  return (
    <div className={style.homeContainer}>
      <div>
        <img />
      </div>
      <div className={style.content}>
        <div className={style.logoWrapper}>
          <img
            className={style.homeLogo}
            src="https://ik.imagekit.io/f2ityjkpdv/logo-min.png?tr=w-150,h-150"
            srcSet="https://ik.imagekit.io/f2ityjkpdv/logo-min.png?tr=w-480,h-480 480w
            "
            alt="Trivia Quiz Logo"
            height="100px"
          />
        </div>
        <div className={style.selectWrapper}>
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
        </div>
        <div className={style.buttonWrapper}>
          <button className={style.homeButton} onClick={() => isSubmit(true)}>
            <p>START</p>
          </button>
        </div>
        <div className={style.checkBoxWrapper}>
          <label htmlFor="soundEffects">Sound SFX</label>
          <input
            type="checkbox"
            name="soundEffects"
            onChange={() => isSoundEffects(!soundEffects)}
            checked={soundEffects}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
