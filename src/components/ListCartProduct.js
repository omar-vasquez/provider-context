import React from "react";
import { Product } from "./Product";
import { useCart } from "../providers/CartProvider";

function ListCartProduct() {
  const { cart } = useCart();
  return (
    <React.Fragment>
      {cart.map((product, i) => (
        <Product key={i} name={product.name} price={product.price}></Product>
      ))}
    </React.Fragment>
  );
}

export { ListCartProduct };
