import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "./ProductDetail.css";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        console.log(product);
      })
      .catch((err) => console.log("Error: ", err));
  }, []);

  return (
    <div className="product-container">
      <div>
        <img src={product.image} />
      </div>
      <div>
        <p>{product.title}</p>
        <p>{product.price}</p>
        <p>Description</p>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductDetail;
