import React from "react";
import BlueBtn from "../../UI/BlueBtn/BlueBtn";
import ShopCard from "../../UI/ShopCards/ShopCard";
import SubBlock from "../../UI/SubBlock/SubBlock";
import YellowBtn from "../../UI/YellowBtn/YellowBtn";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeFirst}>
        <div className={styles.firstText}>
          <p className={styles.yellow}>100% Natural Food</p>
          <h1 className={styles.firstTitle}>
            Choose the best healthier way of life
          </h1>
          <YellowBtn text="Explore Now" />
        </div>
      </div>
      <div className={styles.homeSecond}>
        <div className={styles.secondFirst}>
          <div className={styles.second_text}>
            <p className={styles.secondFirst_yellow}>Natural!!</p>
            <h1 className={styles.secondFirst_title}>
              Get Garden Fresh Fruits
            </h1>
          </div>
        </div>
        <div className={styles.secondSecond}>
          <div className={styles.second_text}>
            <p className={styles.yellow}>Offer!!</p>
            <h1 className={styles.secondTitle}>Get 10% off on Vegetables</h1>
          </div>
        </div>
      </div>
      <div className={styles.homeThird}>
        <div>
          <img
            className={styles.thirdImg}
            src="./public/imgProj/photos/citrus.png"
            alt=""
          />
        </div>
        <div className={styles.thirdText}>
          <p className={styles.yellow}>About Us</p>
          <h1 className={styles.thirdTitle}>
            We Believe in Working Accredited Farmers
          </h1>
          <p className={styles.thirdSub}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className={styles.thirdBlock}>
            <div className={styles.thirdBlock_img}>
              <img src="./public/imgProj/icon/third1.png" alt="" />
            </div>
            <div className={styles.thirdBlock_text}>
              <h1>Organic Foods Only</h1>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <div className={styles.thirdBlock}>
            <div className={styles.thirdBlock_img}>
              <img src="./public/imgProj/icon/Mailbox.png" alt="" />
            </div>
            <div className={styles.thirdBlock_text}>
              <h1>Quality Standards</h1>
              <p>
                Simply dummy text of the printing and typesetting industry.
                Lorem Ipsum
              </p>
            </div>
          </div>
          <BlueBtn text="Shop Now" />
        </div>
      </div>
      <div className={styles.fourthCont}>
        <p className={styles.yellow}>Categories </p>
        <h1 className={styles.fourthTitle}>Our Products</h1>
        <div className={styles.fourthCards}>
          <ShopCard category="fruit" img="./public/imgProj/photos/Broccolinobcg.png"/>
        </div>
      </div>
      <SubBlock />
    </div>
  );
};

export default Home;
