import React from 'react'
import SubBlock from '../../UI/SubBlock/SubBlock'
import styles from './SerSin.module.css'

const SerSin = () => {
  return (
    <div className={styles.SerSin_container}> 
     <div className={styles.SerSinBlock}>
        <h1 className={styles.SerSinBlock_title}>Quality Standard</h1>
      </div>

      <div className={styles.SerSin_Img}>
      <img className={styles.img_sersin} src="./public/ImgProj/banners/bcgSerSingle.png" alt=""/>
      </div>
      <div className={styles.SerSinText}>
      <h1 className={styles.SerSin_H}>Organic Store Services</h1>
      <p className={styles.SerSin_P}>t is a long established fact that a reader will be distracted by the readable content of a page when looking a <br /> layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br /> using 'Content here, content here', making it look like readable English.</p>
      <p className={styles.SerSin_PP}> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br /> and auncover many web sites still in their infancy. Various versions have evolved over the years</p>
      </div>


      <div className={styles.ImgBlock_SerSin}>
      <img className={styles.SerSin_IMG} src="./public/ImgProj/photos/planting.jpg" alt=""/>
        <div className={styles.SerSin_HP}>
          <h1 className={styles.sersin_textH}>Why Organic</h1>
          <p className={styles.sersin_textHP}>Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptat. page editors now use Lorem Ipsum as their <br /> default model text, and auncover.</p>
        </div>
      </div>

       <div className={styles.ImgBlock_SerSin}>
        <div className={styles.SerSin_HPP}>
        <h1 className={styles.sersin_textH}>Speciality Produce</h1>
        <p className={styles.sersin_textHP}>Sed ut perspiciatis unde omnis iste natus error sit <br /> voluptat. page editors now use Lorem Ipsum as their <br /> default model text, and auncover.</p>

        </div>
        <img className={styles.SerSin_IMG2} src="./public/ImgProj/photos/plants.jpg" alt=""/>
       </div>

       <div className={styles.SerSin_TextButton}>
        <h1 className={styles.H_SerSin}> We farm your land</h1>
        <p className={styles.P_SerSin}>It is a long established fact that a reader will be distracted by the readable content of a page when looking a <br /> layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to <br /> using 'Content here, content here', making it look like readable English.</p>
        </div>    

         <div className={styles.SerSinButton}>
          <div className={styles.sersin_button}>
            <div className={styles.elips}>
              <h1 className={styles.number_sersin}>01</h1>
            </div>
            <h1 className={styles.text_sersin}>Best quality support</h1>
          </div>
          <div className={styles.sersin_button}>
          <div className={styles.elips}>
              <h1 className={styles.number_sersin}>02</h1>
            </div>
            <h1 className={styles.text_sersin}>Money back guarantee</h1>
          </div>
         </div>
    
    <SubBlock/> </div>
  )
}

export default SerSin
