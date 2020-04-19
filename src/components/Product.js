import React from "react";
import { useCart } from "../providers/CartProvider";

function Product({ name, price }) {
  const { addCart } = useCart();

  const handleOnClickAddCart = () => {
    addCart({
      name,
      price,
    });
  };

  return (
    <div>
      {name} - {price}
      <button onClick={handleOnClickAddCart}>AGREGAR</button>
    </div>
  );
}

export { Product };
