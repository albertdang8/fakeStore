import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Made with</p>
        <AiFillHeart className="icon" /> 
        <p>by Mimo</p>
      </div>
      <Link to="/contact">Contact us</Link>
    </footer>
  );
}

export default Footer;
