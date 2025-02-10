import './Projects.css';
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa';
import projects from '../../data/projects.json';
import React, { useState } from 'react';
import Modal from '../../Components/Modal/Modal';

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
              <a onClick={onOpenModal} target="_blank" rel="noopener noreferrer">
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentTitle, setCurrentTitle] = useState('');


  const openModal = (images, title) => {
    setCurrentImages(images);
    setCurrentTitle(title);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImages([]);
  };

  return (
    <section className="projects-section" id="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {
        projects.map((project, index) => (
          <ProjectCard project={project} key={index} onOpenModal={() => openModal(project.images, project.title)} />)
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} title={currentTitle}>
          {currentImages.map((image, index) => (
            <div className="modal-image mb-6" key={index}>
              <img key={index} src={image.image} alt={image.description} />
            </div>
          ))}
      </Modal>
    </section>

  );
};

export default Projects;
