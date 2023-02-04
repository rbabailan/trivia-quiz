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
    const passingScore = Math.round(location.state?.countQuestions / 2);
    if (location.state?.score < passingScore) {
      return "Nice try Mate.";
    } else {
      return "Congratulations!";
    }
  }

  return (
    <div className={style.resultContainer}>
      <div className={style.content}>
        <div className={style.buttonContainer}>
          <div className={style.absolutePosi}>
            <h2>{`${location.state?.score} out of ${location.state?.countQuestions}`}</h2>
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
              onClick={() => navigate("/", { state: {} })}>
              Back To Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
