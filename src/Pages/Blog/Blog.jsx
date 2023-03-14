import React from "react";
import styles from "./Blog.module.css";
import SubBlock from "../../UI/SubBlock/SubBlock";
import BlogCard from "./BlogCard/BlogCard";

const Blog = () => {
  return (
    <div>
      <div>
        <img
          className={styles.blogImg}
          src="./public/ImgProj/banners/bcgBlog.png"
          alt=""
        />
      </div>

      <div className={styles.cards}>
        <div className={styles.grids}>
          <BlogCard data="15july" name="Mike" title="vitamin D3"></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
          <BlogCard></BlogCard>
        </div>
      </div>

      <SubBlock />
    </div>
  );
};

export default Blog;
