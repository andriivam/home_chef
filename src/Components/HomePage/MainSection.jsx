import React from 'react'
import './Home.css'
import Catagories from './Catagories'
import { useLocation, Link } from 'react-router-dom';

export default function MainSection() {
    let url = useLocation();
    return(
        <div className = "mainSection">
            <div className="subHeading">
                <h3>Category</h3>
            </div>
            <div className="categorySection">
            <Link to={`${url.pathname}/ChefList`}><Catagories/></Link>
            </div>

        </div>
    )
}
