
import React from "react";
import "./Loginpage.css";
import image from "./images/image.png";
import { Link } from 'react-router-dom';
import Logo from "../Logo/Logo"
// import { Button } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";

export default function Loginpage() {
  return (
    <div className = 'mainDivLoginPage'>
        <div className="logoImageDiv">
           <Link to="/home">
              <img className='logoimg'  src={image} alt='Logo' />
           </Link>
         </div>
        <form className= "loginForm">
              <div class="containerForm">
                <label for="uname">Email</label>
                <input className="phuName" type="text" placeholder="Enter Email" name="uname" required/>

                <label for="psw">Password</label>
                <input className="phPwd" type="password" placeholder="Enter Password" name="psw" required/>

                <button className="loginButton" type="submit">Login</button>
              </div>
              <div class="containerFoot" >
                <span class="psw">Forgot password 
                
                </span>
                <span class="signUp">Sign Up</span>
                <span class="beAChef">Become a Chef</span>
              </div>
          </form>
    </div>
  )
}
