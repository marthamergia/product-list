import React from "react";
import "./App.css";
import ProductsList from "./ProductsList";
import Nav from "./Nav";
import { ProductProvider } from "./ProductContext";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Nav />
        <ProductsList />
        <Footer />
      </ProductProvider>
    </div>
  );
}

export default App;
