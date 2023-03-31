import React from 'react'
import styles from './BlueBtn.module.css'
import { NavLink } from 'react-router-dom'

const BlueBtn = ({text, to}) => {
  return (
    <NavLink to={to}>
    <div className={styles.btnCont}>
        <button className={styles.btn}>{text}<span><img src="./public\ImgProj\icon\Aerrow.png" alt="123" /></span></button>
    </div>
    </NavLink>
  )
}

export default BlueBtn