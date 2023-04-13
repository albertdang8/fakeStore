import React from 'react'

function Header() {
  return (
    <div>
      <nav>
        <a href="#" className="title">Fake Store</a>
        <a href="#" className="cart-container">
          <img src="./public/vector.png" alt="shopping cart" className='cart-icon' />
          <img src="./public/dot.png" alt="dot" className="dot" />
        </a>
      </nav>
    </div>
  )
}

export default Header