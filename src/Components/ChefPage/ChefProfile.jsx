import React from 'react'
import { testData } from '../../data'
import './ChefProfileStyle.css'
import { v4 as uuidv4 } from "uuid";
import Header from '../HomePage/Header';


// const cuisineData = testData[0].cuisineType
const user_data = testData[0].users[1]
// let incomingUserId = 1
console.log(user_data.chefTable.aboutMe)
export default function ChefProfile() { 

    return(
        <div> 
            <Header />
        
        <div key={uuidv4()} className="chefProfileMainDiv">
            <div>
                <img className="chefPic1" src={testData[0].users[0].chefTable.chefPhoto} alt="Chef"></img>
            </div>
            <div key={uuidv4()}>
                <h2 className='chefName'>{user_data.userTable.name} </h2>
                <p className="chefRating"><b>Chef Rating:</b>  {user_data.chefTable.rating}</p>
                <p className="chefAddress"><b>Address </b> <address className='address'>  {testData[0].users[0].userTable.address} <br/>{testData[0].users[0].userTable.postCode} <br/>{testData[0].users[0].userTable.phone}</address></p><br/>
                <p className='chefAboutMe'>&nbsp; &nbsp; &nbsp;"{user_data.chefTable.aboutMe}"</p><br />
                <hr />
                {/* <p>Cuisine Type: {cuisine_type}</p> */}
                <h2 className="menuHeading"> {user_data.userTable.name}'s Menu</h2>
                
            </div>
        </div>
        </div>
    )}      
   
  
