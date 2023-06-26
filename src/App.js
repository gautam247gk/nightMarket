import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import { ShopContextProvider } from "./context/shopContext";
import { PRODUCTS } from "./assets/products.js";

function App() {
  const [products, setProducts] = useState(PRODUCTS);

  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("products")) || PRODUCTS;
    setProducts(storedProducts);

    if (localStorage.getItem("firstLoadTime") === null) {
      localStorage.setItem("firstLoadTime", new Date().toString());
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Routes>
            <Route
              path="/nightmarket"
              element={<Home prods={products} setProducts={setProducts} />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
