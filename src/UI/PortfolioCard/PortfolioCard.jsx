import React from "react";
import styles from "./PortfolioCard.module.css";

const PortfolioCard = ({ img, name, work }) => {
  return (
    <div className={styles.PortfolioCard_cont}>
      <img className={styles.img} src={img} alt="" />
      <div className={styles.opacity}>
        <img src=".\public\ImgProj\icon\icon.png" alt="" />
      </div>
      <h1 className={styles.name}>{name}</h1>
      <p className={styles.work}>{work}</p>
    </div>
  );
};

export default PortfolioCard;
