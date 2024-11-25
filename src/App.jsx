import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/index";
import Footer from "./components/footer";
import Chat from "./components/chat";
import AboutUs from "./components/about";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Chat />
      <Footer />
    </Router>
  );
}

export default App;
