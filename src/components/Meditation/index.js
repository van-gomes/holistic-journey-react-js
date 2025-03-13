import { Instructor } from "../Instructor";
import styles from "./Meditation.module.css";

export const Meditation = (props) => {
  return props.instructors.length > 0 ? (
    <section
      className={styles.meditation}
      style={{ backgroundColor: props.secondaryColor }}
    >
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

      <div className={styles.instructors}>
        {props.instructors.map((instructor) => (
          <Instructor
            name={instructor.name}
            description={instructor.description}
            image={instructor.image}
            primaryColor={props.primaryColor}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};
