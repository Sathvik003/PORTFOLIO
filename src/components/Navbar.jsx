import React from 'react';
import './Layout.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" onClick={(e) => {
          e.preventDefault();
          window.location.reload();
        }}>S</a>
      </div>
      <div className="navbar-email">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=s.sathvik999@gmail.com" target="_blank" rel="noopener noreferrer">s.sathvik999@gmail.com</a>
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#about" className="sliding-link">
            <span>ABOUT</span>
            <span>ABOUT</span>
          </a>
        </li>
        <li>
          <a href="#work" className="sliding-link">
            <span>PROJECTS</span>
            <span>PROJECTS</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="sliding-link">
            <span>CONTACT</span>
            <span>CONTACT</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
