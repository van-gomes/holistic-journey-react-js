import { Instructor } from '../Instructor';
import styles from './Meditation.module.css';

export const Meditation = (props) => {
  return (
    <section
      className={styles.meditation}
      style={{ backgroundColor: props.secondaryColor }}
    >
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      {props.instructors.map((instructor) => (
        <Instructor
          name={instructor.name}
          description={instructor.description}
          image={instructor.image}
        />
      ))}
    </section>
  );
};
