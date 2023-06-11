import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function Card({ product }) {
  const { image, title, category, price, id } = product;
  return (
    <div className="card">
      <Link to={`/details/${id}`} className="img-container center">
        <img src={image} alt={title} />
      </Link>
      <h3 className="title">{title}</h3>
      <h4 className="category">{category}</h4>
      <p className="price">{price}</p>
    </div>
  );
}

export default Card;
