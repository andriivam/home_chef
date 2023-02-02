import React from 'react';
import '../LoginPage/ForgotPasswordStyle.css';
import { Link } from 'react-router-dom';
import image from "./images/image.png";
import { useForm } from 'react-hook-form';

export default function ForgotPassword() {

  const {
    register,
    handleSubmit,
    // formState: { errors }
} = useForm();

const onSubmit = async (data = {}) => {
    console.log(data, 'data')
    try {
        const resp = await fetch('http://localhost:3001/home/LoginPage/ForgotPassword', {
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
              <label htmlFor="password" className="loginemail" > New Password </label>
            </div>
            <div className="logininput">
              <input type="Password" required name="password" className="textBox" {...register("newPassword")} />
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