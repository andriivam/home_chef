import React, { useState, useEffect } from 'react';
import './ChefProfileStyle.css';
import { v4 as uuidv4 } from "uuid";
// import Header from '../HomePage/Header';


export default function ChefProfile({ id }) {
    const [chefProfile, setChefProfile] = useState([]);

    useEffect(() => {
        const getCuisine = async () => {
            try {
                const response = await fetch(`http://localhost:3001/${id}/chefProfileFull`)
                const responseData = await response.json();
                console.log(responseData, 'res data profile')
                setChefProfile(responseData)

            } catch (err) {
                console.error(err.message)
            }
        }
        getCuisine()
    }, [id]);

    return (
        <div key={uuidv4()} className="chefProfileMainDiv">
            {chefProfile.map((chef) => {
                return (
                    <div key={uuidv4()}>
                        <div>
                            <img className="chefPic1" src={chef.chefPhoto} alt="Chef"></img>
                        </div>
                        <div >
                            <h2 className='chefName'>{chef.pre_nom} </h2>
                            <p className="chefRating"><b>Chef Rating:</b> {chef.rating}</p>
                            <p className="chefAddress"><b>Address </b> <address className='address'> {chef.address} <br />{chef.postCode} <br />{chef.phone}</address></p><br />
                            <p className='chefAboutMe'>&nbsp; &nbsp; &nbsp;"{chef.aboutMe}"</p><br />
                            <hr />
                            {/* <p>Cuisine Type: {cuisine_type}</p> */}
                            <h2 className="menuHeading"> {chef.name}'s Menu</h2>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}


