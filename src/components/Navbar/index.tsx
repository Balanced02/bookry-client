import React from 'react';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <a className="navbar-brand">Bookry</a>
      <nav className="nav-items">
        <ul className="nav-link-list">
          <li>
            <a className="nav-link-item" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link-item" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="nav-link-item" href="#">
              Publish
            </a>
          </li>
          <li>
            <a className="nav-link-item fourth-child" href="#">
              Get Started
            </a>
          </li>
          <li>
            <a className="nav-link-item last-child" href="#">
              Read
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
