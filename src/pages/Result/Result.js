import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "./Result.module.css";

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.state);
    if (location.state === null) {
      navigate("/", { replace: true });
    }
  }, []);

  function Rate() {
    if (location.state?.score === location.state?.countQuestions) {
      return "Perfect";
    } else {
      return "Noob";
    }
  }

  return (
    <div className={style.resultContainer}>
      <div className={style.content}>
        <div className={style.buttonContainer}>
          <div clasName={style.absolutePosi}>
            <h2>{`Your Score : ${location.state?.score} / ${location.state?.countQuestions}`}</h2>
            <h2>{Rate()}</h2>
          </div>
        </div>
        <div className={style.buttonContainer}>
          <div className={style.buttonWrapper}>
            <button
              className={style.resultButton}
              onClick={() =>
                navigate("/quiz", {
                  state: {
                    count: location.state?.count,
                    category: location.state?.category,
                    level: location.state?.level,
                  },
                })
              }>
              Try again
            </button>
          </div>
          <div className={style.buttonWrapper}>
            <button
              className={style.resultButton}
              onClick={() => navigate("/")}>
              Back To Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
