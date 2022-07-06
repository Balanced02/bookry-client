import React from 'react';
import BookrySvg from '../../assets/svg/bookrySvg.jsx';
import './navbar.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">
        <BookrySvg />
      </div>
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
