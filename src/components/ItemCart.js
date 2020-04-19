import React from "react";
import { useCart } from "../providers/CartProvider";
import { ListCartProduct } from "./ListCartProduct";

function ItemCart() {
  const { cart } = useCart();
  return (
    <React.Fragment>
      <h3>cart {cart.length}</h3>
      <ListCartProduct />
    </React.Fragment>
  );
}

export { ItemCart };
