import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./contexts/CartContext";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Checkout from "./pages/Checkout/Checkout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Header />

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details/:productId" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
