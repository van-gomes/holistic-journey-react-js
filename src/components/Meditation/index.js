import { Instructor } from "../Instructor";
import styles from "./Meditation.module.css";

export const Meditation= (props) => {
  return (
    <section className={styles.meditation} style={{backgroundColor:props.secondaryColor}}>
   
      <h3 style={{borderColor: props.primaryColor}}>
        {props.name}
      </h3>
    </section>
  );
};