import React, { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Modal from "react-modal";

import "./Checkout.css";

function Checkout() {
  const [isOpen, setIsOpen] = useState(false); //modal state initialized to closed
  const { clearCart } = useContext(CartContext);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  
  const customStyles = {
    //modal styles
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
  };

  Modal.setAppElement(document.getElementById("root"));

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
          <button className="checkout-button" onClick={openModal}>
            Checkout
          </button>

          <Modal
            isOpen={isOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Order status: complete!"
          >
            <div className="modal-box">
              <h2 className="boop-down">Your Order was successful!</h2>
              <p>Check your email for the order confirmation.</p>
              <p className="boop-down"> Thank you for shapping with Fake Store!</p>
              <Link to="/" onClick={clearCart}>Return to Main Page</Link>
            </div>
          </Modal>

        </div>
      </div>
    </div>
  );
}

export default Checkout;
