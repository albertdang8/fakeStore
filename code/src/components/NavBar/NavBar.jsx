import React from "react";
import "./NavBar.css";

// The <NavBar /> component is used within the Body

function NavBar(props) {
  //a function to capitalize words
  function capitalizeWords(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  //listing out the categories, then returning the capitalized versions.
  const categories = [
    ...new Set(props.data.map((item) => capitalizeWords(item.category))),
  ];

  return (
    <div className="categories">
      <a href="#" className="navBar">{capitalizeWords("all")}</a>
      {categories.map((category) => (
        <a href="#" className="navBar">
          {category}
        </a>
      ))}
    </div>
  );
}

export default NavBar;