import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MusicButton } from "../components/MusicButton";
import ProgressCircle from "../components/ProgressCircle";
import Timer from "../components/Timer";
import style from "./Quiz.module.css";

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const dataRef = useRef(false);

  useEffect(() => {
    if (dataRef.current === false) {
      const fetchQuestions = async () => {
        const response = await fetch(
          `https://the-trivia-api.com/api/questions?categories=${location.state?.category}&limit=${location.state?.count}&difficulty=${location.state?.level}`
        );
        const json = await response.json();
        console.log(json);
        setData(json);
        MusicButton(true);
      };

      fetchQuestions();

      return () => (dataRef.current = true);
    }
  }, []);

  return (
    <>
      {data ? (
        <Timer>
          <div>
            <h2>{data[0].question}</h2>
          </div>
          <div className={style.gridChoices}>
            {data[0].incorrectAnswers.map((value) => (
              <button key={value}>{value}</button>
            ))}
            <button>{data[0].correctAnswer}</button>
          </div>
        </Timer>
      ) : (
        <ProgressCircle />
      )}
    </>
  );
};

export default Quiz;
