import React from 'react';
import ChefItem from './ChefItem';
import {Link } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';


export default function ChefList() {

  return (
    <div className="chefList">
      <Link to="/mainSection"><FaBackward className="iconBack" /></Link>
      <ChefItem/>
    </div>
  )
}
