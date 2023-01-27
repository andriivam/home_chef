import './Home.css'
import React, { useState} from 'react';

function DishInput({ dishDescription, setDishDescription, dishImage, setDishImage }) {
    const handleDishImageUpload = (event) => {
        setDishImage(event.target.files[0]);
    };
    
    // "id": "1",
    // "description": "The secret to getting uber tender meatballs is bread; yes, bread. And the secret to getting uber flavorful meatballs is in the combination of meats - I am talking about lean ground beef with sweet Italian sausage.",
    // "name": "Spaghetti and Meatballs",
    // "date": "2023-01-08T23:00:00.000Z",
    // "price": 14.5,
    // "userOrder_rating": 4.5,
    // "chefTable_id": "1",
    // "menuPhoto": "https://www.pressurecookrecipes.com/wp-content/uploads/2022/06/instant-pot-spaghetti-and-meatballs.jpg"
    return (
        <div className="dish-container">
            <label>
                Dish Image:
                <input className="input-field hide-file-text chooseFile" type="file" onChange={handleDishImageUpload} accept="image/*" />
            </label>
            <label>
                Dish Description: <br />
                <textarea className="input-field" type="text" value={dishDescription} onChange={(event) => setDishDescription(event.target.value)} />
            </label><br/><br/>
        </div>
    )
}

function ChefMenu() {
    const [dishes, setDishes] = useState([{ dishDescription: '', dishImage: null }]);
    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission here
        console.log(dishes);
    };
    const addDish = () => {
        setDishes([...dishes, { dishDescription: '', dishImage: null }]);
    }

 
      

    return (
        <div className='background'>
            <h3 className='userTitleu'> Become A Chef</h3>
            <form className="form-container" onSubmit={handleSubmit}>
                {dishes.map((dish, index) => (
                    <DishInput key={index} dishDescription={dish.dishDescription} setDishDescription={(value) => {
                        const newDishes = [...dishes];
                        newDishes[index].dishDescription = value;
                        setDishes(newDishes);
                    }} dishImage={dish.dishImage} setDishImage={(value) => {
                        const newDishes = [...dishes];
                        newDishes[index].dishImage = value;
                        setDishes(newDishes);
                    }} />
                ))}
                <button className="submit-button" onClick={addDish}>+ Add new Dish</button> <br/><br/>
                <button className="submit-button" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ChefMenu;
