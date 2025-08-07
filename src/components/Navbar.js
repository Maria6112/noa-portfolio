import React, { useEffect } from "react";
import "./Navbar.css";

import { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
// import logo from '../images/logo.JPG';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState();
  const [active, setActive] = useState();

  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash || "Home");
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#packages", label: "Packages" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact Me" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo navbar-left">
        {/* <NavLink to="/"> */}
        {/* <img src={logo} alt="logo" className='logo-img'/> */}
        {/* </NavLink> */}
      </div>

      <button
        className="burger"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Menu"
      >
        <span className={menuOpen ? "line open" : "line"}></span>
        <span className={menuOpen ? "line open" : "line"}></span>
        <span className={menuOpen ? "line open" : "line"}></span>
      </button>

      <div className={`navbar-center ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`nav-link ${active === item.href ? "active-link" : ""}`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
