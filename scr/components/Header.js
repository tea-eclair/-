// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/rvtkk.png'; // Import your logo file

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="College Logo" />
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/programs">Programs</Link>
          </li>
          <li>
            <Link to="/student-life">Student Life</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
