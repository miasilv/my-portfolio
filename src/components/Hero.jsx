import React from 'react';
import Socials from './Socials';
import Headshot from '../assets/imgs/Headshot.jpg';
import './Hero.css';

function Hero() {
  return (
    <div id="hero" className="hero section-container">
      <div className="hero-left">
        <div className="hero-words">
          <h5>hello! my name is</h5>
          <h1 className="title">Amelia (Mia) Silver.</h1>
          <h2 className="subtitle">nice to meet you!</h2>
        </div>
        <div className="hero-contact">
          <a href="#contact" className="button">
            Contact Me!
          </a>
          <Socials />
        </div>
      </div>
      <div className="hero-img">
        <img src={Headshot} 
        alt="Mia Silver Headshot" 
      />
      </div>
    </div>
  );
}

export default Hero;