import React from "react";
import "./App.css";
import ProductsList from "./ProductsList";
import Nav from "./Nav";
import { ProductProvider } from "./ProductContext";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Nav />
        <ProductsList />
      </ProductProvider>
    </div>
  );
}

export default App;
