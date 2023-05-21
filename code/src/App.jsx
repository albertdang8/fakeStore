import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter className="App">
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={Contact} />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
