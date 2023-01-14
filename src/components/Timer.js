import { useEffect, useState } from "react";
import style from "./Timer.module.css";

const Timer = ({ children }) => {
  const [visible, isVisible] = useState(false);
  const [countDown, setCountDown] = useState(3);
  const [activeSound, setActiveSound] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((countDown) => countDown - 1);
    }, 1000);

    if (countDown === 0) {
      isVisible(true);
    }

    return () => clearInterval(interval);
  }, [countDown]);

  return (
    <>
      {visible ? (
        <div>{children}</div>
      ) : (
        <div className={style.timerWrapper}>
          <h2>{countDown}</h2>
        </div>
      )}
    </>
  );
};

export default Timer;
