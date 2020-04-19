import React from "react";
import "./App.css";
import { CartProvider } from "./providers/CartProvider";
import { ItemCart } from "./components/ItemCart";
import { ListProducts } from "./components/ListProducts";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <ItemCart></ItemCart>
        <hr />
        <ListProducts></ListProducts>
      </CartProvider>
    </div>
  );
}

export default App;
