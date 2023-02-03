
import React from "react";
import "./Loginpage.css";
import image from '../LoginPage/images/image.png';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
let location = useNavigate();
  const {
    register,
    handleSubmit,
    // formState: { errors }
  } = useForm();

  const onSubmit = async (data = {}) => {
    console.log(data, 'data')
    try {
      const res = await fetch('http://localhost:3001/home/Loginpage', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const resData = await res.json();

      console.log(res.status, 'response');
      if (res.status !== 200) {
        alert(resData.error)
      }
      else if (res.status === 200) {
        location("/home")
      } else {console.log('fail')}
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
              <input type="email" required name="email" className="textBox" {...register("email")} />
            </div>
            <div className="loginlabel">
              <label htmlFor="password" className="loginemail" > Password </label>
            </div>
            <div className="logininput">
              <input type="Password" required name="password" className="textBox" {...register("password")} />
            </div>
          </div>
          <input type="Submit" name="Submit" className="submitLoginButton" defaultValue="Sign in" />
        </form>
      </div>
      <div className="Signup">
        <Link to="/home/LoginPage/userForm">  Sign up
        </Link>
      </div>
      <div className="forgotPassword">
        <Link to="/home/LoginPage/ForgotPassword">  Forgot Password?
        </Link>
      </div>

      <div className="Becomeachef">
        <Link to="/home/LoginPage/ChefForm">  Become a chef?
        </Link>
      </div>
    </div>


  );
};
