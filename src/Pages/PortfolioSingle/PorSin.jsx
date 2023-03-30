import React from 'react'
import SubBlock from '../../UI/SubBlock/SubBlock'
import styles from './PorSin.module.css'

const PorSin = () => {
  return (
    <div className={styles.PorSinCont}>
     <div className={styles.PorSin_Block}>
     <div className={styles.PorSin_Block1}>
      <div className={styles.PorSin_Block2}>
        <h1>Black Raspberry</h1>
        <p>Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
      </div>
      <div className={styles.PorSin_Block3}>
        <div className={styles.PorSin_titleH}>
          <h1>Date</h1>
          <h1>Client</h1>
          <h1>Category</h1>
          <h1>Service</h1>
        </div>
        <div className={styles.PorSin_titleDot}>
          <h1>:</h1>
          <h1>:</h1>
          <h1>:</h1>
          <h1>:</h1>
        </div>
        <div className={styles.PorSin_titleP}>
          <p>December 4, 2022</p>
          <p>Kevin Martin</p>
          <p>Agriculture , Eco</p>
          <p>Organic Products</p>
        </div>
      </div>
     </div>
     </div>
       <div className={styles.PorSin_Block_title}>
     <div className={styles.PorSin_textBlock}>
      <h1>About The Farm:</h1>
      <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p> <br />
      <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
      <div className={styles.PorSin_IMG}>
      <img src="./public/ImgProj/photos/freshCarrot.png" alt="" />
      <h1>The Organic Products</h1>
      </div>
      <h1>How To Farm:</h1>
      <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p> <br />
      <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years</p>

     </div>
     </div>
    






       <SubBlock/></div>
  )
}

export default PorSin