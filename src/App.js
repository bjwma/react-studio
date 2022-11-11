import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cartItems, setCartItems] = useState([])
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div className="bakery-container">
        {bakeryData.map((item, index) => ( 
        <BakeryItem item ={item}/>
        ))}
      </div>

      <div>
        <h2>Cart</h2>
        {cartItems.map((item, index) => <p> {item.name} </p>)}
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
