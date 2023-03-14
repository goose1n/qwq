import React from 'react'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logoCont}>
        <img className={styles.logoImg} src="./public/ImgProj/icon/Logo.png" alt="logo" />
        <h1 className={styles.logoText}>Organick</h1>
    </div>
  )
}

export default Logo