import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../../data/projects.json'; // Se importa el JSON con los datos de los proyectos
import React from 'react';

const ProjectCard = React.memo(({ project }) => (
  <div className="project-card">
    <div className="project-image">
      <img src={project.image} alt={project.title} />
      <div className="project-overlay">
        <div className="project-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
    <div className="project-info">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-technologies">
        {project.technologies.map((tech, techIndex) => (
          <span key={techIndex} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
));

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
