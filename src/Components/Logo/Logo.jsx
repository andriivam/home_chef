import React from "react";
import { Link } from 'react-router-dom';
import "./Logo.css";
import image from "./images/image.png";

export default function Logo() {
  return (
    <Link to="/home">
     <div className="logo">
        <img src={image} alt="logo"/>
    </div>
    </Link>
  
  );
}