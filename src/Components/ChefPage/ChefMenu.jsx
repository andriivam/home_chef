import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./ChefMenu.css";
import { v4 as uuidv4 } from "uuid";
// import Footer from '../HomePage/Footer';


export default function ChefProfile({id}) {
  const [chefMenu, setChefMenu] = useState([]);
  let url = useLocation();
  useEffect(() => {
    const getCuisine = async () => {
      try {
        const response = await fetch(`http://localhost:3001/${id}/chefProfileFull`)
        const responseData = await response.json();
        console.log(responseData, 'res data')
        setChefMenu(responseData)

      } catch (err) {
        console.error(err.message)
      }
    }
    getCuisine()
  }, [id]);
  
  return ( 
      chefMenu.map(menu_detail => {
        return(
        <div>
          
          <div className="chefMenu">
            <div key={uuidv4()} className="menuItem1">
              <Link className='itemlink' to={`${url.pathname}/${menu_detail.id}/Menu`}>
                <img className="menuPic1"src={menu_detail.photoUrl} alt="menu"></img>
              </Link>
                  <div className="menufood1">
                      <h5 className="menuItemName">{menu_detail.name}</h5>
                      <p className="menuItemDes">{menu_detail.description}</p>
                      <p className="menuItemPrice">€ {menu_detail.price}</p>
                      <p className="menuItemDate"><b>Available for:</b> {menu_detail.date}</p>
                  </div>
            </div>
          </div>
          {/* <Footer /> */}
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
