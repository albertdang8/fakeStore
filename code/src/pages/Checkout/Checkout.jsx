import React from "react";
import { FaTrash } from "react-icons/fa";

import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="checkout-table">
        <div className="table">
          <div className="table-header">
            <div className="table-cell">Item</div>
            <div className="table-cell">Price</div>
            <div className="table-cell">Quantity</div>
            <div className="table-cell">Remove</div>
          </div>
          <div>
            {/* Render rows for each item in the cart */}
            <tr>
              <td>Item 1</td>
              <td>$10</td>
              <td>1</td>
              <td>
                <button className="remove-button">
                  <FaTrash />
                </button>
              </td>
            </tr>
            {/* Add more rows for other items */}
          </div>
        </div>

        <div className="total-section">
          <p>Total: $100</p>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
