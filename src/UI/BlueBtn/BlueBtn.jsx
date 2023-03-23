import React from 'react'
import styles from './BlueBtn.module.css'

const BlueBtn = ({text, to}) => {
  return (
    <div className={styles.btnCont}>
        <button className={styles.btn}>{text}<span><img src="./public\ImgProj\icon\Aerrow.png" alt="123" /></span></button>
    </div>
  )
}

export default BlueBtn