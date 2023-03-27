import React from "react";
import ShopCard from "../../UI/ShopCards/ShopCard";
import SubBlock from "../../UI/SubBlock/SubBlock";
import styles from './Shop.module.css'

const Shop = () => {
  return (
    <div>

      <div className={styles.bannerShop}>
        <h1>Shop</h1>
      </div>

      <div className={styles.contShop}>
        <div className={styles.fourthCards}>
        <ShopCard
            category="Vegetable"
            img="./public/imgProj/photos/broccoli.png"
            name="Calabrese Broccoli"
            before="$20.00"
            cost="$13.00"
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
          <ShopCard
            category="Health"
            img="./public/imgProj/photos/greenbean.png"
            name="Mung Bean"
            before="$20.00"
            cost="$11.00"
          />
          <ShopCard
            category="Nuts"
            img="./public/imgProj/photos/nuts.png"
            name="Brown Hazelnut"
            before="$20.00"
            cost="$12.00"
          />
          <ShopCard
            category="Fresh"
            img="./public/imgProj/photos/egg.png"
            name="Eggs"
            before="$20.00"
            cost="$17.00"
          />
          <ShopCard
            category="Fresh"
            img="./public/imgProj/photos/bread.png"
            name="Zelco Suji Elaichi Rusk"
            before="$20.00"
            cost="$15.00"
          />
          <ShopCard
            category="Health"
            img="./public/imgProj/photos/greenbean.png"
            name="Mung Bean"
            before="$20.00"
            cost="$11.00"
          />
          <ShopCard
            category="Nuts"
            img="./public/imgProj/photos/nuts.png"
            name="Brown Hazelnut"
            before="$20.00"
            cost="$12.00"
          />
          <ShopCard
            category="Fresh"
            img="./public/imgProj/photos/egg.png"
            name="Eggs"
            before="$20.00"
            cost="$17.00"
          />
          <ShopCard
            category="Fresh"
            img="./public/imgProj/photos/bread.png"
            name="Zelco Suji Elaichi Rusk"
            before="$20.00"
            cost="$15.00"
          />
        </div>
      </div>
      
       <SubBlock />
    </div>
  );
};

export default Shop;
