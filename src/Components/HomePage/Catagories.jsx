import React from 'react'
import './Home.css'
import { testData } from '../../data';
import { useLocation, Link, useParams } from 'react-router-dom';

const cuisineData = testData[0].cuisineType



export default function Catagories() {
    let url = useLocation();
    let {userName} = useParams();
    return(
        cuisineData.map(type =>{
            return (
                <Link to={`${url.pathname}/ChefList/${type.id}`}>
                    <div key={type.id} className="categoryEach">
                        <h1>id:{userName}</h1>
                        <img className="imgC" src ={type.cuisinePhoto} alt={type.cuisineType+"photo"}></img>
                        <p className="paraC">{type.cuisineType}</p>
                    </div>
                </Link>
            ) 
        })
    )
    
}
