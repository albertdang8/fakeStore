import React from "react";
import "./NavBar.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Category({ products, setProducts }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories`).then((res) => {
      setCategories(res.data);
    });
  }, []);

  const handleClick = (categories) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categories}`)
      .then((res) => {
        setProducts(res.data);
      });
  };

  const handleClickAll = () => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setProducts(res.data);
    });
  };

  const capitalize = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div className="category-btn">
      <button onClick={handleClickAll}>All</button>

      {categories.map((category, index) => (
        <button
          key={index}
          id={category}
          onClick={() => handleClick(category)}
        >
          {capitalize(category)}
        </button>
      ))}
    </div>
  );
}

export default Category;
