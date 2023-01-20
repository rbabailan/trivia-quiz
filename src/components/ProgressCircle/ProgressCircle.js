import style from "./ProgressCircle.module.css";

const ProgressCircle = () => {
  return (
    <div className={style.progressWrapper}>
      <div className={style.progressStyles}></div>
    </div>
  );
};

export default ProgressCircle;
