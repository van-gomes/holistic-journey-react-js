import styles from './MeditationCard.module.css';

export const MeditationCard = ({ name, image, description, backgroundColor }) => {
  return (
    <div className="meditation-card">
      <div className="header" style={{ backgroundColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

