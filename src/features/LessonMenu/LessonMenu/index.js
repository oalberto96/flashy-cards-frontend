import React from "react";
import MenuOption from "../MenuOption";
import * as styles from "./style.module.css";
import studyIcon from "../../../img/icons/description.svg";
import playIcon from "../../../img/icons/play_circle.svg";
import editIcon from "../../../img/icons/edit.svg";
import scoreIcon from "../../../img/icons/bar_chart.svg";

const LessonMenu = () => {
  return (
    <div className="container">
      <div>Title</div>
      <p>Description</p>

      <h2>What would you like to do?</h2>

      <div className="row">
        <MenuOption title="Study" icon={studyIcon} alt="Study option" />
        <MenuOption title="Play" icon={playIcon} alt="Play option" />
      </div>
      <div className="row">
        <MenuOption title="Edit" icon={editIcon} alt="Edit option" />
        <MenuOption title="Score" icon={scoreIcon} alt="Score option" />
      </div>
    </div>
  );
};

export default LessonMenu;
