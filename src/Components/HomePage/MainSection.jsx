import React from 'react'
import './Home.css'
<<<<<<< HEAD

import { testData } from '../../data'
console.log(testData[0].cuisineType)
const cuisineData = testData[0].cuisineType

export default function MainSection() {
    
    return( 
        cuisineData.map(type =>{
            return(
                <div key={type.id} className="mainSection">
                    <img className="imgC" src ={type.cuisinePhoto} alt={type.cuisineType+"photo"}></img>
                    <p>{type.cuisineType}</p>
                </div>
            )
        })
    )   
=======
import Catagories from './Catagories'


export default function MainSection() {
    return(
        <div className = "mainSection">
            <div className="subHeading">
                <h3>Category</h3>
            </div>
            <div className="catagorySection">
                <Catagories/>
            </div>

        </div>
    )
>>>>>>> e580163b06b94aba68d604b48cb68f6dc0194e94
}
