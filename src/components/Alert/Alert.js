import style from "./Alert.module.css";

const Alert = (props) => {
  if (props.correct === "correct") {
    return (
      <div className={style.correctAlertWrapper}>
        <h2>Correct Answer!</h2>
      </div>
    );
  } else {
    return (
      <div className={style.incorrectAlertWrapper}>
        <h2>Incorrect Answer!</h2>
      </div>
    );
  }
};

export default Alert;
