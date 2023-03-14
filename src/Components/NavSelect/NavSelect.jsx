import React from 'react'
import styles from './NavSelect.module.css'

const NavSelect = () => {
  return (
    <div className={styles.select}>
  <select className={styles.standard_select}>
    <option value="Option 1" disabled selected>Pages</option>
    <option value="Option 2">Home</option>
    <option value="Option 3">About</option>
    <option value="Option 4">Shop</option>
    <option value="Option 5">Projects</option>
    <option value="Option 6">News</option>
  </select>
  <span class="focus"></span>
</div>
  )
}

export default NavSelect