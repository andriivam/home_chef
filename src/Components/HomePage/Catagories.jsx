import React from 'react'
import './Home.css'
import { testData } from '../../data';
import { useLocation, Link} from 'react-router-dom';

const cuisineData = testData[0].cuisineType

export default function Catagories () {
    let url = useLocation();
    
    return(
        cuisineData.map(type =>{
            return (
                <Link to={`${url.pathname}/${type.id}/ChefList/`}>
                    <div key={type.id} className="categoryEach">
                        <img className="imgC" src ={type.cuisinePhoto} alt={type.cuisineType+"photo"}></img>
                        <p className="paraC">{type.cuisineType}</p>
                    </div>
                </Link>
            ) 
        })
    )
}
