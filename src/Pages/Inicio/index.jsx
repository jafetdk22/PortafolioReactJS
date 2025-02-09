const Inicio = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderButtons = () => (
    <div className="cta-buttons">
      <button 
        onClick={() => scrollToSection('technologies')} 
        className="btn primary"
      >
        Ver Tecnologías
      </button>
      <button 
        onClick={() => scrollToSection('contact')} 
        className="btn secondary"
      >
        Contactar
      </button>
    </div>
  );

  return (
    <section className="hero-section pt-12" id="inicio">
      <div className="hero-content">
        <h1>
          ¡Hola! Soy <span className="highlight">Jafet Solano</span>
        </h1>
        <h2>Desarrollador Web Full Stack</h2>
        <p className="hero-description">
          Apasionado por crear experiencias web únicas y funcionales.
          Especializado en tecnologías modernas de desarrollo.
        </p>
        {renderButtons()}
      </div>
      <div className="hero-image">
        <img src="https://i.postimg.cc/ZYjhphjj/jafet.webp" alt="Foto de perfil" />
      </div>
    </section>
  );
};

export default Inicio;
