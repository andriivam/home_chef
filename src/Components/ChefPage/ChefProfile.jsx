import React from 'react'
import { testData } from '../../data'
import './ChefProfileStyle.css'

console.log(testData[0].users)
// const cuisineData = testData[0].cuisineType
const user_data = testData[0].users[0]
// let incomingUserId = 1

export default function ChefProfile() { 

    return(
        <div className="chefProfileMainDiv">
            <div>
                <img className="chefPic1" src={user_data.chefTable.chefPhoto} alt="Chef"></img>
            </div>
            <div>
                <h2 className='chefName'>{user_data.userTable.name} {user_data.userTable.pre_nom}</h2>
                <p className="chefRating"><b>Chef Rating:</b>  {user_data.chefTable.rating}</p>
                <p className='chefAboutMe'>&nbsp; &nbsp; &nbsp;{user_data.chefTable.aboutMe}</p>
                {/* <p>Cuisine Type: {cuisine_type}</p> */}
                <h2 className="menuHeading"> {user_data.userTable.name}'s Menu</h2>
                
            </div>
        </div>
    )}      
   
  
