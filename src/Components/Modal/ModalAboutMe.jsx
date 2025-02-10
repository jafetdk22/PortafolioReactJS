import React, { useEffect} from 'react';
import './Modal.css';

const ModalAboutMe = ({children, isModalOpen, closeModal, currentTitle}) => {
  useEffect(() => {
    if (isModalOpen) {

      document.body.style.overflow = 'hidden'; // Desactiva el scroll

    } else {
      document.body.style.overflow = 'unset'; // Reactiva el scroll
    }
    
    return () => {
      document.body.style.overflow = 'unset'; // Asegura que el scroll se reactive al desmontar
    };
  }, [isModalOpen]);

  if (!isModalOpen) return null;


  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{currentTitle}</h3>
          <button className="modal-close" onClick={closeModal}>×</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalAboutMe; 