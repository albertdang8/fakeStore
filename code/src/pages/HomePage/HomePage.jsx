import React from "react";
import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";

function HomePage(props) {
  return (
    <div className="page-body">
      <NavBar data={props.data} />
      <div className="product-list">
        {props.data.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
