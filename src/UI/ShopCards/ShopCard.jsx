import React from 'react'
import styles from './ShopCard.module.css'

const ShopCard = ({category, img, name, before, cost}) => {
  return (
    <div className={styles.card}>
        <div className={styles.category}>{category}</div>
    </div>
  )
}

export default ShopCard