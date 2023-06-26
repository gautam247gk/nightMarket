// import "./home.css";
import { CartContainer } from "./CartContainer";
import cartIcon from "../../assets/shopping-cart.png";

function Cart() {
  return (
    <div className="app">
      <div className="cartIconContainer">
        <img className="cartIcon" src={cartIcon} alt="cart" />
      </div>
      <div className="container" style={{ height: "600px" }}>
        <div className="top">
          <h1>NIGHT.MARKET</h1>
        </div>
        <div className="middle">
          <CartContainer />
        </div>
      </div>
    </div>
  );
}

export default Cart;
