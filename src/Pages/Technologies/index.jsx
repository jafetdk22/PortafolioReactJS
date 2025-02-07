import { useState } from 'react';
import technologiesData from '../../data/technologies.json';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as DiIcons from 'react-icons/di';
import * as VscIcons from 'react-icons/vsc';
import './Technologies.css';

const Technologies = () => {
  const [selectedCategory, setSelectedCategory] = useState('frontend');

  const getIcon = (iconName) => {
    const icons = { ...FaIcons, ...SiIcons, ...DiIcons, ...VscIcons };
    const IconComponent = icons[iconName];
    return IconComponent ? (
      <IconComponent 
        className="tech-icon" 
        size="1.2rem"
      />
    ) : null;
  };

  const renderProgressBar = (level) => (
    <div className="progress-bar-container">
      <div 
        className="progress-bar" 
        style={{ width: `${level}%` }}
        data-level={`${level}%`}
      />
    </div>
  );

  const renderTechnologyCard = (tech) => (
    <div className="tech-card" key={tech.name}>
      <div className="tech-header">
        {getIcon(tech.icon)}
        <h3>{tech.name}</h3>
      </div>
      <div className="tech-info">
        <p className="tech-time">{tech.time}</p>
        {renderProgressBar(tech.level)}
      </div>
    </div>
  );

  return (
    <section className="technologies-section" id="technologies">
      <h2>Tecnologías</h2>
      
      <div className="categories-nav">
        {Object.entries(technologiesData).map(([key, category]) => (
          <button
            key={key}
            className={`category-btn ${selectedCategory === key ? 'active' : ''}`}
            onClick={() => setSelectedCategory(key)}
          >
            {category.title}
          </button>
        ))}
      </div>

      <div className="technologies-grid">
        {technologiesData[selectedCategory]?.technologies.map(renderTechnologyCard)}
      </div>
    </section>
  );
};

export default Technologies;
