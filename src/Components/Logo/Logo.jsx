import React from "react";
import { Link } from 'react-router-dom';
import "./Logo.css";
import image from "./images/image.png";


export default function Logo() {
  return (
    <Link to="/home">
    <div className="logoHomepage">
        <img src={image} alt="logo"/>
        <div className='focus-in-contract'>
        <p className="fontFamiy">Quality is our </p> 
        <p className="center"> recipe </p>
        </div>
</div>

      
    </Link>
  
  );
  }
