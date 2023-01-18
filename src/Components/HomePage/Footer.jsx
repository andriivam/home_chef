import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import { FaHome, FaTasks, FaShoppingBasket, FaUserAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
    <hr/>  
<ul className="footer">

    <li className="navbar"><Link to="/" className="icon"><FaHome/></Link></li>
    <li className="navbar"><Link to="" className="icon"><FaTasks/></Link></li>
    <li className="navbar"><Link to ="/home/user/checkout" className="icon"><FaShoppingBasket/></Link></li>
    <li className="navbar"><Link to="/home/Loginpage" className="icon"><FaUserAlt/></Link></li>
</ul>
    </footer>
  )
}
