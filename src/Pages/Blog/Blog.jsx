import React from "react";
import styles from "./Blog.module.css";
import SubBlock from "../../UI/SubBlock/SubBlock";
import BlogCard from "../../UI/BlogCard/BlogCard";


const Blog = () => {
  return (
    <div>
      <div className={styles.blogBanner}>
        <img className={styles.blogPattern} src="./public/ImgProj/banners/PatternsBlog.png" alt=""/>
        <h1 className={styles.blogTitle}>Recent News</h1>
      </div>

      <div className={styles.cards}>
        <div className={styles.grids}>
          <BlogCard img="./public/ImgProj/photos/blogRoccah.png" name="By Rachi Card" title="The Benefits of Vitamin D & How to Get It" text='Simply dummy text of the printing and typesetting industry. Lorem Ipsum' to='/BlogSingle1'></BlogCard>
          <BlogCard img="./public/ImgProj/photos/blogTomato.png" name="By Rachi Card" title='Our Favorite Summertime Tomato' text='Simply dummy text of the printing and typesetting industry. Lorem Ipsum' to='/BlogSingle2'></BlogCard>
          <BlogCard img="./public/ImgProj/photos/blogMan.png" name="By Rachi Card" title='Research More Organic Foods' text='Simply dummy text of the printing and typesetting industry. Lorem Ipsum' to='/BlogSingle3'></BlogCard>
          <BlogCard img="./public/ImgProj/photos//blogVeggie.png" name="By Rachi Card" title='Benefits of Vitamin C & How to Get It' text='Simply dummy text of the printing and typesetting industry. Lorem Ipsum' to='/BlogSingle4'></BlogCard>
          <BlogCard img="./public/ImgProj/photos/blogLady.png" name="By Rachi Card" title='Research More Organic Foods' text='Simply dummy text of the printing and typesetting industry. Lorem Ipsum' to='/BlogSingle5'></BlogCard>
          <BlogCard img="./public/ImgProj/photos/blogTrash.png" name="By Rachi Card" title='Don’t Use Plastic Product! it’s Kill Nature' text='Simply dummy text of the printing and typesetting industry. Lorem Ipsum' to='/BlogSingle6'></BlogCard>
        </div>
      </div>

      <SubBlock />
    </div>
  );
};

export default Blog;
