
import React from "react";
// import { useMediaQuery } from 'react-responsive'
import "./Lastpage.css";
import image from '../LoginPage/images/image.png';
import {Link} from 'react-router-dom';

// import { Button } from 'react-bootstrap';
// import { useHistory } from "react-router-dom";

export default function LastPage() {
  return (
    <div className="lastpage" align="center" >
      <Link to="/home">
        <img src={image} alt='Logo' />
      </Link>
      <div className="lastpage" background-color="#34785d">
      <h2 className="lastpagethanks" align="center"  fontFamily='poppins'>Thanks to ordering</h2>
      <Link to="/home" className="lastpageback" align="center" color="#FFFFFF" fontFamily='poppins'>
        Back to the Homepage
      </Link>
      
      </div>

    </div>
  );
}

