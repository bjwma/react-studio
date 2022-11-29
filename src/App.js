import "./App.css";
import "./components/BakeryItem.css"
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import React from 'react';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([])

  function addToCart(item) {
    setCartItems([...cartItems, item])
  }

  function calculateTotal() {
    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price
      
    }
    return total
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div>
        <h2>Cart</h2>
        {cartItems.map((item, index) => (<p> {item.name} </p>))}
        {/* TODO: render a list of items in the cart */}
        <h2>Total: ${calculateTotal()}</h2>
      </div>
    </div>
  );
}

export default App;
