import React from "react";
import { NavLink } from "react-router-dom";
import Links from "../../UI/Links/Links";
import Logo from "../../UI/Logo/Logo";
import NavSelect from "../NavSelect/NavSelect";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <div className={styles.navCont}>
      <Logo/>
      <div className={styles.navLinks}>
        <Links className={styles.link} to="/" text="Home"/>
        <Links className={styles.link} to="/about" text="About"/>
        <NavSelect/>
        <Links className={styles.link} to="/shop" text="Shop"/>
        <Links className={styles.link} to="/projects" text="Projects"/>
        <Links className={styles.link} to="/blog" text="News"/>
      </div>
      <div className={styles.inputText_Cont}>
        <img className={styles.searchIcon} src="./public/imgProj/icon/Search.png" alt="" />
        <input className={styles.inputText} maxLength="25" type="text" />
      </div>
    </div>
  );
};

export default Nav;
