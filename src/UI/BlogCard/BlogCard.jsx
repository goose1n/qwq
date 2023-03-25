import React from "react";
import styles from "./BlogCard.module.css";
import { NavLink } from "react-router-dom";

const BlogCard = (props) => {
  return (
    <div className={styles.blogCard}>
 
      <div className={styles.img}>
        <img className={styles.bcgImg} src={props.img} alt="" />
        <div className={styles.data}>
          <div>25</div>
          <div>Nov</div>
        </div>
      </div>
      <div className={styles.aCard}>
        <div className={styles.person}>
          <img className={styles.icon} src="./public/ImgProj/icon/user.png" alt=""/>
          <h3 className={styles.personName}>{props.name}</h3>
        </div>
        <h1 className={styles.title}>{props.title}</h1>
        <p className={styles.text}>{props.text}</p>
        <NavLink className={styles.link} to={props.to}>
        <div className={styles.linkText}>Read more</div>
        <img className={styles.linkArrow} src="./public/ImgProj/icon/right-arrow.png" alt="" />
        </NavLink>
      </div>
      
    </div>
  );
};

export default BlogCard;
