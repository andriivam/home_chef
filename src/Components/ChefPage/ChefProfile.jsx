import React, { useState } from 'react'
import { testData } from '../../data'
import './ChefProfileStyle.css'

console.log(testData[0].users)
// const cuisineData = testData[0].cuisineType
const users = testData[0].users
let incomingUserId = 1

export default function ChefProfile() { 
  return ( users.map(user=>{
        if(user.chefTable.id === incomingUserId)
           { 
            if(user.userTable.chefTable_id === user.chefTable.id){
                let ChefName = user.userTable.name
               let ChefPre_nom = user.userTable.pre_nom
            //   cuisineData.map(data=>{
            //     let cuisineData_id = data.id
            //     if((user.chefTable.cuisineType(should compare with id))===(cuisineData_id)){
            //         let cuisine_type = data.cuisineType
                
                // console.log(cuisineData_id)  
                    //  console.log(cuisine_type)
                return(
                    <div className="chefProfileMainDiv">
                        <div>
                            <img className="chefPic1" src={user.chefTable.chefPhoto} alt="Chef Photo"></img>
                        </div>
                        <div>
                            <h2 className='chefName'>{ChefName} {ChefPre_nom}</h2>
                            <p className="chefRating"><b>Chef Rating:</b>  {user.chefTable.rating}</p>
                            <p className='chefaboutMe'>{user.chefTable.aboutMe}</p>
                            {/* <p>Cuisine Type: {cuisine_type}</p> */}
                            <h2 className="menuHeading"> {ChefName}'s Menu</h2>
                            
                        </div>
                    </div>
                )}
                // })  
            // }
        }
    }))
}
  
      
   
  