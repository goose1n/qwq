import React from "react";
import styles from './BloSin.module.css'
import SubBlock from "../../UI/SubBlock/SubBlock";

const BloSin = () => {
  return (
    <div>
      <div className={styles.bannerBloSin3}>
      <h1>hello</h1>
      </div> 

      <div className="subtitle">
        <h3>Make perfect organic product with us</h3>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
        
      </div>
      <SubBlock />
    </div>
  );
};

export default BloSin;
