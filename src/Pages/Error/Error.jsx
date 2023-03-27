import React from "react";
import Links from "../../UI/Links/Links";
import styles from "./Error.module.css";

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
        <div className={styles.errorButton}>
          <a className={styles.errorLink} href="/">
            Go to Homepage
          </a>
          <img src="./public/imgProj/icon/Aerrow.png" alt="123" />
        </div>
      </div>
    </div>
  );
};

export default Error;
