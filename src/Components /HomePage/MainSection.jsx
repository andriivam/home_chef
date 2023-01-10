import React from 'react'
import './Home.css'

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
}
