import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { playTimer } from "../../components/SoundEffects/playTimer";
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle";
import Questions from "../../components/Questions/Questions";
import Timer from "../../components/Timer/Timer";

const Quiz = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const dataRef = useRef(false);

  useEffect(() => {
    if (location.state !== null) {
      if (dataRef.current === false) {
        const fetchQuestions = async () => {
          const response = await fetch(
            `https://the-trivia-api.com/api/questions?categories=${location.state?.category}&limit=${location.state?.count}&difficulty=${location.state?.level}`
          );
          const json = await response.json();
          setData(json);
          playTimer(location.state?.sound);
        };
        fetchQuestions();
        return () => (dataRef.current = true);
      }
    } else {
      navigate("/");
    }
  }, []);

  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (data !== null) {
      if (data.length > currQues) {
        setOptions(
          data &&
            handleShuffle([
              data[currQues]?.correctAnswer,
              ...data[currQues]?.incorrectAnswers,
            ])
        );
      }
    }
  }, [currQues, data]);

  if (data !== null) {
    if (currQues + 1 > data.length) {
      setTimeout(() => {
        navigate("/result", {
          state: {
            score: score,
            countQuestions: data.length,
            count: location.state?.count,
            category: location.state?.category,
            level: location.state?.level,
          },
          replace: true,
        });
      }, 250);
    }
  }

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <>
      {data && data.length > currQues ? (
        <Timer>
          <Questions
            currQues={currQues}
            answers={options}
            setCurrQues={setCurrQues}
            questions={data}
            correct={data[currQues].correctAnswer}
            setScore={setScore}
            score={score}
          />
        </Timer>
      ) : (
        <ProgressCircle />
      )}
    </>
  );
};

export default Quiz;
