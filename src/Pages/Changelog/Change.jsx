import React from "react";
import SubBlock from "../../UI/SubBlock/SubBlock";
import styles from "./Change.module.css";

const Change = () => {
  return (
    <div className={styles.Changecont}>
      <div className={styles.ChangeBlock}>
        <h1 className={styles.ChangeBlock_title}>Changelog</h1>
        <img
          className={styles.ChangeImg}
          src="./public/ImgProj/banners/lic1.png"
          alt=""
        />
      </div>
      <div className={styles.change}>
        <img src="./public/ImgProj/photos/change.jpg" alt="" />
        <h1 className={styles.v}>V.1</h1>
        <p className={styles.ChangeP}>
          Initial Organick Webflow Template Release
        </p>
      </div>

      <SubBlock />
    </div>
  );
};

export default Change;
