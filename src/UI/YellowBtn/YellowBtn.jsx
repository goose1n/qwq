import React from 'react'
import styles from './YellowBtn.module.css'

const YellowBtn = ({text}) => {
  return (
    <div className={styles.btnCont}>
    <button className={styles.btn}>{text}<span><img src="./public\ImgProj\icon\Aerrow.png" alt="123" /></span></button>
    </div>
  )
}

export default YellowBtn