// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
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
        <h1>Packages</h1>
      </section>

      <section id="about">
        <h1>About Me</h1>
      </section>
    </div>
  );
}

export default App;
