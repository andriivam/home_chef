import React, { useState } from "react";
import '../LoginPage/ForgotPasswordStyle.css';
import { Link } from 'react-router-dom';
import image from "./images/image.png";
import { useForm } from 'react-hook-form';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import '../UserChef/Home.css'

export default function ForgotPassword() {

  const {
    register,
    handleSubmit,
    // formState: { errors }
} = useForm();

const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');

const onSubmit = async (data = {}) => {
    console.log(data, 'data')
    try {
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        const resp = await fetch('https://home-chef-app-team.herokuapp.com/home/LoginPage/ForgotPassword', {
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
            <div ><Link to="/home/LoginPage">
          <FontAwesomeIcon className="backButton" icon={faArrowCircleLeft}></FontAwesomeIcon>
          </Link>
        </div>
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
              <input type="Password" required name="password" className="textBox" {...register("newPassword")} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>
          <div className="loginlabel">
              <label htmlFor="password" className="loginemail" > Confirm New Password </label>
            </div>
            <div className="logininput">
              <input type="Password" required name="confirmPassword" className="textBox" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
          
          <input type="Submit" name="Submit" className="submitLoginButton" defaultValue="Login" />
        </form>
        </div>
        </div>
        
  )
}
