import React from "react";
import SubBlock from "../../UI/SubBlock/SubBlock";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutCont}>
      <div className={styles.aboutBlock}>
        <h1 className={styles.aboutBlock_title}>About Us</h1>
      </div>
      <div className={styles.aboutCont_first}>
        <div className={styles.aboutCont_first_img}>
          <img
            className={styles.aboutCont_first_img}
            src="./public/imgProj/photos/about1.png"
            alt=""
          />
        </div>
        <div className={styles.aboutCont_first_text}>
          <p className={styles.aboutCont_first_text_yellow}>About Us</p>
          <h1 className={styles.aboutCont_first_text_title}>
            We do Creative Things for Success
          </h1>
          <p className={styles.aboutCont_first_text_sub}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <br />
          <p className={styles.aboutCont_first_text_sub}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className={styles.aboutCont_first_text_third}>
            <div className={styles.aboutCont_first_text_third_q}>
              <img src="./public/imgProj/icon/Tractor.png" alt="" />
              <p className={styles.aboutCont_first_text_third_q}>
                Modern Agriculture Equipment
              </p>
            </div>
            <div className={styles.aboutCont_first_text_third_q}>
              <img src="./public/imgProj/icon/Chemical.png" alt="" />
              <p className={styles.aboutCont_first_text_third_q}>
                No growth hormones are used
              </p>
            </div>
          </div>
          <div className={styles.aboutButton}>
            <a className={styles.aboutLink} href="/portfoliosingle">
              Explore More
            </a>
            <img src="./public/imgProj/icon/Aerrow.png" alt="123" />
          </div>
        </div>
      </div>
      <div className={styles.aboutSecond}>
        <div className={styles.aboutCont_second}>
          <div className={styles.aboutCont_second_text}>
            <p className={styles.aboutCont_second_text_yellow}>
              Why Choose us?
            </p>
            <br />
            <h1 className={styles.aboutCont_second_text_title}>
              We do not buy from the open market & traders.
            </h1>
            <br />
            <p className={styles.aboutCont_second_text_sub}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <div className={styles.aboutCont_second_text_block}>
              <img src="./public/imgProj/icon/iconAS.png" alt="123" />
              <p className={styles.aboutCont_second_text_block_text}>
                100% Natural Product
              </p>
            </div>
            <p className={styles.aboutCont_second_text_block_middle}>
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
            <div className={styles.aboutCont_second_text_block}>
              <img src="./public/imgProj/icon/iconAS.png" alt="123" />
              <p className={styles.aboutCont_second_text_block_text}>
                100% Natural Product
              </p>
            </div>
            <p className={styles.aboutCont_second_text_block_middle}>
              Filling, and temptingly healthy, our Biona Organic Granola with
              Wild Berries is just the thing
            </p>
          </div>
          <div className={styles.aboutCont_second_img}>
            <img src="./public/imgProj/photos/cardOrganic.jpg" alt="" />
          </div>
        </div>
        <div className={styles.aboutCont_second_fourCont}>
        <div className={styles.aboutCont_second_four}>
          <img src="./public/imgProj/icon/cart.png" alt="" />
          <h1 className={styles.aboutCont_second_four_title}>Return Policy</h1>
          <p className={styles.aboutCont_second_four_sub}>
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
        <div className={styles.aboutCont_second_four}>
          <img src="./public/imgProj/icon/list.png" alt="" />
          <h1 className={styles.aboutCont_second_four_title}>100% Fresh</h1>
          <p className={styles.aboutCont_second_four_sub}>
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
        <div className={styles.aboutCont_second_four}>
          <img src="./public/imgProj/icon/24.png" alt="" />
          <h1 className={styles.aboutCont_second_four_title}>Support 24/7</h1>
          <p className={styles.aboutCont_second_four_sub}>
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
        <div className={styles.aboutCont_second_four}>
          <img src="./public/imgProj/icon/card.png" alt="" />
          <h1 className={styles.aboutCont_second_four_title}>
            Secured Payment
          </h1>
          <p className={styles.aboutCont_second_four_sub}>
            Simply dummy text of the printintypesetting industry.
          </p>
        </div>
        </div>
      </div>
      <SubBlock />
    </div>
  );
};

export default About;
