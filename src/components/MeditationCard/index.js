import styles from './MeditationCard.module.css';

export const MeditationCard = ({
  name,
  image,
  description,
  backgroundColor,
}) => {
  return (
    <div className={styles.meditation_card}>
      <div className={styles.header} style={{ backgroundColor }}>
        <img src={image || "default-image-path.png"} alt={name} />
      </div>
      <div className={styles.footer}>
        <h4>{name}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};
