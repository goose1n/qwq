import {React, useState} from "react";
import { NavLink } from "react-router-dom";
import Links from "../../UI/Links/Links";
import Logo from "../../UI/Logo/Logo";
import NavSelect from "../NavSelect/NavSelect";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navCont}>
      <Logo/>
      <div className={styles.navLinks}>
        <Links className={styles.link} to="/" text="Home"/>
        <Links className={styles.link} to="/about" text="About"/>
        <NavSelect/>
        <Links className={styles.link} to="/shop" text="Shop"/>
        <Links className={styles.link} to="/team" text="Team"/>
        <Links className={styles.link} to="/blog" text="News"/>
      </div>
      <div className={styles.inputText_Cont}>
        <img className={styles.searchIcon} src="./public/imgProj/icon/Search.png" alt="" />
        <input className={styles.inputText} maxLength="25" type="text" />
      </div>
      <div className={styles.cartCont}>
        <img src="./public/imgProj/icon/Cart Icon.png" alt="" />
        <p>Cart <span>(value)</span></p>
      </div>
    </nav>
  );
};

export default Nav;
