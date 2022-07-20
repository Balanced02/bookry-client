import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.scss';
const Navbar = () => {
  const navigate = useNavigate();
  const getStarted = () => {
    navigate('/signup');
  };
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
            <a className="nav-link-item fourth-child" onClick={getStarted}>
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
