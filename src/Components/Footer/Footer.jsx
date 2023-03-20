import React from "react";
import Logo from "../../UI/Logo/Logo";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer}>
        <div className={styles.blockleft}>
          <h1 className={styles.footcontact}>Contact Us</h1>
          <h4 className={styles.email}>Email</h4>
          <a href="#">needhelp@Organia.com</a>
          <h4 className={styles.email}>Phone</h4>
          <a href="#">666 888 888</a>
          <h4 className={styles.email}>Address</h4>
          <a href="#">88 road, boklyn street, USA</a>
        </div>
        <hr />

        <div className={styles.blockright}>
          <Logo />
          <p className={styles.lorem}>
            Simply dummy text of the printing and typesetting industry.
          </p>
          <p className={styles.loremm}>
            Lorem Ipsum simply dummy text of the printing
          </p>

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
        <hr />

        <div className={styles.blockbottom}>
          <h1 className={styles.utility}>Utility Pages</h1>
          <a className={styles.sylca} href="/style">
            Style Guide
          </a>
          <a className={styles.sylca} href="/error">
            404 Not Found
          </a>
          <a className={styles.sylca} href="/password">
            Password Protected
          </a>
          <a className={styles.sylca} href="/licences">
            Licences
          </a>
          <a className={styles.sylca} href="/changelog">
            Changelog
          </a>
        </div>
      </div>

      <p className={styles.foooter}>
        <hr />
        Copyright © <b>Organick</b> | Designed by <b> VictorFlow </b> Templates
        - Powered by <b> Webflow </b>
      </p>
    </footer>
  );
};

export default Footer;
