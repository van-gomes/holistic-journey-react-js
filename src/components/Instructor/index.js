import { MeditationCard } from "../MeditationCard";
import styles from "./Instructor.module.css";

export const Instructor = ({
  nome,
  corPrimaria,
  corSecundaria,
  meditations,
  imagem,
}) => {
  return meditations.length > 0 ? (
    <div className={styles.container_instructor}>
      <section
        className={styles.instructor}
        style={{ "--borderColor": corPrimaria || "#FFFFFF" }}
      >
        <div className={styles.container_image}>
          {imagem ? (
            <img
              src={imagem}
              alt={`Imagem do instrutor ${nome}`}
              className={styles.image}
            />
          ) : (
            <p className={styles.noMedia}>Nenhuma imagem disponível</p>
          )}
        </div>
        <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
        <div className={styles.meditation_group_card}>
          {meditations.map((meditation, index) => (
            <MeditationCard key={index} meditation={meditation} />
          ))}
        </div>
      </section>
    </div>
  ) : null;
};