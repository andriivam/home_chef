import React from 'react'
import '../LoginPage/ForgotPasswordStyle.css'
import { Link } from 'react-router-dom';
import image from "./images/image.png";

export default function ForgotPassword() {
  return (
            <div className="maindivision"> 
        <Link to="/home">
          <img className="logoLogin" src={image} alt='Logo' />
        </Link>
      <div className='loginpageformu'>
        <form className='loginpageform' align='left' color="#000000">
          {/* //table tb td tt */}
          <div className="Loginpageformu">
            <label htmlFor="email" className="loginemail" > Email  </label>
            <div className="logininput">
              <input type="email" required name="email"  className="textBox" />
            </div>
            <div className="loginlabel">
              <label htmlFor="password" className="loginemail" > New Password </label>
            </div>
            <div className="logininput">
              <input type="Password" required name="password" className="textBox" />
            </div>
          </div>
          <div className="loginlabel">
              <label htmlFor="password" className="loginemail" > Confirm New Password </label>
            </div>
            <div className="logininput">
              <input type="Password" required name="password" className="textBox" />
            </div>
          
          <input type="Submit" name="Submit" className="submitLoginButton" defaultValue="Login" />
        </form>
        </div>
        </div>
        
  )
}