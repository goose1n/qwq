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
          <BlogCard img="./public/ImgProj/photos/blogRoccah.png" data="15july" name="Mike" title="vitamin D3"></BlogCard>
          <BlogCard img="./public/ImgProj/photos/blogTomato.png"></BlogCard>
          <BlogCard img="./public/ImgProj/photos//blogVeggie.png"></BlogCard>
          <BlogCard img="./public/ImgProj/photos/blogMan.png"></BlogCard>
          <BlogCard img="./public/ImgProj/photos/blogLady.png"></BlogCard>
          <BlogCard img="./public/ImgProj/photos/blogTrash.png"></BlogCard>
        </div>
      </div>

      <SubBlock />
    </div>
  );
};

export default Blog;
