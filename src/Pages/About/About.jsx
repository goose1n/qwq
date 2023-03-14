import React from "react";
import SubBlock from "../../UI/SubBlock/SubBlock";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutCont}>
      <div className={styles.aboutBlock}>
        <h1 className={styles.aboutBlock_title}>About Us</h1>
      </div>
      <div className={styles.aboutCont_first}>
        <div className={styles.aboutCont_first_img}>
          <img
            className={styles.aboutCont_first_img}
            src="./public/imgProj/photos/about1.png"
            alt=""
          />
        </div>
        <div className={styles.aboutCont_first_text}>
          <p className={styles.aboutCont_first_text_yellow}>About Us</p>
          <h1 className={styles.aboutCont_first_text_title}>
            We do Creative Things for Success
          </h1>
          <p className={styles.aboutCont_first_text_sub}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <br />
          <p className={styles.aboutCont_first_text_sub}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
      </div>
      <SubBlock />
    </div>
  );
};

export default About;
