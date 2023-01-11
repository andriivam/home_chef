import React from 'react';
import { testData } from '../../data';
import './Menu.css';
import { FaBackward } from 'react-icons/fa';
import {Link } from 'react-router-dom';

console.clear();
const cuisineData = testData[0].users;
console.log(cuisineData, 'testData')

export default function ChefItem() {
  return (
    <div >
      {cuisineData.map((type) => {
        return (
          <div key={type.id} >
            <button><Link to="/mainSection"><FaBackward/></Link></button>
            <h2 key={type.id}>{type.cuisineType[0].cuisineType}</h2>
            <div className="chefItem">
              <div className="imgDiv">
              <img className="chefImg" src={type.cuisineType[0].cuisinePhoto} alt="chef" />
              </div>
            <div className="chefCard">
            <h3 className="chefName">{type.chefTable.aboutMe}</h3>
            <p className="cuisineDescription">Description</p>
            </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
