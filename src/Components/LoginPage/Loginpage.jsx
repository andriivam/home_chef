
import React from "react";
// import { useMediaQuery } from 'react-responsive'
import "./LoginPage.css";
import image from '../LoginPage/images/image.png';
// import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

// import { Button } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";

export default function LoginPage() {

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
              <label htmlFor="password" className="loginemail" > Password </label>
            </div>
            <div className="logininput">
              <input type="Password" required name="password" className="textBox" />
            </div>
          </div>
          <input type="Submit" name="Submit" className="submitLoginButton" defaultValue="Sign in" />
        </form>
      </div>
      <div className="Signup">
        <Link to="/home/chefForm/userForm">  Sign up 
        </Link>
      </div>
      <div className="forgotPassword">
        <Link to="/home/LoginPage/ForgotPassword">  Forgot Password? 
        </Link>
      </div>
            
      <div className="Becomeachef">
        <Link to="/home/ChefForm">  Become a chef? 
        </Link>
      </div>
      </div>
      
   
  );
};