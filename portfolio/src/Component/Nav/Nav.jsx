import React from "react";
import "./nav.css";
import { Link  } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-item">
      <div className="left">
        <h1>Binita Shrestha</h1>
      </div>
      <div className="right">
        <ul className="flex">
          <Link className="link" to="/">
            <li>Home</li>
          </Link >
          <Link className="link" to="/about">
            {" "}
            <li>About</li>
          </Link >
          <Link className="link" to="/project">
            {" "}
            <li>Project</li>
          </Link>
          <Link className="link" to="/service">
            <li>Services</li>
          </Link >
          <Link className="link" to="/contact">
            {" "}
            <li>Contact</li>
          </Link >
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
