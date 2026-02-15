import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
