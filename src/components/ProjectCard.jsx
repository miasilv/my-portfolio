import React from 'react';
import './Projects.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
    <img
      src={project.image}
      alt={project.title}
      onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x250/d1d5db/4b5563?text=Image+Error" }}
    />
    <div className="project-card-content">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
      <div className="project-links">
        <a href="#" aria-label={`View Live demo of ${project.title}`}>
          <i className="ti-new-window"></i>View Live
        </a>
        <a href="https://github.com/miasilv" className="github-link" aria-label={`View ${project.title} on GitHub`}>
          <i className="ti-github"></i> Github
        </a>
      </div>
    </div>
  </div>
  );
}

export default ProjectCard;