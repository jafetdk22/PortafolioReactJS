import { useState } from 'react';
import { FaCode, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import Modal from '../../Components/Modal/Modal';
import modalData from '../../data/modalContents.json';
import './AboutMe.css';

const AboutMe = () => {
  const [modalInfo, setModalInfo] = useState({ isOpen: false, content: null });

  const renderModalContent = (content) => {
    return (
      <div>
        {content.sections.map((section, index) => (
          <div key={index} className="modal-section">
            <h3>{section.title}:</h3>
            <ul>
              {section.items.map((item, itemIndex) => (
                <li 
                  key={itemIndex}
                  style={{ 
                    animationDelay: `${0.1 + (itemIndex * 0.1)}s`,
                    animation: 'sectionFadeIn 0.5s ease-in-out forwards',
                    opacity: 0
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };

  const openModal = (type) => {
    const selectedContent = modalData[type];
    setModalInfo({
      isOpen: true,
      content: {
        title: selectedContent.title,
        content: renderModalContent(selectedContent.content)
      }
    });
  };

  const closeModal = () => {
    setModalInfo({ isOpen: false, content: null });
  };

  return (
    <section className="about-me-section" id="about-me">
      <h2>Sobre Mí</h2>
      <div className="about-content">
        <div className="about-text">
          <p className="about-description">
            Soy un desarrollador web full stack apasionado por crear soluciones
            digitales innovadoras. Con más de 5 años de experiencia en el
            desarrollo web, me especializo en construir aplicaciones web
            modernas y escalables.
          </p>
          <div className="about-highlights">
            <div className="highlight-card cursor-pointer" onClick={() => openModal('development')}>
              <FaCode className="highlight-icon" />
              <h3>Desarrollo Web</h3>
              <p>Especializado en tecnologías modernas de frontend y backend</p>
            </div>
            <div className="highlight-card cursor-pointer" onClick={() => openModal('education')}>
              <FaGraduationCap className="highlight-icon" />
              <h3>Educación</h3>
              <p>Ingeniero en Sistemas Computacionales</p>
            </div>
            <div className="highlight-card cursor-pointer" onClick={() => openModal('experience')}>
              <FaBriefcase className="highlight-icon" />
              <h3>Experiencia</h3>
              <p>5+ años en desarrollo de software</p>
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={modalInfo.isOpen}
        onClose={closeModal}
        title={modalInfo.content?.title}
      >
        {modalInfo.content?.content}
      </Modal>
    </section>
  );
};

export default AboutMe;
