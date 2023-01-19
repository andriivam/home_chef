import React from 'react';
import {Link} from 'react-router-dom';
import { testData } from '../../data';
import './Menu.css';


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
            <h2 className="cuisineName">Cuisine Name</h2>
          </div>
          <div className='allChefList'>
            {result.map((type) => {
              return (
                <div key={type.id} className="chefItem">
                  <div className="imgDiv">
                    <Link to={`/home/:id/ChefList/:id/chefProfileFull`}> <img className="chefImg" src={testData[0].cuisineType[0].cuisinePhoto} alt="chef" /></Link>
                  </div>
                  <div className="chefCard">
                    <p className="chefName">{type.userTable.name}</p>
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
