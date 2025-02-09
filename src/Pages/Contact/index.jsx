import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Contacto</h2>
      <div className="contact-container">
        <div className="contact-info">
          <a href="mailto:ing.jafet.sg@outlook.com" className="contact-link">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <p className="contact-text">ing.jafet.sg@outlook.com</p>

            </div>
          </a>          
          <a href="https://www.linkedin.com/in/jafet-solano-0615991a3/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="contact-item">
              <FaLinkedin className="contact-icon" />
              <p className="contact-text">Jafet Solano</p>
            </div>
          </a>
          
          <a href="https://github.com/jafetdk22" target="_blank" rel="noopener noreferrer" className="contact-link">
            <div className="contact-item">
              <FaGithub className="contact-icon" />
              <p className="contact-text">jafetdk22</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
