import React, { useState } from 'react'
import { testData } from '../../data'
import { user } from 'pg/lib/defaults';
import './ChefProfileStyle.css'

console.log(testData[0].users)
const users = testData[0].users
let incomingUserId = 1


export default function ChefProfile() { 
  return ( users.map(user=>{
        if(user.chefTable.id === incomingUserId)
           { 
            if(user.userTable.chefTable_id == user.chefTable.id){
                let ChefName = user.userTable.name
               let ChefPre_nom = user.userTable.pre_nom
            //    console.log(user.)
               
                
        return(
            
            <div className="chefProfileMainDiv">
                <div>
                    <img className="chefPic1" src={user.chefTable.chefPhoto} alt="Chef Photo"></img>
                </div>
                <div>
                    <h1>{ChefName} {ChefPre_nom}</h1>
                    <p>About Me: {user.chefTable.aboutMe}</p>
                    {/* <p>Cuisine Type: {ChefCuisineType}</p> */}
                    <p>Chef Rating: {user.chefTable.rating}</p>
                </div>
            </div>
        )}
           }
        
    }))
    
    // users.forEach(user=>{
    //     let chefTableData = user.chefTable
    //     console.log(chefTableData)
    //      return chefTableData.map(eachChef=>{
    //         (
    //             <div>
    //             <ul>
    //               <li>
    //                   {eachChef.id}
    //               </li>
    //               <li>
    //                   {eachChef.aboutMe}
    //               </li>
    //             </ul>
    //             </div>
    //        )
    //      })
        
    // })
      
      
    // chefTableData.map(type=>{
    //     return(
    //         <div key={type.id} className="chefProfilePage">
    //             <p className="cuisineType">{type.cuisineType}</p>
                
    //         </div>
    //     )
    // })
}
  
      
   
  