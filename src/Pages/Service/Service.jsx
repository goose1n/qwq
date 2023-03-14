import React from "react";
import styles from "./Service.module.css";

const Service = () => {
  return (
    <div className={styles.Servicecont}>
      <div className={styles.serviceBlock}>
        <h1 className={styles.serviceBlock_title}>Services</h1>
      </div>

      <div className={styles.ServiceBlock}>
        <div className={styles.ServiceH}>
          <h2 className={styles.serviceH}>What we Grow</h2>
          <h1 className={styles.BetterP}>
            Better Agriculture for <br /> Better Future
          </h1>
        </div>
      </div>

      <div className={styles.serviceBlockBig}>
        <div className={styles.block1}>
          <div className={styles.serviceB}>
            <img src="./public/ImgProj/icon/Milk Bottle (2).png" alt="" />
            <h2 className={styles.servicetextH}>Dairy Products</h2>
            <p className={styles.servicetextP}>
              Sed ut perspiciatis unde omnis iste natus error <br /> sit
              voluptat accusantium doloremqlaudantium. <br /> Sed ut
              perspiciatis
            </p>
          </div>

          <div className={styles.serviceB}>
            <img src="./public/ImgProj/icon/Online Store.png" alt="" />
            <h2 className={styles.servicetextH}>Store Services</h2>
            <p className={styles.servicetextP}>
              Sed ut perspiciatis unde omnis iste natus error <br /> sit
              voluptat accusantium doloremqlaudantium. <br /> Sed ut
              perspiciatis
            </p>
          </div>

          <div className={styles.serviceB}>
            <img src="./public/ImgProj/icon/Delivery.png" alt="" />
            <h2 className={styles.servicetextH}>Delivery Services</h2>
            <p className={styles.servicetextP}>
              Sed ut perspiciatis unde omnis iste natus error <br /> sit
              voluptat accusantium doloremqlaudantium. <br /> Sed ut
              perspiciatis
            </p>
          </div>
        </div>

        <div className={styles.serviceimg}>
          <img
            className={styles.changeimg}
            src="./public/ImgProj/photos/Photo (2).png"
            alt=""
          />
        </div>

        <div className={styles.block2}>
          <div className={styles.serviceB}>
            <img src="./public/ImgProj/icon/Icon.svg" alt="" />
            <h2 className={styles.servicetextH}>Agricultural Services</h2>
            <p className={styles.servicetextP}>
              Sed ut perspiciatis unde omnis iste natus error <br /> sit
              voluptat accusantium doloremqlaudantium. <br /> Sed ut
              perspiciatis.
            </p>
          </div>

          <div className={styles.serviceB}>
            <img src="./public/ImgProj/icon/Vegetables Bag.png" alt="" />
            <h2 className={styles.servicetextH}>Organic Products</h2>
            <p className={styles.servicetextP}>
              Sed ut perspiciatis unde omnis iste natus error <br /> sit
              voluptat accusantium doloremqlaudantium. <br /> Sed ut
              perspiciatis.
            </p>
          </div>

          <div className={styles.serviceB}>
            <img src="./public/ImgProj/icon/Radish.png" alt="" />
            <h2 className={styles.servicetextH}>Fresh Vegetables</h2>
            <p className={styles.servicetextP}>
              Sed ut perspiciatis unde omnis iste natus error <br /> sit
              voluptat accusantium doloremqlaudantium. <br /> Sed ut
              perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
