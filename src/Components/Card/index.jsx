// Card.js

import React, { useContext } from "react";
import "./Card.css";
import { ShopContext } from "../../context/shopContext";

const Card = ({ product }) => {
  const { id, name, price, time_left } = product;
  const imageUrl = require(`../../assets/images/${id}.jpg`);
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  return (
    <div className="card-wrapper">
      <div className="card">
        <div
          className="card-image"
          style={{
            background: `url(${imageUrl}) no-repeat center center/cover`,
          }}
        />
      </div>
      <div className="card-details">
        <div className="card-title">{name}</div>
        <div className="card-price">${price}</div>
        <div className="card-timer-container">
          <div className="card-timer">
            <span>Time Left:</span> {time_left} mins
          </div>
        </div>
      </div>
      <div className="card-add-cart">
        <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
          Add to Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>{" "}
    </div>
  );
};
export default Card;
