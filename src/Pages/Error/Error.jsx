import React from "react";
import Links from "../../UI/Links/Links";
import styles from "./Error.module.css";
import BlueBtn from '../../UI/BlueBtn/BlueBtn'

const Error = () => {
  return (
    <div className={styles.errorCont}>
      <div className={styles.errorContText}>
        <img
          className={styles.errorImg}
          src="./public/imgProj/icon/404.png"
          alt="error"
        />
        <h1 className={styles.errorTitle}>Page not found</h1>
        <p className={styles.errorSubtitle}>
          The page you are looking for doesn't exist or has been moved..
        </p>
        <BlueBtn text="Go To Homepage"/>
      </div>
    </div>
  );
};

export default Error;
