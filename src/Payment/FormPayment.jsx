import React from 'react';
import { Link } from 'react-router-dom';
import './Payment.css';

export default function FormPayment() {
    const submitHandler= () =>{
        let allValues = true;
        if(allValues)
            return (<Link to='/home/user/checkout/lastPage'/>)
    }

    return (
        <div>
            <form className="form">
                <input type="text" placeholder="Card Number" />
                <input type="text" placeholder="Expire Date" />
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Second Name" />
              <Link to='/home/user/checkout/lastPage'>  <input type="submit" name="Pay" onClick={submitHandler}/> </Link>
            </form>
        </div>
    )
}
