import React from 'react'
import './Home.css'
import { testData } from '../../data';
import { useLocation, Link} from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";

const cuisineData = testData[0].cuisineType

export default function Catagories () {
    let url = useLocation();
    
    return(
        cuisineData.map(type =>{
            return (
                <Link key={uuidv4()} to={`${url.pathname}/${type.id}/ChefList/`}>
                    <div key={uuidv4()} className="categoryEach">
                        <img className="imgC" src ={type.cuisinePhoto} alt={type.cuisineType+"photo"}></img>
                        <p className="paraC">{type.cuisineType}</p>
                    </div>
                </Link>
            ) 
        })
    )
}
