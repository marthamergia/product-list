import React, { useState } from "react";
import Product from "./Product";
import Nav from "./Nav";

function ProductsList(props) {
  console.log(props);
  return (
    <div>
      <Product products={props.products} />
    </div>
  );
}

export default ProductsList;
