import React from 'react';
import './Header.css';
import { BsCart3 } from 'react-icons/bs';

function Header() {
  return (
    <div>
      <nav>
        <a href="#" className="title">Fake Store</a>
        <a href="#" className="cart-container">
          <BsCart3 size={'2rem'} alt="shopping cart" className='cart-icon' />
          <div className="cart-size">
            <img src="src\assets\dot.png" alt="dot" className="dot" />
            <p id='cart-number'>1</p>
          </div>
        </a>
      </nav>
    </div>
  )
}

export default Header