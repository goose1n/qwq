import React from "react";
import SubBlock from "../../UI/SubBlock/SubBlock";
import BlueBtn from "../../UI/BlueBtn/BlueBtn";
import ShopCard from "../../UI/ShopCards/Shop_Card";
import styles from "./ShopSingle.module.css";

const ShopSingle = () => {
  return (
    <div className={styles.shopSingle_cont}>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>Shop Single</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.imgCont}>
          <img
            className={styles.img}
            src="./public/imgProj/photos/shopsin.png"
          />
          <button className={styles.category}>Millets</button>
        </div>
        <div className={styles.textCont}>
          <h1 className={styles.title}>Health Pistachios</h1>
          <div className={styles.stars}>
            <img src="./public/imgProj/icon/star.png" />
            <img src="./public/imgProj/icon/star.png" />
            <img src="./public/imgProj/icon/star.png" />
            <img src="./public/imgProj/icon/star.png" />
            <img src="./public/imgProj/icon/star.png" />
          </div>
          <div className={styles.cost}>
            <p className={styles.before}>$20.00</p>
            <p className={styles.after}>$13.00</p>
          </div>
          <p className={styles.someText}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className={styles.quantityCont}>
            <p className={styles.quantity}>Quantity :</p>
            <input type="text" />
            <BlueBtn text="Add To Cart" />
          </div>
        </div>
      </div>
      <div className={styles.middleContent}>
        <div className={styles.buttons}>
          <button className={styles.blue}>Product Description</button>
          <button className={styles.grey}>Additional Info</button>
        </div>
        <p className={styles.middleText}>
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, ecology,
          and care. We aim to give our customers a healthy chemical-free meal
          for perfect nutrition. It offers about 8–10% carbs. Simple sugars —
          such as glucose and fructose — make up 70% and 80% of the carbs in
          raw.
        </p>
      </div>
      <div className={styles.bottomContent}>
        <h1 className={styles.bottomTitle}>Related Products</h1>
        <div className={styles.cards}>
          <ShopCard
            category="Vegetables"
            img="./public/imgProj/photos/broccoli.png"
            name="Calabrese Broccoli"
          />
          <ShopCard
            category="Fresh"
            img="./public/imgProj/photos/banana.png"
            name="Fresh Banana Fruites"
            before="$20.00"
            cost="$14.00"
          />
          <ShopCard
            category="Millets"
            img="./public/imgProj/photos/cashew.png"
            name="White Nuts"
            before="$20.00"
            cost="$15.00"
          />
          <ShopCard
            category="Vegetable"
            img="./public/imgProj/photos/tomato.png"
            name="Vegan Red Tomato"
            before="$20.00"
            cost="$17.00"
          />
        </div>
      </div>
      <SubBlock />
    </div>
  );
};

export default ShopSingle;
