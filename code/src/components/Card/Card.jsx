import React, { useState, useEffect, useContext } from "react";
import "./Card.css";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

function Card({ product }) {
  const { cart, addItem, removeItem } = useContext(CartContext);
  const { id, title, category, price, image } = product;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(cart.find((item) => item.id === product.id));
  }, [cart]);

  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={image} alt="" />
          <span>
            {isFavorite ? (
              <AiFillHeart
                style={{ color: "red" }}
                onClick={() => removeItem(product.id)}
              />
            ) : (
              <AiFillHeart
                style={{ color: "#fff" }}
                onClick={() => addItem(product)}
              />
            )}
          </span>
        </div>
        <Link to={`/details/${id}`}>{title}</Link>
        <p>{category}</p>
        <p className="price">$ {price}</p>
      </div>
    </>
  );
}

export default Card;
