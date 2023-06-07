import React from "react";
import "./Header.css";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navHead">
      <Link to={"/"} className="main-title">
        Fake Store
      </Link>
        <Link to="/checkout" className="cart-container">
          <BsCart3 size={32} alt="shopping cart" className="cart-icon" />
        <div className="cart-size">
          <img src="src\assets\dot.png" alt="dot" className="dot" />
          <p id="cart-number">1</p>
        </div>
        </Link>
    </nav>
  );
}

export default Header;