import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the state
  };

  return (
    <nav className="nav-item">
      <div className="left">
        <h1>Binita Shrestha</h1>
      </div>
      <div className="right">
        {/* Hamburger Menu Button */}
        <button className="hamburger" onClick={toggleMenu}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        {/* Navigation Links */}
        <ul className={`flex ${menuOpen ? "open" : ""}`}>
          <Link className="link" to="/" onClick={() => setMenuOpen(false)}>
            <li>Home</li>
          </Link>
          <Link className="link" to="/about" onClick={() => setMenuOpen(false)}>
            <li>About</li>
          </Link>
          <Link className="link" to="/project" onClick={() => setMenuOpen(false)}>
            <li>Project</li>
          </Link>
          <Link className="link" to="/service" onClick={() => setMenuOpen(false)}>
            <li>Services</li>
          </Link>
          <Link className="link" to="/contact" onClick={() => setMenuOpen(false)}>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
