import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  }, []);

  return (
    <div className="page-body">
      <NavBar data={products} />
      <div className="product-list">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;