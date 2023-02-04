//import styles 👇
import style from "./TopBar.module.css";
import "react-modern-drawer/dist/index.css";

const TopBar = ({ currentQuestion, countQuestions }) => {
  return (
    <>
      <div className={style.questionsBoard}>
        <h2>{`${currentQuestion} / ${countQuestions}`}</h2>
      </div>
    </>
  );
};

export default TopBar;
