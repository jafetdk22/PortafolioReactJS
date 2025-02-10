import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import projects from '../../data/projects.json';
import React, { useContext } from 'react';
import { PortafolioContext } from '../../Context';


const ProjectCard = React.memo(({ project, onOpenModal }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
            )}
            {project.images && (
              <a onClick={() => onOpenModal(project.images, project.title)} target="_blank" rel="noopener noreferrer">
              <FaEye />
            </a>
        )}
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
  );
});

const Projects = () => {
  const context = useContext(PortafolioContext);

  return (
    <section className="projects-section" id="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {
        projects.map((project, index) => (
          <ProjectCard project={project} key={index} onOpenModal={() => context.openModal(project.images, project.title)} />)
        )}
      </div>
    </section>
  );
};

export default Projects;
