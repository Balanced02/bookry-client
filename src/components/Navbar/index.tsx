import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">Bookry</div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Publish</li>
          <li>Get Started</li>
          <li>Read</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
