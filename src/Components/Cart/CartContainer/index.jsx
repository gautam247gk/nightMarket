import React, { useContext } from "react";
import { ShopContext } from "../../../context/shopContext";
import { PRODUCTS } from "../../../assets/products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const CartContainer = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cartContainer">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p> Subtotal: ${totalAmount} </p>
          <button
            className="add-to-cart-btn"
            onClick={() => navigate("/nightmarket")}
          >
            {" "}
            Continue Shopping{" "}
          </button>
          <button
            className="add-to-cart-btn"
            onClick={() => {
              checkout();
              navigate("/nightmarket");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};
