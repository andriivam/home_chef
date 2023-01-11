import React from 'react'
import './Home.css'
import Catagories from './Catagories'

export default function MainSection() {
    
    return( 
        <div className ="mainSection">
            <div className="">
                <h3 className="h3heading">Category</h3>
            </div>
            <div className="catagorySection">
                <Catagories></Catagories>
            </div>
        </div>
    ) 
}
