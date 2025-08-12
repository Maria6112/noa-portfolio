// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Packages from "./pages/Packаges";
import Footer from "./components/Footer";
import ContactButtons from "./components/ContactButtons";
import ContactForm from "./pages/ContactMe";
import AOS from "aos";
import AboutMe from "./pages/About";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="app-container">
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
        <AboutMe />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
      <ContactButtons />
      <Footer />
    </div>
  );
}

export default App;
