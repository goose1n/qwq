import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Cart.module.css'

const Cart = ({to}) => {
  return (
    <NavLink to={to}> 
         <img src=".\public\ImgProj\icon\Cart Icon.png" alt="" />
    </NavLink>
  )
}

export default Cart