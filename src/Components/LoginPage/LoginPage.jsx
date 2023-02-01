
import React from "react";
// import { useMediaQuery } from 'react-responsive'
import "./Loginpage.css";
import image from '../LoginPage/images/image.png';
// import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// import { Button } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";

export default function LoginPage() {

  const {
    register,
    handleSubmit,
    // formState: { errors }
} = useForm({
    cuisineType: "",
    photo: ""
});

const onSubmit = async (data = {}) => {
    console.log(data, 'data')
    try {
        const resp = await fetch('http://localhost:3001/home/LoginPage', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        console.log(resp, 'response');
    } catch (err) {
        console.error(err);
    }
}

  return (
      <div className="maindivision"> 
        <Link to="/home">
          <img className="logoLogin" src={image} alt='Logo' />
        </Link>
      <div className='loginpageformu'>
        <form className='loginpageform' align='left' color="#000000" onSubmit={handleSubmit(onSubmit)}>
          {/* //table tb td tt */}
          <div className="Loginpageformu">
            <label htmlFor="email" className="loginemail" > Email  </label>
            <div className="logininput">
              <input type="email" required name="email"  className="textBox" {...register("email")}/>
            </div>
            <div className="loginlabel">
              <label htmlFor="password" className="loginemail" > Password </label>
            </div>
            <div className="logininput">
              <input type="Password" required name="password" className="textBox" {...register("password")}/>
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
