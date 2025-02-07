import { useState } from 'react';
import ThemeToggle from '../ThemeToggle';
import './NavBar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Cierra el menú móvil después de hacer clic
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => scrollToSection('inicio')}>
        <svg 
          width="150" 
          height="40" 
          viewBox="0 0 150 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG: Letra J con color de acento */}
          <path 
            d="M20 8C20 8 25 8 25 12V24C25 30 18 32 13 30"
            stroke="var(--accent-color)"
            strokeWidth="4"
            strokeLinecap="round"
            className="letter-j"
          />
          
          {/* SVG: Letra S con color de texto principal */}
          <path 
            d="M35 14C35 11 38 8 42 8C46 8 49 11 49 14C49 20 35 19 35 25C35 28 38 31 42 31C46 31 49 28 49 25"
            stroke="var(--text-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            className="letter-main"
          />
          
          {/* SVG: Punto decorativo con color de acento */}
          <circle 
            cx="55" 
            cy="19" 
            r="2" 
            fill="var(--accent-color)"
            className="dot"
          />
          
          {/* SVG: Líneas decorativas superiores e inferiores */}
          <path 
            d="M65 8L120 8"
            stroke="var(--text-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            className="line"
          />
          
          <path 
            d="M75 31L110 31"
            stroke="var(--text-primary)"
            strokeWidth="3"
            strokeLinecap="round"
            className="line"
          />
        </svg>
      </div>

      <button 
        className={`nav-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
        <div className="nav-links">
          <button 
            onClick={() => scrollToSection('inicio')}
            className="nav-link"
          >
            Inicio
          </button>
          <button 
            onClick={() => scrollToSection('about-me')}
            className="nav-link"
          >
            Sobre Mi
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="nav-link"
          >
            Proyectos
          </button>
          <button 
            onClick={() => scrollToSection('certificates')}
            className="nav-link"
          >
            Certificados
          </button>

          <button 
            onClick={() => scrollToSection('contact')}
            className="nav-link"
          >
            Contacto
          </button>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default NavBar;