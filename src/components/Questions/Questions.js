import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Questions.module.css";

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
  const [selected, setSelected] = useState();

  console.log(selected);
  const handleNext = () => {
    if (currQues + 1 === questions.length) {
      navigate("/result", { state: { score: score }, replace: true });
    }
  };

  console.log(currQues);

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
      setTimeout(() => {
        setSelected();
        setCurrQues(currQues + 1);
      }, 3000);
    } else {
      setTimeout(() => {
        setSelected();
        setCurrQues(currQues + 1);
      }, 3000);
    }
    handleNext();
  };

  return (
    <div className={style.container}>
      <h1>{`Question ${currQues + 1}/${questions.length}`}</h1>
      <div className={style.questionWrapper}>
        <h2>{questions[currQues].question}</h2>
      </div>
      <div className={style.answersWrapper}>
        {answers &&
          answers.map((i) => (
            <button
              className={`${style.answersButton} ${
                selected && handleSelect(i)
              }`}
              key={i}
              disabled={selected}
              onClick={() => handleCheck(i)}>
              {i}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Questions;
