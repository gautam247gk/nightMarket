// import "./home.css";
import { CartContainer } from "./CartContainer";
import cartIcon from "../../assets/shopping-cart.png";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  return (
    <div className="app">
      <div className="cartIconContainer">
        <img className="cartIcon" src={cartIcon} alt="cart" />
      </div>
      <div className="container" style={{ height: "600px", top: "10%" }}>
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
