import React, { useEffect, useContext } from 'react';
import { PortafolioContext } from '../../Context';
import './Modal.css';

const Modal = () => {
  const context = useContext(PortafolioContext);

  useEffect(() => {
    if (context.isModalOpen) {
      document.body.style.overflow = 'hidden'; // Desactiva el scroll

    } else {
      document.body.style.overflow = 'unset'; // Reactiva el scroll
    }
    
    return () => {
      document.body.style.overflow = 'unset'; // Asegura que el scroll se reactive al desmontar
    };
  }, [context.isModalOpen]);

  if (!context.isModalOpen) return null;


  return (
    <div className="modal-overlay" onClick={context.closeModal}>

      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h3>{context.currentTitle}</h3>
          <button className="modal-close" onClick={context.closeModal}>×</button>
        </div>

        <div className="modal-body">
          {context.currentContent}
        </div>
      </div>
    </div>

  );
};

export default Modal; 