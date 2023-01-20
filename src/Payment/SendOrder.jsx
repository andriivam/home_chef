import React from 'react';
import { Link } from 'react-router-dom';

export default function SendOrder() {
    return (
        <div>
            <Link to='/home/user/checkout/lastPage'><button>Send Order</button></Link>
        </div>
    )
}
