import React from "react";
import MenuOption from "../MenuOption";
import * as styles from "./style.module.css";
import studyIcon from "../../../img/icons/description.svg";
import playIcon from "../../../img/icons/play_circle.svg";
import editIcon from "../../../img/icons/edit.svg";
import scoreIcon from "../../../img/icons/bar_chart.svg";

const LessonMenu = () => {
  return (
    <div>
      <div>Title</div>
      <p>Description</p>

      <h2>What would you like to do?</h2>

      <div className="row">
        <MenuOption title="Study" icon={studyIcon} />
        <MenuOption title="Play" icon={playIcon} />
      </div>
      <div className="row">
        <MenuOption title="Edit" icon={editIcon} />
        <MenuOption title="Score" icon={scoreIcon} />
      </div>
    </div>
  );
};

export default LessonMenu;
