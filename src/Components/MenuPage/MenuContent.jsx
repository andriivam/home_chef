import React, { useState, useEffect } from 'react'
import './MenuPage.css'

import { Link } from 'react-router-dom'



export default function MenuContent({ id }) {

    console.log(id, 'id menu')
    const [menuTable, setMenuTable] = useState([]);
    useEffect(() => {
        const getCuisine = async () => {
            try {
                const response = await fetch(`https://home-chef-app-team.herokuapp.com/home/${id}/Menu`)
                const responseData = await response.json();
                setMenuTable(responseData);

            } catch (err) {
                console.error(err.message)
            }
        }
        getCuisine()
    }, [id]);

    const [quantity, setQuantity] = useState(0);
    const decrementFn = () => {
        setQuantity(quantity - 1)
    }
    const incrementFn = () => {
        setQuantity(quantity + 1)
    }

    return (
        <div className='menuContent'>
            <img src={menuTable.menuPhoto} alt="menuPhoto" />
            <h4>{menuTable.name}</h4>
            <div className='miniPara'>
                <p>Chef Name</p>
                <p className='price'>{menuTable.price}€/pp</p>
            </div>
            <div className='description'>
                <h5>Description</h5>
                <p>{menuTable.description}</p>
            </div>
            <div className='addToCart'>
                {quantity === 0 ? (
                    <button className="addToCarte" onClick={incrementFn}>Add to Cart</button>
                ) :
                    <div className='addedToCart'>
                        <span className='quantityDiv'>
                            <button className='smallButton' onClick={decrementFn}>-</button>
                            <div>
                                <span className='quantityButton'>{quantity}</span>
                            </div>
                            <button className='smallButton' onClick={incrementFn}>+</button>
                        </span><br />

                        <Link to="/home/user/checkout"> <button className='confirmOrder'>Confirm order</button></Link>
                    </div>

                }
            </div>
        </div>
    )
}
