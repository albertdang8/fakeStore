import React from "react";
import "./Card.css";

function Card(props) {
  const { image, title, category, price } = props.product;
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3 className="title">{title}</h3>
      <h4 className="category">{category}</h4>
      <p className="price">{price}</p>
      <button className="button">Add to Cart</button>
    </div>
  );
}

export default Card;
