import React from 'react'
import './Home.css'
import { useLocation, Link } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from 'react';



export default function Catagories() {
    const [cuisineData, setCuisineData] = useState([]);

    let url = useLocation();

    const getCuisineType = async () => {

        try {
            const response = await fetch('http://localhost:3001/home');
            const responseData = await response.json();
            setCuisineData(responseData);
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getCuisineType()
    }, []);


    return (

        cuisineData.map(type => {
            return (
                <Link key={uuidv4()} to={`${url.pathname}/${type.id}/ChefList/`}>
                    <div key={uuidv4()} className="categoryEach">
                        <img className="imgC" src={type.photo} alt={"dishPhoto"}></img>
                        <p className="paraC">{type.cuisineType}</p>
                    </div>
                </Link>
            )
        })

    )
}
