import React from "react";
import Drawer from "react-modern-drawer";
import { useState } from "react";

//import styles 👇
import style from "./TopDrawer.module.css";
import "react-modern-drawer/dist/index.css";
import showIcon from "../../img/downArrow.svg";
import closeIcon from "../../img/upArrow.svg";

const TopDrawer = ({ currentQuestion, countQuestions }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [test, setTest] = useState(false);

  return (
    <>
      {test ? (
        <>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="top"
            size={"min-content"}
            style={{ backgroundColor: "#808080" }}
            enableOverlay={false}>
            <div className={style.questionsBoard}>
              <h2>{`${currentQuestion} of ${countQuestions}`}</h2>
            </div>

            <div className={style.clossButtonWrapper}>
              <button className={style.arrowButton} onClick={toggleDrawer}>
                <img src={isOpen ? closeIcon : showIcon} />
              </button>
            </div>
          </Drawer>
          <div className={style.showButtonWrapper}>
            <button className={style.arrowButton} onClick={toggleDrawer}>
              <img src={showIcon} />
            </button>
          </div>
        </>
      ) : (
        <div className={style.questionsBoard}>
          <h2>{`${currentQuestion} of ${countQuestions}`}</h2>
        </div>
      )}
    </>
  );
};

export default TopDrawer;
