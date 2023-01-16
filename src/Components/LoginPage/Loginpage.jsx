
import React from "react";
// import { useMediaQuery } from 'react-responsive'
import "./Loginpage.css";
import image from '../LoginPage/images/image.png';
// import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

// import { Button } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";

export default function LoginPage() {

  return (

    <div className="loginpagelogo" align='center' >
      <Link to="/home">
        <img src={image} alt='Logo' />
      </Link>

      <div classeName='loginpageformu'>

        <form classeName='loginpageform' align='left' color="#000000">


          <div className="Loginpageformu">
            <div className="loginlabel">

              <label htmlFor="email" className="loginemail" > Email  </label>
            </div>
            <div className="logininput">
              <input type="email" required name="email" placeholder="Email" className="textBox" />
            </div>
            <div className="loginlabel">

              <label htmlFor="password" className="loginemail" > Password </label>
            </div>
            <div className="logininput">
              <input type="Password" required name="password" placeholder="Password" className="textBox" />
            </div>
          </div>

          <input type="Submit" name="Submit" className="submitLogin" defaultValue="Sign in" />
        </form>
      </div>




      <div className="forgotPassword">
        <Link to="/Forgotpassword"> <p> Forgot Password? </p>
        </Link>
      </div>


      <div className="Signup">
        <Link to="/home/chefForm/userForm"> <p> Sign up </p>
        </Link>
      </div>


      <div className="Becomeachef">
        <Link to="/home/ChefForm"> <p> Become a chef? </p>
        </Link>
      </div>
    </div>


  );
};