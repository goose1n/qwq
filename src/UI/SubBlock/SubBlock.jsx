import React from 'react'
import styles from './SubBlock.module.css'

const SubBlock = () => {
  return (
    <div className={styles.subblock}>
        <h1 className={styles.sub}>Subscribe to <br /> our Newsletter</h1>
        <div className={styles.inpbutt}>
        <input className={styles.subinput} type="" placeholder="Your Email Address"/>
        <button className={styles.subbutton}>Subscribe</button>
        </div>
    </div>
  
  )
}

export default SubBlock