import "./Header.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function Header() {
  const { cart } = useContext(CartContext);

  return (
    <div className="header-container">
      <Link to="/">
        <h2>Fake Store</h2>
      </Link>
      <Link to="/checkout">
        <AiOutlineShoppingCart className="cart-item" />
        <span>{cart.length}</span>
      </Link>
    </div>
  );
}

export default Header;
