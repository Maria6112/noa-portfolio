// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Packages from "./pages/Packаges";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTop";
import ContactForm from "./pages/ContactMe";
import AOS from "aos";

function App() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div>
      <Navbar />

      <section id="home">
        <Home />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="packages">
        <Packages />
      </section>

      <section id="about">
        <h1>About Me</h1>
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default App;
