import "./HomePage.css";
import Card from "../../components/Card/Card";
import NavBar from "../../components/NavBar/NavBar";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function Home() {
  const { products, setProducts } = useContext(CartContext);

  return (
    <div className="home-container">
      <div className="category-container">
        <NavBar setProducts={setProducts} />
      </div>

      <div className="products-container">
        {products.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
