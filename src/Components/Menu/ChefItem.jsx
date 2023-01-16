import React from 'react';
import { testData } from '../../data';
import './Menu.css';


export default function ChefItem({ id }) {
  console.log(`/home/${id}/ChefList/`, 'link with id');
  const kitchenId = testData[0].users;
  console.log(kitchenId, 'kitchenId');
  // chefTable.cuisineType;

  for (let i = 0; i < kitchenId.length; i++) {

    if (kitchenId[i].chefTable.cuisineType == `${id}`) {
      console.log(id, kitchenId[i].chefTable.cuisineType, 'map result')
      let result = [];
      result.push(kitchenId[i]);
      console.log(result, 'result loop')
      return (
        <div className='chefMainItem'>
          <div className='h3heading'>
            <h2>Cuisine Name</h2>
          </div>
          <div className='allChefList'>
            {result.map((type) => {
              return (
                <div key={type.id} className="chefItem">
                  <div className="imgDiv">
                    <img className="chefImg" src={null} alt="chef" />
                  </div>
                  <div className="chefCard">
                    <h3 className="chefName">{type.userTable.name}</h3>
                    <p className="cuisineDescription">{type.chefTable.aboutMe}</p>
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
