import React, { useContext } from "react";
import ProductsList from "./ProductsList";
import Porduct from "./Product";
import ProductContext from "./ProductContext";

function Nav(props) {
  const [products, setProducts] = useContext(ProductContext);
  return (
    <div className="nav">
      <h3>Product List</h3>
      <p>I have {products.length} products in my list</p>
    </div>
  );
}

export default Nav;
