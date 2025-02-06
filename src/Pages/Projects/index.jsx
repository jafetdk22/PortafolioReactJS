import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Personal",
      description: "Portfolio web personal desarrollado con React y CSS moderno. Incluye modo oscuro, animaciones y diseño responsive.",
      image: "../../public/images/portfolio.png",
      technologies: ["React", "CSS", "JavaScript"],
      github: "https://github.com/tuUsuario/portfolio",
      demo: "https://tuportfolio.com"
    },
    {
      title: "E-commerce Dashboard",
      description: "Panel de administración para e-commerce con gestión de productos, pedidos y usuarios. Incluye gráficos y análisis de datos.",
      image: "../../public/images/dashboard.png",
      technologies: ["React", "Laravel", "MySQL"],
      github: "https://github.com/tuUsuario/dashboard",
      demo: "https://dashboard-demo.com"
    },
    {
      title: "Sistema de Gestión",
      description: "Aplicación web para gestión de recursos empresariales. Control de inventario, facturación y reportes.",
      image: "../../public/images/sistema.png",
      technologies: ["PHP", "Laravel", "Bootstrap"],
      github: "https://github.com/tuUsuario/sistema",
      demo: "https://sistema-demo.com"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2>Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
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
        ))}
      </div>
    </section>
  );
};

export default Projects;
