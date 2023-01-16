import React from 'react'
import { testData } from '../../data'
import "./ChefMenu.css"

console.log(testData[0].users)
const users = testData[0].users
const menu_detail = testData[0].users[0].menuDetails[0]
    console.log(menu_detail)
export default function ChefMenu() {
  return (
    <div>
        <div className="chefMenu">
            <img className="menupic1"src={menu_detail.menuPhoto}></img>
            <div className="menufood1">
                <h2>{menu_detail.name}</h2>
                <p>{menu_detail.description}</p>
                <p>{menu_detail.price}</p>
                <p>{menu_detail.date}</p>
            </div>
        </div>
    </div>
  )
}

// export default function ChefMenu() {
//   return(users.map(user=>{
//     // console.log(user.chefTable.id)
//     // console.log(user.menuDetails)
//     let menuDets = user.menuDetails
//     menuDets.map(md =>{
//         // console.log(md.id)
//         if(md.id == user.chefTable.id){
//            console.log(true)
//            console.log(md.id,user.chefTable.id)
//            console.log(md.description)
//            return(
//                <div>
//                    <div>
//                        <p>abcd</p>
//                     <img src={md.menuPhoto} alt="foodimg"></img>
//                     <p>{md.description}</p>
//                    </div>
//                </div>
//            )
//         }
//     })
//       })
//   )
// }
