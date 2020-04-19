import React from "react";

const CartContext = React.createContext();

function CartProvider(props) {
  const [cart, setCart] = React.useState([]);

  const addCart = (product) => {
    setCart([...cart, product]);
  };

  return <CartContext.Provider value={{ cart, addCart }} {...props} />;
}

function useCart() {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("Context no initialized");
  }
  return context;
}

export { CartProvider, useCart };
