import styles from './Instructor.module.css';

export const Instructor = (props) => {
  return (
    <div className={styles.instructor}>
      <div
        className={styles.header}
        style={{ backgroundColor: props.primaryColor }}
      >
        <img src={props.image} alt={props.name} />
      </div>
      <div className={styles.footer}>
        <h4>{props.name}</h4>
        <h5>{props.description}</h5>
      </div>
    </div>
  );
};
