import React from 'react'
import { testData } from '../../data'
import "./ChefMenu.css"


console.log(testData[0].users)
// const user_data = testData[0].users
const menu_details = testData[0].users[0].menuDetails
    // console.log(menu_detail)
export default function ChefMenu() {

  return (
      menu_details.map(menu_detail =>{
        return(
          <div>
        <div className="chefMenu">
          <div className="menuItem1">
            <img className="menuPic1"src={menu_detail.menuPhoto}></img>
              <div className="menufood1">
                  <h5 className="menuItemName">{menu_detail.name}</h5>
                  <p className="menuItemDes">{menu_detail.description}</p>
                  <p className="menuItemPrice">€ {menu_detail.price}</p>
                  <p className="menuItemDate"><b>Available for:</b> {menu_detail.date}</p>
              </div>
            </div>
        </div>
    </div>
        )
      })
    
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
