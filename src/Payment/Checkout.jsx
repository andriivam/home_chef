import React, { useState } from 'react';
import './Payment.css';
import Form from './FormPayment';
import SendOrder from './SendOrder';

export default function Checkout() {
    const [open, setOpen] = useState(false);
    const [form, setFormOpen] = useState(false);
    const [payment, setPayment] = useState('select');
    const [button, setButton] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }
    const handlePayment = (event) => {
        setPayment(event.target.value);
        if (event.target.value === "cash") {
            setButton(true);
            setFormOpen(false);
        }  else if (event.target.value === "select") {
            setFormOpen(false);
            setButton(false);
        } else {
            setFormOpen(true);
            setButton(false);
        }
        console.log(event.target.value, 'payment');
    }
    return (
        <div className="container">
            <div className="head">
                <h1>Your order will be ready for the</h1>
                <p>Date & Hour</p>
            </div>
            <div>
                <h2>RECAP of your order</h2>
                <ul>
                    <li>Spaghetti Bolognese x 1</li>
                </ul>
                <p>Total: 14$</p>

            </div>
            <hr />
            <div>
                <button onClick={handleOpen}>Payment Method</button>
                {open ?
                    <select value={payment} onChange={handlePayment}>
                        <option value="select">Select option</option>
                        <option value="cash">Cash</option>
                        <option value="bancontact">Bancontact</option>
                        <option value="visa">Visa</option>
                        <option value="mastercard">MasterCard</option>
                    </select> : <button>Edit order</button>}
                {button ? <SendOrder /> : null} 
                {form ? <Form /> : null}
            </div>
        </div>
    )
}
