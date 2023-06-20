import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cartItems");
    if (storedCart !== null) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const addItem = (itemToAdd) => {
    if (!cart.some((item) => item.id === itemToAdd.id)) {
      let newCart = [...cart, itemToAdd];
      setCart(newCart);
      localStorage.setItem("cartItems", JSON.stringify(newCart));
    }
  };
  

  const removeItem = (itemDelete) => {
    let newCart = cart.filter((item) => item.id !== itemDelete);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const things = {
    cart,
    addItem,
    removeItem,
    clearCart,
    products,
    setProducts,
  };

  return (
    <CartContext.Provider value={things}>{children}</CartContext.Provider>
  );
}
