import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Checkout from "./pages/Checkout/Checkout";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
