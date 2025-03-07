import { useState } from "react";
import Banner from "./components/Banner";
import { Formulario } from "./components/Form";
import styles from "./App.module.css";
import { Meditation } from "./components/Meditation";

export const App = () => {
  const meditations = [
    {
      name: "Mindfulness Meditation",
      nameInstructor: "Vania",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Transcendental Meditation",
      nameInstructor: "Vania",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Guided Meditation",
      nameInstructor: "Vania",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Zen Meditation",
      nameInstructor: "Vania",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "Vipassana Meditation",
      nameInstructor: "Vania",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Metta Meditation",
      nameInstructor: "Vania",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Chakra Meditation",
      nameInstructor: "Vania",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF",
    },
  ];

  const [instructors, setInstructors] = useState([]);

  const onNewInstructorAdded = (instructor) => {
    setInstructors([...instructors, instructor]);
    console.log(instructor);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        meditations={meditations.map(meditation => meditation.name)}
        onInstructorRegistred={(instructor) => onNewInstructorAdded(instructor)}
      />
      
      {meditations.map((meditation) => (
        <Meditation
          key={meditation.name}
          name={meditation.name}
          nameInstructor={meditation.nameInstructor}
          primaryColor={meditation.primaryColor}
          secondaryColor={meditation.secondaryColor}
          instructors={instructors}
        />
      ))}
    </div>
  );
};
