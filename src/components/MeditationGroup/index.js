import { MeditationCard } from '../MeditationCard';
import styles from './MeditationGroup.module.css';

export const MeditationGroup = ({
  nome,
  corPrimaria,
  corSecundaria,
  meditations,
}) => {
  return meditations.length > 0 ? (
    <section
      className={styles.meditation_group}
      style={{ backgroundColor: corSecundaria }}
    >
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className={styles.meditation_group_card}>
        {meditations.map((meditation, index) => (
          <MeditationCard
            key={index}
            name={meditation.name}
            description={meditation.description}
            image={meditation.image}
            backgroundColor={corPrimaria}
          />
        ))}
      </div>
    </section>
  ) : null;
};
