import React from 'react';
import { testData } from '../../data';
import './Menu.css';

console.clear();
console.log(testData)
console.log(testData[0].cuisineType[0].cuisineType)
const cuisineData = testData[0].users;
// console.log(cuisineData, 'testData');

// let cuisineType = 1;
// cuisineData.forEach(chef => {
// if(chef.chefTable.cuisineType === cuisineType)
//   console.log(chef.chefTable, 'chefTable')
// })


export default function ChefItem() {

  return (
    <div className='chefMainItem'>
      <div className='h3heading'>
        <h2 >{testData[0].cuisineType[0].cuisineType}</h2>
      </div>
      <div className='allChefList'>
        {cuisineData.map((type) => {
          return (
              <div key={type.id} className="chefItem">
                <div className="imgDiv">
                  <img className="chefImg" src={type.cuisineType[0].cuisinePhoto} alt="chef" />
                </div>
                <div className="chefCard">
                  <h3 className="chefName">{type.chefTable.aboutMe}</h3>
                  <p className="cuisineDescription">Description</p>
                </div>
              </div>
          )
        })}
      </div>
    </div>
  )
}
