import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <Link to="/">
      <div className="nav-logo">
        MyPortfolio
        </div>
        </Link>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
