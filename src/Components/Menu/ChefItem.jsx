import React from 'react';
import { v4 as uuidv4 } from "uuid";
import {Link} from 'react-router-dom';
import { testData } from '../../data';
import './Menu.css';
import { MdArrowBack } from 'react-icons/md';

export default function ChefItem({ id }) {
  console.log(`/home/${id}/ChefList/`, 'link with id');
  const kitchenId = testData[0].users;
  console.log(kitchenId, 'kitchenId');

  for (let i = 0; i < kitchenId.length; i++) {

    if (kitchenId[i].chefTable.cuisineType == `${id}`) {
      console.log(id, kitchenId[i].chefTable.cuisineType, 'map result')
      let result = [];
      result.push(kitchenId[i]);
      console.log(result, 'result loop')
      return (
        <div className='chefMainItem'>
          <div className='h3heading'>
            <h3 className="cuisineName">Cuisine Type</h3> 
            <div className="cuisine-type-container">
            <Link to="/home"><MdArrowBack className="iconBack" /></Link>
            <h5 className="cuisineType">{testData[0].cuisineType[0].cuisineType}</h5>
            </div>
            {/* NEED TO CHANGE THE CUISINE type WITH THE CORRESPONDING ID FROM THE PREVIOUS PAGE */}
          </div>
          <div className='allChefList'>
            {result.map((type) => {
              return (
                <div key={uuidv4()} className="chefItem">
                  <div className="imgDiv">
                    <Link to={`/home/:id/ChefList/:id/chefProfileFull`}> <img className="chefImg" src={testData[0].users[0].chefTable.chefPhoto} alt="chef" /></Link>
                  </div>
                  <div className="chefCard">
                    <p className="chefName"> <u> {type.userTable.name} </u></p>
                    <p className="cuisineDescription">{testData[0].users[2].chefTable.aboutMe}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )
     
    }
  }


}
