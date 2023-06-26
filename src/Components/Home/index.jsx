import "./home.css";
import CardContainer from "../CardContainer";
import cartIcon from "../../assets/shopping-cart.png";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../assets/products";

function Home(props) {
  const navigate = useNavigate();
  return (
    <div className="app">
      <div className="cartIconContainer" onClick={() => navigate("/cart")}>
        <img className="cartIcon" src={cartIcon} alt="cart" />
      </div>
      <div className="container">
        <div className="top">
          <h1>NIGHT.MARKET</h1>
        </div>
        <div className="middle">
          <CardContainer prods={props.prods} setProducts={props.setProducts} />
        </div>
      </div>
    </div>
  );
}

export default Home;
