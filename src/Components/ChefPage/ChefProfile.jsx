import React from 'react'
import { testData } from '../../data'
import './ChefProfileStyle.css'
import { v4 as uuidv4 } from "uuid";


// const cuisineData = testData[0].cuisineType
const user_data = testData[0].users[1]
// let incomingUserId = 1
console.log(user_data.chefTable.chefPhoto)
export default function ChefProfile() { 

    return(
        <div key={uuidv4()} className="chefProfileMainDiv">
            <div>
                <img className="chefPic1" src={user_data.chefTable.chefPhoto} alt="Chef"></img>

            </div>
            <div key={uuidv4()}>
                <h2 className='chefName'>{user_data.userTable.name} {user_data.userTable.pre_nom}</h2>
                <p className="chefRating"><b>Chef Rating:</b>  {user_data.chefTable.rating}</p>
                {/* <p>Cuisine Type: {user_data.chefTable.cuisineType}</p> */}
                <p className='chefAboutMe'>&nbsp; &nbsp; &nbsp;{user_data.chefTable.aboutMe}</p>
                <p className="menuHeading"> {user_data.userTable.name}'s Menu</p>
                
            </div>
        </div>
    )}      
   
  
