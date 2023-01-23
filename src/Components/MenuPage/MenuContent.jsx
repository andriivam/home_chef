import React ,{useState}from 'react'
import './MenuPage.css'
import { testData } from '../../data'
import { Link } from 'react-router-dom'

const menuTable = testData[0].users[0].menuDetails[0]

console.log(menuTable)
const qnty = 0


export default function MenuContent() {
    const[quantity,setQuantity] = useState(qnty)
    const decrementFn=() =>{
        setQuantity(prevQuantity=> prevQuantity-1)
    }
    const incrementFn=() =>{
        setQuantity(prevQuantity=> prevQuantity+1)
    }

  return (
    <div className='menuContent'>
        <img src = {menuTable.menuPhoto} alt="menuPhoto"/>
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
            { quantity === 0? (
            <button className="addToCarte" onClick={incrementFn}>Add to Cart</button>
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
            </div>

            }

        </div>
    </div>
  )
}
