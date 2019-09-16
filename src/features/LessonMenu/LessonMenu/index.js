import React from "react";
import MenuOption from "../MenuOption";
import * as styles from "./style.module.css";
import studyIcon from "../../../img/icons/description.svg";
import playIcon from "../../../img/icons/play_circle.svg";
import editIcon from "../../../img/icons/edit.svg";
import scoreIcon from "../../../img/icons/bar_chart.svg";

const LessonMenu = ({ lesson, history }) => {
  return (
    <div className={`container ${styles.container}`}>
      <h2>{lesson.name}</h2>
      <p>{lesson.description}</p>
      <h3 className={styles.callToAction}>What would you like to do?</h3>
      <div className={`row ${styles.optionsWrapper}`}>
        <MenuOption
          title="Study"
          icon={studyIcon}
          alt="Study option"
          onClick={() => history.push(`/lessons/${lesson.id}`)}
        />
        <MenuOption
          title="Play"
          icon={playIcon}
          alt="Play option"
          onClick={() => history.push(`/lessons/${lesson.id}/training`)}
        />
      </div>
      <div className={`row ${styles.optionsWrapper}`}>
        <MenuOption
          title="Edit"
          icon={editIcon}
          alt="Edit option"
          onClick={() => history.push(`/lessons/${lesson.id}/edit`)}
        />
        <MenuOption
          title="Score"
          icon={scoreIcon}
          alt="Score option"
          onClick={() => history.push(`/lessons/${lesson.id}/score`)}
        />
      </div>
    </div>
  );
};

export default LessonMenu;
