import styles from "./Meditations.module.css";

export const Meditations = (props) => {
  return (
    <section className={styles.meditations}>
      <ul>
        {props.meditation && props.meditation.length > 0 ? (
          props.meditation.map((meditation, id) => (
            <>
              <li key={id}>{meditation}</li>
              <h2>{meditation.name}</h2>
            </>
          ))
        ) : (
          <li>Nenhuma meditação disponível</li>
        )}
      </ul>
    </section>
  );
};
