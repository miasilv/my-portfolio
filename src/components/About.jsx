import React from 'react';
import './About.css';

function About() {
  return (
    <div id="about-me" className="about-me section-container">
      <h2 className="section-title">
        01. About Me
      </h2>
      <div className="about-me-content">
        <div className="blurb">
          <p>
            Hi, I’m Mia, a software engineer and recent summa cum laude graduate
            from the University of South Carolina, where I earned my B.S.
            in Computer Science with a minor in Media Arts. I specialize in frontend
            development, but I’m comfortable working across the full software stack.
          </p>
          <p>
            I’m passionate about creating accessible, intuitive experiences—whether
            I’m designing seamless digital interfaces, building video games in 2D, 3D, or VR,
            or bringing ideas to life in using tools like 3D printers or laser cutters.
            No matter the medium, I love building things that are both thoughtful and impactful.
          </p>
          <p>
            I’m driven to develop technology that makes people’s lives better,
            and I’m excited to keep growing as a software engineer to do just that.
          </p>
          <p className="emphasis-text"> 
            Check out some of my projects below!
          </p>
        </div>
        <div className="skills-container">
          <h3>Skills</h3>
          <ul>
            <li>Java</li>
            <li>C++</li>
            <li>C#</li>
            <li>Python</li>
            <li>MongoDB and SQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Git and Github</li>
            <li>Android Studio</li>
            <li>Unity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;