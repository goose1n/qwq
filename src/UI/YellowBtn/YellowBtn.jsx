import React from "react";
import styles from "./YellowBtn.module.css";
import { NavLink } from "react-router-dom";

const YellowBtn = ({ text, to }) => {
  return (
    <div className={styles.btnCont}>
      <NavLink to={to}>
        <button className={styles.btn}>
          {text}
          <span>
            <img src="./public\ImgProj\icon\Aerrow.png" alt="123" />
          </span>
        </button>
      </NavLink>
    </div>
  );
};

export default YellowBtn;
