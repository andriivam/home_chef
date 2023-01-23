import React from 'react'
import '../LoginPage/ForgotPasswordStyle.css'
import { Link } from 'react-router-dom';
import image from "./images/image.png";

export default function ForgotPassword() {
  return (
    <div className="forgotPwdPage">
            <div >
             <Link to="/home">
                 <img className="logoImg" src={image} alt='Logo'/>
             </Link>
            </div>
        <div>
            <form className= "forgotPwdForm">
                <div class="containerForm">
                    <label for="uname">Email</label>
                    <input className="phuName" type="text" placeholder="Enter Email" name="uname" required/>

                    <label for="psw">New Password</label>
                    <input className="phPwd" type="password" placeholder="Enter New Password" name="psw" required/>
                    
                    <label for="psw">Confirm Password</label>
                    <input className="phPwd" type="password" placeholder="Confirm Password" name="psw" required/>
                    
                    <button className="loginButton" type="submit">Login</button>
                </div>
            </form>
        </div>
    </div>
  )
}
