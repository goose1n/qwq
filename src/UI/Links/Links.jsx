import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Links.module.css'

const Links = ({to, text}) => {
  return (
    <NavLink className={styles.link} to={to}>
        <div className={styles.linkText}>{text}</div>
    </NavLink>
  )
}

export default Links