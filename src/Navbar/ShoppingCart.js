import React, { useState } from 'react';
import './ShoppingCart.css';
import Header from '../Home/Header';

const ShoppingCart = () => {
    // Sample cart items
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Stylish Sunglasses', imgSrc: 'https://i.pinimg.com/564x/d3/36/e8/d336e8b01c8ba25fc076d7a476b58290.jpg', price: 99.99, quantity: 1 },
        { id: 2, name: 'Modern Eyeglasses', imgSrc: 'https://i.pinimg.com/564x/9e/28/34/9e28342f6c87c2e2aa90827e67222dba.jpg', price: 79.99, quantity: 2 },
        { id: 3, name: 'Sports Glasses', imgSrc: 'https://i.pinimg.com/564x/a2/f8/37/a2f8372de65ccf39fb8c98cce2f81b65.jpg', price: 59.99, quantity: 1 },
    ]);

    const updateQuantity = (id, quantity) => {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: Number(quantity) } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <>
            <Header/>
            <div className="shopping-cart-container">
                <h1 className="shopping-cart-title">Shopping Cart</h1>
                <div className="shopping-cart-items">
                    {cartItems.map(item => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.imgSrc} alt={item.name} className="cart-item-img" />
                            <div className="cart-item-details">
                                <h2>{item.name}</h2>
                                <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                <div className="cart-item-quantity">
                                    <label htmlFor={`quantity-${item.id}`}>Quantity:</label>
                                    <input 
                                        type="number" 
                                        id={`quantity-${item.id}`} 
                                        value={item.quantity} 
                                        min="1" 
                                        onChange={(e) => updateQuantity(item.id, e.target.value)}
                                    />
                                </div>
                                <button className="remove-item-button" onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="shopping-cart-total">
                    <h2>Total: ${calculateTotal()}</h2>
                    <button className="checkout-button">Proceed to Checkout</button>
                </div>
            </div>
        </>
    );
};

export default ShoppingCart;
