import styles from "./Instructor.module.css";

export const Instructor = ({
  nome,
  corPrimaria,
  corSecundaria,
  imagem,
  description,
}) => {
  return (
    <div className={styles.container_instructor}>
      <section
        className={styles.instructor}
        style={{
          "--borderColor": corPrimaria,
          backgroundColor: corSecundaria,
        }}
      >
        <div className={styles.container_media}>
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
        <p>{description}</p>
      </section>
    </div>
  );
};