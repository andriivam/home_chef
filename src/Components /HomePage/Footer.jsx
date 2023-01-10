import React from 'react';
import './Home.css';
import {NavLink} from 'react-router-dom';
import { FaHome, FaTasks, FaShoppingBasket, FaUserAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
<ul className="footer">
    <li className="navbar"><NavLink to="/" className="icon"><FaHome/></NavLink></li>
    <li className="navbar"><NavLink to="/" className="icon"><FaTasks/></NavLink></li>
    <li className="navbar"><NavLink className="icon"><FaShoppingBasket/></NavLink></li>
    <li className="navbar"><NavLink className="icon"><FaUserAlt/></NavLink></li>
</ul>
    </footer>
  )
}
