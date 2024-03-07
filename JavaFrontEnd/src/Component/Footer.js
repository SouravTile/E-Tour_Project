// Footer.js
import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 text-center">
      <div className="container">
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
           
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
           
          </a>
          <a href="mailto:your@email.com">
           
          </a>
        </div>
        
        <div className="quick-links">
            <h3>ETouropia</h3>
        
          <ul className="list-inline">
            <li className="list-inline-item">
              <NavLink to="/" className="text-white">Home</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to="/about" className="text-white">About</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to="/Registration" className="text-white">Register</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to="/LoginForm" className="text-white">Login</NavLink>
            </li>
            {/* Add more quick links as needed */}
          </ul>
        </div>
      </div>
      
      <p style={{ color: 'white' }}>Address: Juhu Taj, JVPD circle, Andheri West, Mumbai, 400049</p>
      <p style={{ color: 'white' }}>Contact us: ETouropia@support.com ,Tel.No: (+91) 1234567890</p>
      <p style={{ color: 'white' }}>©2023 ETouropia All rights reserved.</p>
     
    </footer>
  );
};

export default Footer;
