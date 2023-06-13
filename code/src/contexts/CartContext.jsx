import { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export default function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const addItem = (itemToAdd) => {
    // Check if the item already exists in the cart
    if (!cart.some((item) => item.id === itemToAdd.id)) {
      let newCart = [...cart, itemToAdd];
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };
  
  const removeItem = (itemDelete) => {
    let newCart = cart.filter((item) => item.id !== itemDelete);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {props.children}
    </CartContext.Provider>
  );
}
