import React from "react";
import SubBlock from "../../UI/SubBlock/SubBlock";
import styles from "./StylePage.module.css";

const Style = () => {
  return (
    <div className={styles.Stylecontainer}>
      <p>hello</p>
      <div className={styles.styleBlock}>
        <h1 className={styles.styleBlock_title}>Style Guide</h1>
        <img
          className={styles.styleImg}
          src="./public/ImgProj/banners/lic1.png"
          alt=""
        />
      </div>

      <div className={styles.styleBlockColor}>
        <h1 className={styles.styleTextColor}>Color</h1>
        <div className={styles.gridBlock}>
          <div className={styles.grid}>
            <p className={styles.styleP}>#274C5B</p>
          </div>
          <div className={styles.grid}>
            <p className={styles.styleP}>#7EB693</p>
          </div>
          <div className={styles.grid}>
            <p className={styles.styleP}>#EFD372</p>
          </div>
          <div className={styles.grid}>
            <p className={styles.styleP}>#D4D4D4</p>
          </div>
          <div className={styles.grid}>
            <p className={styles.styleP}>#F9F8F8</p>
          </div>
          <div className={styles.grid}>
            <p className={styles.styleP}>#EFF6F1</p>
          </div>
          <div className={styles.grid}>
            <p className={styles.styleP}>#525C60</p>
          </div>
        </div>
      </div>

      <div className={styles.styleBlockcont}>
        <h1 className={styles.TextStyle}>Text Styles</h1>
        <div className={styles.styleH}>
          <h1>Display H1 Text</h1>
          <br />
          <h2>Heading H2 Text</h2>
          <br />
          <h3>Heading H3 Text</h3>
          <br />
          <h4>Heading H4 Text</h4>
          <br />
          <h5>Heading H5 Text</h5>
          <br />
          <h6>Heading H6 Text</h6>
        </div>
      </div>

      <div className={styles.styleBlockP}>
        <h1 className={styles.paraH}>Paragraph</h1>
        <p className={styles.styleParagraf}>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy <br /> text ever since
          the 1500s, when an unknown printer took a galley.established fact that
          a reader will be distracted by the <br /> readable content of a page
          when looking at its layout. The point of using Lorem Ipsum is that it
          has a more-or-less <br /> normal distribution of letters, as opposed.
        </p>
      </div>
      <div className={styles.styleList}>
        <h1 className={styles.List}>List</h1>
        <p className={styles.ListP}>
          1. Publishing packages and web pageLorem Ipsum as their default.{" "}
          <br /> 2. Content here, content here', making it look like readable.{" "}
          <br /> 3. Packages and web pageLorem Ipsum as their default
        </p>
      </div>
      <div className={styles.styleTextQ}>
        <h1 className={styles.textQ}>Quotes</h1>
        <p className={styles.QtextP}>
          “The first rule of any organic used in a business is that nature
          applied to an <br /> efficient operation will magnify the efficiency.
          The second is that organic applied <br /> to an inefficient operation
          will magnify the health.”
        </p>
      </div>

      <div className={styles.BlockButton}>
        <h1 className={styles.ButtonH}>Button</h1>
        <div className={styles.ButtonBlock}>
          <h3 className={styles.ButtonTextImg}>
            {" "}
            Default Button
            <img src="./public/imgProj/icon/Aerrow.png" alt="123" />
          </h3>
        </div>
      </div>

      <div className={styles.BlockButton1}>
        <div className={styles.ButtonBlock1}>
          <h3 className={styles.ButtonTextImg1}>
            {" "}
            Default Button
            <img src="./public/imgProj/icon/Aerrow.png" alt="123" />
          </h3>
        </div>
      </div>

      <div className={styles.BlockButton2}>
        <div className={styles.ButtonBlock2}>
          <h3 className={styles.ButtonTextImg2}>
            {" "}
            Default Button
            <img src="./public/imgProj/icon/Aerrow.png" alt="123" />
          </h3>
        </div>
      </div>

      <div className={styles.BlockButton3}>
        <div className={styles.ButtonBlock3}>
          <h3 className={styles.ButtonTextImg3}>
            {" "}
            Default Button
            <img src="./public/imgProj/icon/Aerrow.png" alt="123" />
          </h3>
        </div>
      </div>

      <SubBlock />
    </div>
  );
};

export default Style;
