import { Instructor } from "../Instructor";
import styles from "./MeditationCard.module.css";

export const MeditationCard = ({ content }) => {
  return (
    <section className={styles.container_card}>
      <Instructor
        nome={content.category}
        imagem={content.imagem}
        description={content.description}
        corPrimaria={content.colorBorder}
        corSecundaria={content.corSecundaria || "#FFFFFF"}
      />
    </section>
  );
};