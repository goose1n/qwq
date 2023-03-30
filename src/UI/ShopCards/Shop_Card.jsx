import React from "react";
import styles from "./ShopCard.module.css";
import Links from "../Links/Links";
import Cart from "../Cart/Cart";


const ShopCard = ({ category, img, name, before, cost }) => {
  return (
    <div className={styles.card}>
      <div className={styles.opacity}>
        <Cart to="/shopsingle"/>
      </div>

      <button className={styles.category}>{category}</button>
      <div className={styles.imgCont}>
        <img className={styles.img} src={img} alt="" />
      </div>
      <h1 className={styles.name}>{name}</h1>
      <hr />
      <div className={styles.bottomCont}>
        <div className={styles.left}>
          <p className={styles.before}>{before}</p>
          <h1 className={styles.cost}>{cost}</h1>
        </div>
        <div className={styles.right}>
          <img src="./public/imgProj/icon/star.png" alt="" />
          <img src="./public/imgProj/icon/star.png" alt="" />
          <img src="./public/imgProj/icon/star.png" alt="" />
          <img src="./public/imgProj/icon/star.png" alt="" />
          <img src="./public/imgProj/icon/star.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
