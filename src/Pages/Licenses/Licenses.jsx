import React from "react";
import SubBlock from "../../UI/SubBlock/SubBlock";
import styles from "./Licenses.module.css";

const Licenses = () => {
  return (
    <div className={styles.licensesCont}>
      <div className={styles.licBlock}>
        <h1 className={styles.licBlock_title}>Licenses</h1>
        <img className={styles.licImg} src="./public/ImgProj/banners/lic1.png" alt="" />
      </div>
      <div className={styles.licBlock_text}>
        <div className={styles.licBlock_subtitle}>
          <div className={styles.licBlock_text__h1}>
            <h1 className={styles.licBlock_text__h1}>Icon & Graphics</h1>
          </div>
          <div className={styles.licBlock_text__p}>
            <p className={styles.licBlock_text__p}>
              Icons and Graphics are manually designed by the VictorFlow
              Templates team. You may download these and edit them to fit your
              website without asking for permission or providing credit.
            </p>
            <br />
            <p className={styles.licBlock_text__p}>
              Upon purchasing Software UI Kit Template our team grants you a
              nonexclusive, worldwide copyright license to download, copy,
              modify, and use the icons.
            </p>
          </div>
        </div>
        <div className={styles.licBlock_subtitle}>
          <div className={styles.licBlock_text__h1}>
            <h1 className={styles.licBlock_text__h1}>Photography</h1>
          </div>
          <div className={styles.licBlock_text__p}>
            <p className={styles.licBlock_text__p}>
              All images used in the Organick Webflow Template are licensed for
              free personal and commercial use. If you'd like to use any
              specific image, you can check the licenses and download the images
              for free on Unsplash, Pexels‍. And Freepik.
            </p>
            <br />
            <h1 className={styles.licBlock_title_p}>Unsplash</h1>
            <p className={styles.licBlock_text__p}>
              Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
              Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image
              14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20,
              Image 21, Image 22, Image 23, Image 24, Image 25,
            </p>
            <br />
            <h1 className={styles.licBlock_title_p}>Pixcel</h1>
            <p className={styles.licBlock_text__p}>
              Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
              Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image
              14, Image 15, Image 16, Image 17,{" "}
            </p>
          </div>
        </div>
        <div className={styles.licBlock_subtitle}>
          <div className={styles.licBlock_text__h1}>
            <h1 className={styles.licBlock_text__h1}>Font</h1>
          </div>
          <div className={styles.licBlock_text__p}>
            <p className={styles.licBlock_text__p}>
              Organick template uses free licensed Google Fonts. Please check{" "}
              <span className={styles.licBlock_text__p_span}>
                Roboto, Yellowtail
              </span>{" "}
              and{" "}
              <span className={styles.licBlock_text__p_span}>Open Sans</span> .
            </p>
          </div>
        </div>
      </div>
      <SubBlock/>
    </div>
  );
};

export default Licenses;
