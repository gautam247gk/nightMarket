import React, { useEffect, useState } from "react";
import "./CardContainer.css";
import Card from "../Card";
// import { PRODUCTS } from "../../assets/products";

const CardContainer = (props) => {
  let PRODUCTS = props.prods;
  let setProducts = props.setProducts;
  console.log(props);
  if (localStorage.getItem("products") != null) {
    PRODUCTS = JSON.parse(localStorage.getItem("products"));
  }
  const initialCountdowns = {}; // Initialize with an empty object
  PRODUCTS.forEach((product) => {
    initialCountdowns[product.id] = product.time_left; // Set initial countdown value
  });
  const [countdowns, setCountdowns] = useState(initialCountdowns); // Use the initialCountdowns state

  useEffect(() => {
    const timer = setInterval(() => {
      updateCountdowns();
    }, 10000); // Run the timer every minute (60,000 milliseconds)

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(PRODUCTS));
  }, [PRODUCTS]);

  const updateCountdowns = () => {
    const updatedCountdowns = { ...countdowns };
    let shouldRotate = false;

    const updatedProducts = PRODUCTS.map((product) => {
      const { id, time_left } = product;
      if (time_left > 0) {
        updatedCountdowns[id] = time_left - 1;
        return { ...product, time_left: time_left - 1 };
      } else {
        shouldRotate = true;
        return product;
      }
    });

    if (shouldRotate) {
      rotateProducts(updatedProducts);
    }

    setProducts(updatedProducts);
    setCountdowns(updatedCountdowns);
  };

  const rotateProducts = (updatedProducts) => {
    const firstProduct = updatedProducts.shift(); // Remove the first product from the array
    updatedProducts.push(firstProduct); // Add the first product to the end of the array
  };

  const renderCards = () => {
    const productKeys = Object.keys(PRODUCTS).slice(0, 5); // Get the first five keys
    return productKeys.map((key) => {
      const product = PRODUCTS[key];
      const { id } = product;
      const timeLeft = countdowns[id] || 0;
      const updatedProduct = { ...product, time_left: timeLeft };

      return <Card key={product.id} product={updatedProduct} />;
    });
  };

  return <div className="card-row">{renderCards()}</div>;
};

export default CardContainer;
