import React from 'react'
import style from "./header.module.css"

import webIcon from "../../images/web/web-logo.jpg"


import {FaUserAlt, FaShoppingCart} from "react-icons/fa"
import {FiSearch} from "react-icons/fi"
import { useState } from 'react'

const Header = () => {

    const [showSeachField, setShowSearchField] = useState(false)

  return (
    <div className={style.header}>

        <img src={webIcon} alt="web icon" />
        <ul>
            <li>
                <input  maxLength={30} className={style.searchField + " " + style[ showSeachField ? "showSeacrhField" : "" ]} type="text" />
            </li>
            <li onClick={ () => setShowSearchField(showSeachField => !showSeachField) } className={style.searchIcon}>
                <FiSearch />
            </li>
            <li className={style.userAccount}>
                <FaUserAlt />
            </li>
            <li className={style.userShop}>
                <FaShoppingCart />
            </li>
            <li className={style.price}>
                <p> 0.00₾</p>
            </li>
        </ul>

    </div>
  )
}

export default Header