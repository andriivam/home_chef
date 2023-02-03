<<<<<<< HEAD
import React ,{useState, useEffect}from 'react'
=======
import React, { useState, useEffect } from 'react'
>>>>>>> 0f2164d124bd90f6aa56f4e59988e0162020943d
import './MenuPage.css'

import { Link } from 'react-router-dom'
import CurrencyFormat from '../ShoppinCartContext/CurrencyFormat'



export default function MenuContent({ id }) {

    console.log(id, 'id menu')
    const [menuTable, setMenuTable] = useState([]);
    useEffect(() => {
        const getCuisine = async () => {
            try {
                const response = await fetch(`http://localhost:3001/home/${id}/Menu`)
                const responseData = await response.json();
                setMenuTable(responseData);

<<<<<<< HEAD
export default function MenuContent() {
    const getMenu = async () => {
        try {
            const response = await fetch("http://localhost:3001/menu")
            const menuTable = await response.json()
            console.log(menuTable,"data from backend")
        } catch (err) {
            console.error(err.message)
        }
    }
    
    useEffect(()=>{
        getMenu()
    })

    const[quantity,setQuantity] = useState(qnty)
    const [cart, setCart] = useState([])

    const handleAddToCart = (menuTable) =>{
        setCart([...cart,menuTable.name])
    }
    console.log(cart)
    const decrementFn=() =>{
        setQuantity(prevQuantity=> prevQuantity-1)
=======
            } catch (err) {
                console.error(err.message)
            }
        }
        getCuisine()
    }, [id]);

    const [quantity, setQuantity] = useState(0);
    const decrementFn = () => {
        setQuantity(quantity - 1)
>>>>>>> 0f2164d124bd90f6aa56f4e59988e0162020943d
    }
    const incrementFn = () => {
        setQuantity(quantity + 1)
    }
<<<<<<< HEAD
    const getQuantity = (quantity) => {
    }
  return (
    <div className='menuContent'>
        <img src = {menuTable.menuPhoto} alt="menuPhoto"/>
        <h4>{menuTable.name}</h4>
        <div className='miniPara'>
            <p>Chef Name</p>
            <p className='price'>{CurrencyFormat(menuTable.price)}/pp</p>
        </div>
        <div className='description'>
            <h5>Description</h5>
            <p>{menuTable.description}</p>
        </div>
        <div className='addToCart'>
            { quantity === 0? (
            <button className="addToCarte" onClick={incrementFn} onChange = {handleAddToCart}>Add to Cart</button>
            ):
            <div  className='addedToCart'>
                    <span className='quantityDiv'>
                        <button className='smallButton' onClick={decrementFn}>-</button>
                        <div>
                        <span className='quantityButton'>{quantity}</span> 
                        </div>
                        <button className='smallButton'onClick={incrementFn}>+</button>
                    </span><br/>
                    
                    <Link to="/home/user/checkout"> <button className='confirmOrder'>Confirm order</button></Link>
=======

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
>>>>>>> 0f2164d124bd90f6aa56f4e59988e0162020943d
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
