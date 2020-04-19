import React from "react";
import { useFetchListProducts } from "../hooks/useFetchListProducts";
import { Product } from "./Product";

function ListProducts() {
  const { listProducts } = useFetchListProducts();
  return (
    <React.Fragment>
      {listProducts.map((product, i) => (
        <Product key={i} name={product.name} price={product.price}></Product>
      ))}
    </React.Fragment>
  );
}

export { ListProducts };
