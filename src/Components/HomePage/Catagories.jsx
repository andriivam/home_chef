import React ,{useEffect}from 'react'
import './Home.css'
import { testData } from '../../data';
import { useLocation, Link} from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";

const cuisineData = testData[0].cuisineType

export default function Catagories () {
    const getCuisineType = async () => {
        try {
            const response = await fetch("http://localhost:3001/home")
            const jsonData = await response.json()
            console.log(jsonData,"cuisine Type data from backend")
        } catch (err) {
            console.error(err.message)
        }
    }
    
    useEffect(()=>{
        getCuisineType()
    })

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
