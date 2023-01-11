import React from "react";
import { useNavigate } from 'react-router-dom'
import "./Logo.css";
import image from "./images/image.png";

export default function Logo() {
  const navigate = useNavigate()
  return (
    <div className="logo">
      <label>
      <button onClick={() => {navigate("/mainSection")}} className="logoButton">
        <img src={image} alt="logo"/>
      </button>
      </label>
    
    </div>
  );
}