import React from 'react'
import { testData } from '../../data'
import './ChefProfileStyle.css'

console.log(testData[0].users)
// const cuisineData = testData[0].cuisineType
const user = testData[0].users[0]
// let incomingUserId = 1

export default function ChefProfile() {
    
        
                return (
                    <div className="chefProfileMainDiv">
                        <div>
                            <img className="chefPic1" src={user.chefTable.chefPhoto} alt="Chef"></img>
                        </div>
                        <div>
                            <h2 className='chefName'>{user.userTable.name} {user.userTable.pre_nom}</h2>
                            <p className="chefRating"><b>Chef Rating:</b>  {user.chefTable.rating}</p>
                            <p className="chefAboutMe">{user.chefTable.aboutMe}</p>
                            {/* <p>Cuisine Type: {cuisine_type}</p> */}
                            <h2 className="menuHeading"> {user.userTable.name}'s Menu</h2>

                        </div>
                    </div>
                )
            
            // })  
            // }
       // }
    // }))
}



