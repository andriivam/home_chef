import React from 'react';
import ChefItem from './ChefItem';
import {Link, useParams } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
{/* <FontAwesomeIcon icon="fa-solid fa-chevron-left" / */}
// import Footer from '../HomePage/Footer';


export default function ChefList() {
    let {id} = useParams();
  return (
    <div className="chefList">
      <Link to="/home"><FaChevronLeft className="iconBack" /></Link>
      <ChefItem id={id}/>
      {/* <Footer/> */}
    </div>
  )
}
