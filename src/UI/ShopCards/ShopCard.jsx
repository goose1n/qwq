import React from 'react'
import styles from './ShopCard.module.css'

const ShopCard = ({category, img, name, before, cost}) => {
  return (
    <div className={styles.card}>
        <div className={styles.category}>{category}</div>
        <img className={styles.img} src={img} alt="" />
    </div>
  )
}

export default ShopCard