import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import FakeShopAPI from "./API/FakeShopAPI";

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <FakeShopAPI setData={setData} />
      <Header />
      <HomePage data={data} />
      <Footer />
    </div>
  );
}

export default App;
