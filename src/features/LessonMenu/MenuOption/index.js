import React from "react";
import * as styles from "./style.module.css";

const MenuOption = ({ title, icon, alt }) => {
  return (
    <div className="col">
      <div className={styles.container}>
        <img src={icon} className={`img-fluid ${styles.icon}`} alt={alt} />
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default MenuOption;
