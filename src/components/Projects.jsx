import React from 'react';
import ProjectCard from "./ProjectCard.jsx";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Report Taking App",
      description: "A description of the 'Burglar Blues' project. This is where you can elaborate on its features, technologies used, and your role.",
      tags: ["Unity", "C#", "Game Development", "VR"],
      image: "https://placehold.co/400x250/d3a7ff/fff?text=Burglar+Blues+Project"
    },
    {
      title: "Research",
      description: "A full-stack web application for task management with user authentication.",
      tags: ["React", "Node.js", "MongoDB", "CSS"],
      image: "https://placehold.co/400x250/b0c5ff/fff?text=Project+Alpha"
    },
    {
      title: "Marina's Sorcery Service",
      description: "Modernizing an existing e-commerce platform with improved UI/UX and performance.",
      tags: ["React", "Redux", "API Integration", "CSS"],
      image: "https://placehold.co/400x250/ffc086/fff?text=E-commerce+Site"
    },
    {
      title: "Teddy's",
      description: "Interactive dashboard displaying complex data trends using D3.js and React.",
      tags: ["React", "D3.js", "Data Analytics", "Firebase"],
      image: "https://placehold.co/400x250/d3a7ff/fff?text=Data+Dashboard"
    },
  ];

  return (
    <div id="projects" className="projects section-container">
      <h2 className="section-title">
        02. Projects
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;