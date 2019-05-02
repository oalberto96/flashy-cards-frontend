import React from "react";
import * as styles from "./style.module.css";

const MenuOption = ({ title, icon, alt, onClick }) => {
  return (
    <div className="col" onClick={onClick}>
      <div className={styles.container}>
        <img src={icon} className={`img-fluid ${styles.icon}`} alt={alt} />
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default MenuOption;
