import React, { useState, useEffect } from 'react';

const AddToCart = ({ item }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
      <div>
        {cart.map((item, index) => (
          <div key={index}>
            {item.name} - ${item.price}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddToCart;

