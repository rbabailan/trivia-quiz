import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Alert from "../Alert/Alert";
import style from "./Questions.module.css";
import TopDrawer from "../drawer/TopDrawer";

const Questions = ({
  currQues,
  questions,
  answers,
  setCurrQues,
  correct,
  score,
  setScore,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState();
  const [alerted, isAlert] = useState();

  const handleNext = () => {
    if (currQues + 1 === questions.length) {
      navigate("/result", {
        state: {
          score: score,
          countQuestions: questions.length,
          count: location.state?.count,
          category: location.state?.category,
          level: location.state?.level,
        },
        replace: true,
      });
    }
  };

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return style.select;
    else if (selected === i && selected !== correct) return style.wrong;
    else if (selected !== i && i !== correct) return style.unpick;
    else if (i === correct) return style.select;
  };

  const handleAlert = (i) => {
    if (selected === i && selected === correct) return "correct";
    else if (selected === i && selected !== correct) return "incorrect";
    else if (i === correct) return style.select;
  };

  const handleCheck = (i) => {
    setSelected(i);
    isAlert(true);
    if (i === correct) {
      setScore(score + 1);
      setTimeout(() => {
        setSelected();
        isAlert(false);
        setCurrQues(currQues + 1);
      }, 2000);
    } else {
      setTimeout(() => {
        setSelected();
        isAlert(false);
        setCurrQues(currQues + 1);
      }, 2000);
    }
    handleNext();
  };

  return (
    <>
      {alerted && <Alert correct={handleAlert(selected)} />}
      <div className={style.container}>
        <TopDrawer
          currentQuestion={currQues}
          countQuestions={questions.length}
        />
        <div className={style.questionPanel}>
          <div className={style.questionWrapper}>
            <h2>{questions[currQues].question}</h2>
          </div>
        </div>
        <div className={style.answersWrapper}>
          {answers &&
            answers.map((i) => (
              <button
                className={`${style.answersButton} ${
                  selected && handleSelect(i)
                }`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}>
                {i}
              </button>
            ))}
        </div>
      </div>
    </>
  );
};

export default Questions;
