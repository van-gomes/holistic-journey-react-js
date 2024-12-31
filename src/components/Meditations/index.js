import styles from "./Meditations.module.css";

export const Meditations = (props) => {
  
  return (
    <div className={styles.meditations}>
      <ul>
        {props.meditation.map((meditation, id) => (
          <li key={id}>{meditation}</li>
        ))}
      </ul>
    </div>
  );
};
