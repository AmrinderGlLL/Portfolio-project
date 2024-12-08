

import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
