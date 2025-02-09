import { useState } from 'react';
import certificatesData from '../../data/certificates.json';
import './Certificates.css';


const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('courses');


  return (
    <section className="certificates-section" id="certificates">
      <h2>Certificados</h2>
      
      <div className="categories-nav">
        {Object.entries(certificatesData).map(([key, category]) => (
          <button
            key={key}
            className={`category-btn ${selectedCategory === key ? 'active' : ''}`}
            onClick={() => setSelectedCategory(key)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="certificates-container">
        {certificatesData[selectedCategory]?.items.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="certificate-image"
            />
            <div className="certificate-content">
              <h3 className="certificate-title">{cert.title}</h3>
              <div className="certificate-info">
                <p className="certificate-platform">{cert.platform}</p>
                <p className="certificate-date">{cert.date}</p>
              </div>
              {cert.link && cert.link.trim() !== '' && (
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="certificate-link"
                >
                  Ver certificado →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
