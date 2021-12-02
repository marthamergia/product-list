import React, { useContext } from "react";
import { ProductContext } from "./ProductContext";

function Product() {
  const [products, setProducts] = useContext(ProductContext);
  return (
    <div>
      {products.map((product) => {
        return (
          <div>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
