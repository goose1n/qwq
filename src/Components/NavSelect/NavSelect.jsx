import React from 'react'
import styles from './NavSelect.module.css'

const NavSelect = () => {
  return (
    <div className={styles.select}>
  <select className={styles.standard_select}>
    <option value="Option 1" disabled>Pages</option>
    <option value="Option 2">Contact</option>
    <option value="Option 3">Team</option>
    <option value="Option 4">Portfolio</option>
    <option value="Option 5">Licenses</option>
    <option value="Option 6">Home</option>
  </select>
</div>
  )
}

export default NavSelect