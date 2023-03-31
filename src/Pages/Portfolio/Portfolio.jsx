import React from "react";
import PortfolioCard from "../../UI/PortfolioCard/PortfolioCard";
import SubBlock from "../../UI/SubBlock/SubBlock";
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div className={styles.porCont}>
      <div className={styles.banner}>
        <h1 className={styles.bannerTitle}>Portfolio Standart</h1>
      </div>
      <div className={styles.grid}>
        <PortfolioCard
          to="/PortfolioSingle"
          img=".\public\ImgProj\photos\cardLemon.png"
          name="Green & Tasty Lemon"
          work="Fruits"
        />
        <PortfolioCard
          to="/PortfolioSingle"
          img=".\public\ImgProj\photos\cardCarrot.png"
          name="Organic Carrot"
          work="Farmer"
        />
        <PortfolioCard
          to="/PortfolioSingle"
          img=".\public\ImgProj\photos\cardBasil.png"
          name="Organic Betel Leaf"
          work="Leaf"
        />
        <PortfolioCard
          to="/PortfolioSingle"
          img=".\public\ImgProj\photos\cardTomato.png"
          name="Natural Tommato"
          work="Fruits"
        />
        <PortfolioCard
          to="/PortfolioSingle"
          img=".\public\ImgProj\photos\cardBlackberry.png"
          name="Black Raspberry"
          work="Farmer"
        />
        <PortfolioCard
          to="/PortfolioSingle"
          img=".\public\ImgProj\photos\cardLemons.png"
          name="Honey Orange"
          work="Farmer"
        />
      </div>
      <SubBlock />
    </div>
  );
};

export default Portfolio;
