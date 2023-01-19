import React from 'react';
import ChefItem from './ChefItem';
import {Link, useParams } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';
// import Footer from '../HomePage/Footer';


export default function ChefList() {
    let {id} = useParams();
  return (
    <div className="chefList">
      <Link to="/home"><FaBackward className="iconBack" /></Link>
      <ChefItem id={id}/>
      {/* <Footer/> */}
    </div>
  )
}
