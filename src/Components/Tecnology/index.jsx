
const Tecnology = ({
    icon,
    name,
    time
}) => {
  return (
        <div className="skill-card">
          {icon}                                                    
          <span>{name}</span>
          <p>{time} años</p>
        </div>
  );
};

export default Tecnology;
