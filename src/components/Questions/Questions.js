import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Alert from "../Alert/Alert";
import style from "./Questions.module.css";
import TopBar from "../TopBar/TopBar";

const Questions = ({
  setScore,
  score,
  currQues,
  questions,
  answers,
  setCurrQues,
  correct,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState();
  const [alerted, isAlert] = useState();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return style.select;
    } else if (selected === i && selected !== correct) {
      return style.wrong;
    } else if (selected !== i && i !== correct) {
      return style.unpick;
    } else if (i === correct) {
      return style.select;
    }
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
      handleNext();
    } else {
      handleNext();
    }
  };

  const handleNext = () => {
    if (currQues + 1 > questions.length) {
      setTimeout(() => {
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
      }, 2000);
    } else {
      setTimeout(() => {
        setSelected();
        isAlert(false);
        setCurrQues(currQues + 1);
      }, 2000);
    }
  };

  return (
    <>
      <div>{alerted && <Alert correct={handleAlert(selected)} />}</div>
      <div className={style.container}>
        <TopBar
          currentQuestion={currQues + 1}
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
