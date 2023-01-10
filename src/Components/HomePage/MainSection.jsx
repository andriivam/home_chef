import React from 'react'
import './Home.css'
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
}
