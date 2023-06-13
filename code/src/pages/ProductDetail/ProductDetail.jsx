import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./ProductDetail.css";
import { CartContext } from "../../contexts/CartContext";

function ProductDetail() {
  const { cart, addItem, removeItem } = useContext(CartContext);
  const { productId } = useParams();
  const [product, setProduct] = useState("");
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        console.log(product);
        // Check if the product is already in the cart
        setIsInCart(cart.some((item) => item.id === res.data.id));
      })
      .catch((err) => console.log("Error: ", err));
  }, [productId, cart]);

  const handleAddToCart = () => {
    if (isInCart) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <div className="page">
      <div className="product-container">
        <div>
          <img className="product-img" src={product.image} />
        </div>
        <div className="product-info">
          <h1 id="title">{product.title}</h1>
          <p id="price">${product.price}</p>
          <p id="sub-title">Description</p>
          <p id="description">{product.description}</p>
          <button id="add" onClick={handleAddToCart}>
            {isInCart ? "Remove Item" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}


export default ProductDetail;
