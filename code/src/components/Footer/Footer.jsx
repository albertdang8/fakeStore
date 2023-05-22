import { Link } from 'react-router-dom';
import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className='footerContainer'>
        <div className="caption">Made with ❤️ by mimo </div>
        <Link to="/contact" className="contact">Contact Us</Link>
    </div>
  );
}

export default Footer;