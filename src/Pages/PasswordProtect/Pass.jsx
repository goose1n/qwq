import React from "react";
import SubBlock from "../../UI/SubBlock/SubBlock";
import styles from "./Pass.module.css";

const Pass = () => {
  return (
    <div className={styles.passCont}>
      <div className={styles.passBlock}>
        <h1 className={styles.passBlock_title}>Protected Page</h1>
        <img
          className={styles.passImg}
          src="./public/ImgProj/banners/lic1.png"
          alt=""
        />
      </div>
      <div className={styles.passWindow}>
        <div className={styles.passWindow_img}>
          <img src="./public/ImgProj/photos/pass.png" alt="123" />
        </div>
        <div className={styles.passWindow_text}>
          <p className={styles.passWindow_text_title}>Password</p>
          <input className={styles.passWindow_text_input} type="text" placeholder="Enter Your Password"/>
          <div className={styles.errorButton}>
          <a className={styles.errorLink} href="/">
            Send Now
          </a>
          <img src="./public/imgProj/icon/Aerrow.png" alt="123" />
        </div>
        </div>
      </div>
      <SubBlock />
    </div>
  );
};

export default Pass;
