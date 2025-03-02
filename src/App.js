import { useState } from "react";
import Banner from "./components/Banner";
import { Formulario } from "./components/Form";
import { Instructor } from "./components/Instructor";
import styles from "./App.module.css";
import { MeditationCard } from "./components/MeditationCard";

export const App = () => {
  const [instructors, setInstructors] = useState([]);

  const onNewInstructorAdded = (instructor) => {
    setInstructors([...instructors, instructor]);
    console.log(instructor);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        onInstructorRegistred={instructor => onNewInstructorAdded(instructor)}
      />
     {/* <div className={styles.meditation}>
      {meditationGroups
        .filter((group) => meditations.some((med) => med.group === group.category))
        .map((content) => (
          <MeditationCard key={content.id} content={content} />
        ))}
      </div> */}
    </div>
  );
};