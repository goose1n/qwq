import React from "react";
import styles from './BlogSingle3.module.css'
import SubBlock from "../../UI/SubBlock/SubBlock";
import LinkBack from "../../UI/LinkBack/LinkBack";

const BlogSingle3 = () => {
  return (
    <div>
      <div className={styles.bcgBlogSingle3}>
        <div className={styles.card}>
          <div className={styles.FLine}>
            <div className={styles.data}>
              <p className={styles.post}>Posted on:</p>
              <p className={styles.date}>January 6,2022</p>
            </div>
            <div className={styles.author}>
              <img className={styles.icon} src="./public/ImgProj/icon/user.png" alt="" />
              <p className={styles.surname}>By Rachi Card</p>
            </div>
          </div>
          <div>
            <p className={styles.title}>Research More Organic Food</p>
            <p className={styles.desc}>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
          </div>
        </div>
      </div>

      <div className={styles.block2}>
        <div className={styles.subBlock}>
            <p  className={styles.textDesc}>Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.</p>

            <h1 className={styles.cont2Title}>Preferred Form of Vitamin D?</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <ul>
              <li> Publishing packages and web pageLorem Ipsum as their default</li>
              <li> Content here, content here', making it look like readable</li>
              <li> Packages and web pageLorem Ipsum as their default</li>
            </ul>
            <div className={styles.greyBlock}>
              <p className={styles.greyText}>“The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”</p>
            </div>
            <h2>Make perfect organic product with us</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
            <ol>
              <li>Publishing packages and web pageLorem Ipsum as their default</li>
              <li> Content here, content here', making it look like readable</li>
              <li>Packages and web pageLorem Ipsum as their default</li>
              <li>More-or-less normal distribution of letters</li>
            </ol>
            
        </div>
        <LinkBack to='/blog' text='Back'></LinkBack>
      </div>

       

      
      <SubBlock />
    </div>
  );
};

export default BlogSingle3;
