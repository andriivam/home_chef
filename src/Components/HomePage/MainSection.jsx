import React from 'react'
import './Home.css'
import Catagories from './Catagories'


export default function MainSection(props) {
    return(
        <div className = "mainSection">
            <div>
                <h3 className="h3heading">Category</h3>
            </div>
            <div className="categorySection">
            <Catagories/>
            </div>

        </div>
    )
}
