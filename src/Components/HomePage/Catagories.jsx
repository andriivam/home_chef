import React from 'react'
import './Home.css'
import { testData } from '../../data';
const cuisineData = testData[0].cuisineType

export default function Catagories() {
    return(
        cuisineData.map(type =>{
            return (
                <div key={type.id} className="categoryEach">
                    <img className="imgC" src ={type.cuisinePhoto} alt={type.cuisineType+"photo"}></img>
                    <p className="paraC">{type.cuisineType}</p>
                </div>
            ) 
        })
    )
    
}
