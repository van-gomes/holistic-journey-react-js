import { MeditationCard } from "../MeditationCard";
import styles from "./MeditationGroup.module.css";

export const MeditationGroup = ({ nome, corPrimaria, corSecundaria, meditations }) => {
  const css = { backgroundColor: corSecundaria };

  return (
    <section className="meditation-group" style={css}>
    <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
    <div className="meditations">
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
  );
};
