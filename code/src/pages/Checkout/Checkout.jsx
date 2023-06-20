import React from "react";
import "./Checkout.css";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../../contexts/CartContext";
import Modal from "react-modal";

function Cart() {
  const { cart, setCart, removeItem } = useContext(CartContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);

  const calcTotal = () => {
    let initial = 0;
    cart.forEach((item) => {
      initial += item.price;
    });
    setTotalAmount(initial);
  };

  useEffect(() => {
    calcTotal();
  }, [cart]); // Recalculate total when cart changes

  useEffect(() => {
    const cartStored = localStorage.getItem("cartItems");
    if (cartStored !== null) {
      setCart(JSON.parse(cartStored));
    }
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement(document.getElementById("root"));

  return (
    <div className="cart-container">
      <div className="cart-box">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Qnty</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td className="item">
                  <img src={item.image} alt={item.title} />
                  {item.title}
                </td>
                <td className="nowrap">$ {item.price.toFixed(2)}</td>
                <td>1</td>
                <td>
                  <BsTrash onClick={() => removeItem(item.id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p>Total ${totalAmount.toFixed(2)}</p>
        <button onClick={() => setModalIsOpen(true)}>Checkout</button>
      </div>

      <Modal isOpen={modalIsOpen} style={customStyles} contentLabel="modal">
        <div className="modal-box">
          <AiOutlineClose onClick={() => setModalIsOpen(false)} />
          <div className="modal-content">
            <p>Your Order was successful!</p>
            <p>
              Check your email for the order confirmation. Thank you for
              shopping with Fake Store!
            </p>
          </div>
          <Link to="/">
            <button>Return to MainPage</button>
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default Cart;
