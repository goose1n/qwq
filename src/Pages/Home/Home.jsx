import React from "react";
import BlueBtn from "../../UI/BlueBtn/BlueBtn";
import ShopCard from "../../UI/ShopCards/Shop_Card";
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
        </div>
        <div>
          <BlueBtn text="Load More"/>
        </div>
      </div>
      <SubBlock />
    </div>
  );
};

export default Home;
