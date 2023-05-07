import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import FakeShopAPI from "./API/fakeShopAPI";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <FakeShopAPI />
      <Footer />
    </div>
  );
}

export default App;
