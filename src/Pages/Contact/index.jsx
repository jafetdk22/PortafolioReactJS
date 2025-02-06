import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
        <h2>Contacto</h2>
        <div className="contact-grid">

          <a 
            href="https://github.com/tuUsuario" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaGithub className="contact-icon" />
            <span>GitHub</span>
          </a>
          <a 
            href="https://linkedin.com/in/tuUsuario" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="contact-icon" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="mailto:tuemail@ejemplo.com"
            className="contact-card"
          >
            <FaEnvelope className="contact-icon" />
            <span>Email</span>
          </a>
        </div>
      </section>
    )
}   

export default Contact;
