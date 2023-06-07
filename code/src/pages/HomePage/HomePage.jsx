import React, { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";
import "./HomePage.css";

function HomePage() {
  const [products, setProducts] = useState([]); //gather all products
  const [selectedCategory, setSelectedCategory] = useState(null); //filtered products

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        // console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.log("Error:", error);
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