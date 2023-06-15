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
    "all",
    ...new Set(props.data.map((item) => capitalizeWords(item.category))),
  ];

  return (
    <div className="categories">
      {categories.map((category) => (
        <button
          style={{ whiteSpace: "nowrap" }}
          key={category}
          className="navBar"
          onClick={() => props.onCategoryClick(category)}
        >
          {capitalizeWords(category)}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
