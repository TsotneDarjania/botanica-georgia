import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from "./adminPage.module.css"
import Login from './components/login/Login'

import {deleteCookies, getCookie} from "../../helper/cookie"

const AdminPage = () => {

  const [isLogin, setIsLogin] = useState(false);

  useEffect( () => {
    checkLogin();
  }, [isLogin])

  const checkLogin = () => {
    const userName = JSON.parse(getCookie("adminSession")).userName;
    const userPassword = JSON.parse(getCookie("adminSession")).password;

    fetch('http://localhost:3001/admin-login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify( {
          userName : userName,
          userPassword : userPassword
      })
      }).then((response) => {
          return response.json();
      }).then( (data) => {
          data.statusCode === 1 && setIsLogin(true);
      });
    }

  return (
    <div className={style.adminPage}>
        {
          isLogin ?
          <div> 
             
          </div>
           : 
          <Login isLogin={setIsLogin} />
        }
    </div>
  )
}

export default AdminPage