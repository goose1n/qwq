import React from "react";
import SubBlock from "../../UI/SubBlock/SubBlock";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.Contact_Container}>
      <div className={styles.bannerContact}>
        <h1 className={styles.bannerTitle}>Contact</h1>
      </div>

      <div className={styles.Contact_block}>
        <div className={styles.Contact_title1}>
          <img src="./public/ImgProj/photos/Photo.jpg" alt="" />
        </div>
        <div className={styles.Contact_title2}>
          <h1>We'd love to talk about how we can work together.</h1>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className={styles.Contact_Sms_Block}>
            <div className={styles.Contact_Massege}>
              <img src="./public/ImgProj/icon/Group 15.svg" alt="" />
            </div>
            <div className={styles.Contact_MassegeH1}>
              <h1>Massege</h1>
              <a href="https://mail.google.com">support@organic.com</a>
            </div>
          </div>
          <div className={styles.Contact_Contact}>
            <div className={styles.Contact_Sms_Block}>
              <div className={styles.Contact_Massege}>
                <img src="./public/ImgProj/icon/Group 16.svg" alt="" />
              </div>
              <div className={styles.Contact_MassegeH1}>
                <h1>Contact Us</h1>
                <a href="tel:+011234567894555"> +01 123 456 789 4555</a>
              </div>
            </div>
          </div>
          <div className={styles.blockicon}>
            <a target="_blank" href="https://www.instagram.com/">
              <img
                className={styles.iconfot}
                src="./public/ImgProj/icon/Insta.png"
                alt=""
              />
            </a>
            <a target="_blank" href="https://www.facebook.com/index.php">
              <img
                className={styles.iconfot}
                src="./public/ImgProj/icon/Fb.png "
                alt=""
              />
            </a>
            <a target="_blank" href="https://twitter.com/i/flow/login">
              <img
                className={styles.iconfot}
                src="./public/ImgProj/icon/Twiter.png"
                alt=""
              />
            </a>
            <a target="_blank" href="https://www.pinterest.com/">
              <img
                className={styles.iconfot}
                src="./public/ImgProj/icon/Pintrest.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.nn}>
        <div className={styles.Contact_IMG_Block}>
          <div className={styles.Contact_img_block1}>
            <h3>Location</h3>
            <h1>Our Farms</h1>
            <p>
              Established fact that a reader will be distracted by the readable
              content of a page when looking a layout. The point of using.
            </p>
            <div className={styles.Contact_location}>
              <div className={styles.location_img}>
                <img src="./public/ImgProj/icon/Location.png" alt="" />
              </div>
              <div className={styles.location_text}>
                <h1>New York, USA:</h1>
                <p>299 Park Avenue New York,</p>
                <p>New York 10171</p>
              </div>
            </div>
            <div className={styles.Contact_location}>
              <div className={styles.location_img}>
                <img src="./public/ImgProj/icon/Location.png" alt="" />
              </div>
              <div className={styles.location_text}>
                <h1>London, Uk:</h1>
                <p>30 Stamford Street</p>
                <p>London SE1 9LQ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Contact_Input}>
       <div className={styles.input_contact}>
        <h1>Full Name*</h1>
        <input type="text" placeholder="Your Email Address"  className={styles.inputCon}/>
       </div>
       <div className={styles.input_contact}>
        <h1>Your Email*</h1>
        <input type="text"  placeholder="example@yourmail.com" className={styles.inputCon}/>
       </div>
      </div>
      <div className={styles.Contact_Input}>
       <div className={styles.input_contact}>
        <h1>Company*</h1>
        <input type="text" placeholder="Your company name here"  className={styles.inputCon}/>
       </div>
       <div className={styles.input_contact}>
        <h1>Subject*</h1>
        <input type="text"  placeholder="How can we help" className={styles.inputCon}/>
       </div>
      </div>
       
       <div className={styles.input_block}>
       <div className={styles.Contact_MassegeInput}>
        <h1>Message*</h1>
        <input type="text" placeholder="hello there,i would like to talk about how to..."  className={styles.inputmass}/>
       </div>
       </div>
       <div className={styles.butt}>
      <button className={styles.Contact_Button}>Send Message</button>
      </div>
      <SubBlock />
    </div>
  );
};

export default Contact;
