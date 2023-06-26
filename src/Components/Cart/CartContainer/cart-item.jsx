import React, { useContext } from "react";
import { ShopContext } from "../../../context/shopContext";

export const CartItem = (props) => {
  console.log("prop", props);
  const { id, name, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const imageUrl = require(`../../../assets/images/${id}.jpg`);

  return (
    <div className="cartItem">
      <div
        className="card-image"
        style={{
          background: `url(${imageUrl}) no-repeat center center/cover`,
        }}
      />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: ${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)} className="cartButton">
            -
          </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className="cartInput"
          />
          <button onClick={() => addToCart(id)} className="cartButton">
            +
          </button>
        </div>
      </div>
    </div>
  );
};
