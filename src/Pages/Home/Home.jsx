import React from "react";
import BlueBtn from "../../UI/BlueBtn/BlueBtn";
import ShopCard from "../../UI/ShopCards/Shop_Card";
import SubBlock from "../../UI/SubBlock/SubBlock";
import YellowBtn from "../../UI/YellowBtn/YellowBtn";
import styles from "./Home.module.css";
import BlogCard from "../../UI/BlogCard/BlogCard";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homeFirst}>
        <div className={styles.firstText}>
          <p className={styles.yellow}>100% Natural Food</p>
          <h1 className={styles.firstTitle}>
            Choose the best healthier way of life
          </h1>
          <YellowBtn to="/about" text="Explore Now" />
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
          <BlueBtn to="/shop" text="Shop Now" />
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
          <BlueBtn text="Load More" />
        </div>
      </div>
      <div className={styles.fifthCont}>
        <div className={styles.fifthText}>
          <div className={styles.fifthText_left}>
            <p className={styles.yellow}>Offer</p>
            <h1 className={styles.fifthText_left_title}>
              We Offer Organic For You
            </h1>
          </div>
          <div className={styles.fifthText_right}>
            <YellowBtn to="/shop" text="View All Product" />
          </div>
        </div>
        <div className={styles.fifthBlocks}>
          <ShopCard
            category="Vegetable"
            img="./public/imgProj/photos/broccoli.png"
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
            category="Vegetable"
            img="./public/imgProj/photos/onion.png"
            name="Onion"
            before="$20.00"
            cost="$17.00"
          />
          <ShopCard
            category="Vegetable"
            img="./public/imgProj/photos/cabbage.png"
            name="Cabbage"
            before="$20.00"
            cost="$17.00"
          />
        </div>
      </div>
      <div className={styles.sixthCont}>
        <div className={styles.sixthText}>
          <p className={styles.yellow}>Eco Friendly</p>
          <h1 className={styles.sixthTitle}>
            Econis is a Friendly Organic Store
          </h1>
          <div className={styles.sixthText_block}>
            <h1 className={styles.sixthText_blockTitle}>
              Start with Our Company First
            </h1>
            <p className={styles.sixthText_blockSub}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
          <div className={styles.sixthText_block}>
            <h1 className={styles.sixthText_blockTitle}>
              Learn How to Grow Yourself
            </h1>
            <p className={styles.sixthText_blockSub}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
          <div className={styles.sixthText_block}>
            <h1 className={styles.sixthText_blockTitle}>
              Farming Strategies of Today
            </h1>
            <p className={styles.sixthText_blockSub}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.seventhCont}>
        <div className={styles.seventhBlock_first}>
          <div className={styles.seventhBlock_block}>
            <p className={styles.seventhBlock_blockText}>Organic Juice</p>
          </div>
        </div>
        <div className={styles.seventhBlock_second}>
          <div className={styles.seventhBlock_block}>
            <p className={styles.seventhBlock_blockText}>Organic Food</p>
          </div>
        </div>
        <div className={styles.seventhBlock_third}>
          <div className={styles.seventhBlock_block}>
            <p className={styles.seventhBlock_blockText}>Nuts Cookis</p>
          </div>
        </div>
      </div>
      <div className={styles.eighthCont}>
        <div className={styles.eighthText}>
          <div className={styles.eighthText_left}>
            <p className={styles.yellow}>News</p>
            <h1 className={styles.eighthTitle}>
              Discover weekly content about organic food, & more
            </h1>
          </div>
          <div className={styles.eighthText_right}>
            <BlueBtn to="/blog" text="More News" />
          </div>
        </div>
        <div className={styles.eighthBlocks}>
          <BlogCard
            img="./public/ImgProj/photos/blogRoccah.png"
            name="By Rachi Card"
            title="The Benefits of Vitamin D & How to Get It"
            text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            to="/BlogSingle1"
          ></BlogCard>
          <BlogCard
            img="./public/ImgProj/photos/blogTomato.png"
            name="By Rachi Card"
            title="Our Favorite Summertime Tomato"
            text="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
            to="/BlogSingle2"
          ></BlogCard>
        </div>
      </div>
      <SubBlock />
    </div>
  );
};

export default Home;
