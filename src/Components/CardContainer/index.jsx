// Card.js

import React from "react";
import "./CardContainer.css";
import Card from "../Card";
import { PRODUCTS } from "../../assets/products";

const CardContainer = () => {
  const renderCards = () => {
    const productKeys = Object.keys(PRODUCTS).slice(0, 5); // Get the first five keys
    return productKeys.map((key) => {
      const product = PRODUCTS[key];
      //   console.log(product.name);
      return <Card key={product.id} product={product} />;
    });
  };

  return <div className="card-row">{renderCards()}</div>;
};

export default CardContainer;
