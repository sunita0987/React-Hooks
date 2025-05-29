import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 import './App.css'
import Home from "./pages/Home";
import Product from "./pages/Product";
import Navbar from "./components/Navbar";
import ImageUpload from "./components/ImageUpload";
import UseState from "./components/UseState";
function App() {
  return (
    <Router>
      <Navbar />
      <ImageUpload/>
      <UseState/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}
export default App;
