import React from "react";
import "./NavBar.css";

function NavBar(props) {
  function capitalizeWords(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const categories = [
    ...new Set(props.data.map((item) => capitalizeWords(item.category))),
  ];

  return (
    <div className="categories">
      <a href="#" className="navBar">{capitalizeWords("all")}</a>
      {categories.map((category) => (
        <a key={category} href="#" className="navBar">
          {capitalizeWords(category)}
        </a>
      ))}
    </div>
  );
}

export default NavBar;
