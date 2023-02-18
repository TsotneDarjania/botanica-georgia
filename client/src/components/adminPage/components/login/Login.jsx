import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import style from "./login.module.css"

import {setCookie} from "../../../../helper/cookie"

const Login = (props) => {

    const [userName, setUserName] = useState()
    const [userPassword, setUserPassword] = useState()

    const userNameRef = useRef();
    const userPasswordRef = useRef();

    const handleSubmit = (event) => {
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
            setCookie("adminSession",
            JSON.stringify({
                userName : userName,
                password : userPassword,
            }), 1);

            props.isLogin(true)
        });
 
        event.preventDefault();
    }
   
  return (
    <div className={style.login}>
        <h1>Login to system</h1>
        <form className={style.form}>    
            <div className={style.inputContainer}>
                <label>Username : </label>
                <input ref={userNameRef} onChange={ (e) => setUserName(e.target.value)} maxLength={20} type="text" name="adminName" required />
            </div>
            <div className={style.inputContainer}>
                <label>Password : </label>
                <input ref={userPasswordRef} onChange={ (e) => setUserPassword(e.target.value)} maxLength={20} type="password" name="adminPassword" required />
            </div>
            <button type='button' onClick={handleSubmit}> Login </button>
        </form>
    </div>
  )
}

export default Login