import React from "react";
import "./Card.css";

function Card(props) {
  const { image, title, category, price } = props.product;
  return (
    <div className="card">
      <div className="center">
        <img src={image} alt={title} />
      </div>
      <h3 className="title">{title}</h3>
      <h4 className="category">{category}</h4>
      <p className="price">{price}</p>
    </div>
  );
}

export default Card;
