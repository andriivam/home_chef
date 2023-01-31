import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
import { Link } from 'react-router-dom';
import './Menu.css';
import { MdArrowBack } from 'react-icons/md';

export default function ChefItem({ id }) {
  const [kitchenId, setKitchenId] = useState([]);

  const getCuisine = async () => {
    try {
      const response = await fetch(`http://localhost:3001/home/${id}/ChefList`)
      const responseData = await response.json();
      setKitchenId(responseData)

    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getCuisine()
  }, []);

  console.log(kitchenId, 'kitchenId');

  return (
    <div className='chefMainItem'>
      <div className='h3heading'>
        <h3 className="cuisineName">Cuisine Type</h3>
        <div className="cuisine-type-container">
          <Link to="/home"><MdArrowBack className="iconBack" /></Link>
          <h5 className="cuisineType">{kitchenId.cuisineType}</h5>
        </div>
      </div>
      <div className='allChefList'>
        {kitchenId.map((info) => {
          return (
            <div key={uuidv4()} className="chefItem">
              <div className="imgDiv">
                <Link to={`/home/:id/ChefList/:id/chefProfileFull`}> <img className="chefImg" src={info.chefPhoto} alt="chef" /></Link>
              </div>
              <div className="chefCard">
                <p className="chefName"> <u> {info.aboutMe} </u></p>
                <p className="cuisineDescription">{info.cuisineType}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>

  )
}

