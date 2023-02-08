import './Home.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import '../UserChef/Home.css'

function DishInput({ dishDescription, setDishDescription, dishImage, setDishImage, dishPrice, setDishPrice, dishDate, setDishDate, dishName, setDishName }) {
    const handleDishImageUpload = (event) => {
        setDishImage(event.target.files[0]);
    };
    return (
        <div className="dish-container">
            <div className="chefMenuImg">
                <label>
                    <p className="imgBoxText">Dish Image </p>
                    <input className="inputs-fields" type="file" onChange={handleDishImageUpload} accept="image/*" />
                </label>
            </div>

            <label>
                Name
                <input className="input-fields" type="text" value={dishName} onChange={(event) => setDishName(event.target.value)} />
            </label>
            <label>
                Dish Description <br />
                <textarea className="input-fields" type="text" value={dishDescription} onChange={(event) => setDishDescription(event.target.value)} />
            </label>
            <label>
                Price<br />
                <input className="input-fields" type="text" value={dishPrice} onChange={(event) => setDishPrice(event.target.value)} />
            </label>
            <label>
                Date<br />
                <input className="input-fields" type="date" value={dishDate} onChange={(event) => setDishDate(event.target.value)} />
            </label>

            <br />
        </div>
    )
}

function ChefMenu() {
    const [dishes, setDishes] = useState([{ dishDescription: '', dishImage: null, dishPrice: '', dishDate: '', dishName: '' }]);
    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission here
        console.log(dishes);
    };
    const addDish = () => {
        setDishes([...dishes, { dishDescription: '', dishImage: null, dishPrice: '', dishDate: '', dishName: '' }]);
    }




    return (
        <div className='background'>
            <div className="headerTag">

                <div ><Link to="/home/LoginPage/ChefForm">
                    <FontAwesomeIcon className="backButton" icon={faArrowCircleLeft}></FontAwesomeIcon>
                </Link></div>
                <div ><h3 className='userTitleu'> Add your dish</h3></div>


            </div>

            <form className="form-containerChefMenu" onSubmit={handleSubmit}>
                {dishes.map((dish, index) => (
                    <DishInput key={index} dishDescription={dish.dishDescription} setDishDescription={(value) => {
                        const newDishes = [...dishes];
                        newDishes[index].dishDescription = value;
                        setDishes(newDishes);
                    }} dishName={dish.dishName} setDishName={(value) => {
                        const newDishes = [...dishes];
                        newDishes[index].dishName = value;
                        setDishes(newDishes);
                    }} dishPrice={dish.dishPrice} setDishPrice={(value) => {
                        const newDishes = [...dishes];
                        newDishes[index].dishPrice = value;
                        setDishes(newDishes);
                    }} dishDate={dish.dishDate} setDishDate={(value) => {
                        const newDishes = [...dishes];
                        newDishes[index].dishDate = value;
                        setDishes(newDishes);
                    }}
                        dishImage={dish.dishImage} setDishImage={(value) => {
                            const newDishes = [...dishes];
                            newDishes[index].dishImage = value;
                            setDishes(newDishes);
                        }} />
                ))}
                <button className="submit-button" onClick={addDish}>+ Add new Dish</button> <br /><br />
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ChefMenu;
