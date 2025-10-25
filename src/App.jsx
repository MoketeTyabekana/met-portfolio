import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutMe from "./pages/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Learn from "./pages/Learn";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/learn" element={<Learn />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
