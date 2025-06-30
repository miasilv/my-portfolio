import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">
        <a href="#hero" className="navbar-title">
          MS
        </a>
      </h1>
      <ul className="navbar-list">
        <li> 
          <a href="#about-me" className="navbar-link">
            <span>01.</span> About Me 
          </a>
        </li>
        <li>
          <a href="#projects" className="navbar-link"> 
            <span>02.</span> Projects 
          </a> 
        </li>
        <li>
          <a href="#contact" className="navbar-link">
            <span>03.</span> Contact 
          </a> 
        </li>
        <li> 
          <a href={import.meta.env.BASE_URL + "/assets/documents/resume.pdf"} className="button" target="_blank" rel="noopener noreferrer"> 
            Resume 
          </a> 
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;