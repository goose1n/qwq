import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './LinkBack.module.css'

const LinkBack = ({to, text}) => {
  return (
    <NavLink className={styles.link} to={to}>
        <div className={styles.linkText}>{text}</div>
    </NavLink>
  )
}

export default LinkBack