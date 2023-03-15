import React from "react";
import styles from "./BlogCard.module.css";

const BlogCard = (props) => {
  return (
    <div className={styles.blogCard}>

      <div className={styles.img}>
        <img className={styles.bcgImg} src={props.img} alt="" />
        <div className={styles.data}>{props.data}</div>
      </div>
      <div className={styles.aCard}>
        <div className={styles.person}>
          <i className={styles.icon}>{props.icon}</i>
          <h3 className={styles.personName}>{props.name}</h3>
        </div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
      
    </div>
  );
};

export default BlogCard;
