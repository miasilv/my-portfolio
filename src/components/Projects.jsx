import React, {useState} from 'react';
import ProjectCard from "./ProjectCard.jsx";
import Inspection from '../assets/imgs/viewing-inspection.jpg'
import Research from '../assets/imgs/researchposter.jpg';
import Marina from '../assets/imgs/marina.png';
import "./Projects.css";

function Projects() {

  const projects = [
    {
      title: "Report Taking App",
      description: "I served as the frontend lead for a PC and Android tablet application pipeline, automating structural inspections for CSD Structural Engineers. My work focused on creating intuitive user interfaces for both platforms, enabling engineers to efficiently record inspection data in the field and seamlessly integrate with the backend for automated report generation. This solution significantly reduced the manual effort involved in data entry and report preparation, streamlining a previously time-consuming process.",
      tags: ["React", "Android", "App Development", "Figma", "SQL", "Expo"],
      image: Inspection,
      live: "https://sccapstone.github.io/CSDBuddies/",
    },
    {
      title: "Human Computer Interaction Research",
      description: "In a Human-Computer Interaction research project, I focused on improving the usability and UI design of ALLURE, a digital 3D Rubik's Cube platform for K-12 education. My responsibilities included conducting usability tests, analyzing user feedback, and refining the user interface to enhance clarity and touchscreen compatibility. This work aimed to create a more intuitive and engaging learning experience, addressing user needs for a tactile-like interaction in a digital environment.",
      tags: ["Web Development", "VR Development", "UI/UX Design", "Usability Testing", "User Research", "Data Analysis"],
      image: Research,
      live: import.meta.env.BASE_URL + "/assets/documents/researchPoster.pdf"
    },
    {
      title: "Marina's Sorcery Service",
      description: "I developped an indie video game and was responsible for all programming. I also managed a small interdisciplinary team, coordinating with a writer and an artist to ensure a cohesive narrative and visual style. I implemented complex game systems, including a robust inventory system with dynamic item management, an engaging potion-making mechanic that allowed for recipe discovery and player experimentation, and a dynamic story progression system that adapted to player choices and supported branching narratives.",
      tags: ["Unity", "C#", "Team Leadership", ""],
      image: Marina,
      github: "https://github.com/miasilv/Marinas-Sorcery-Service",
      live: "https://miasilv.itch.io/marinas-sorcery-service"
    },
  ];

  return (
    <div id="projects" className="projects section-container">
      <h2 className="section-title">
        02. Projects
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;