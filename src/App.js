import { useState } from "react";
import Banner from "./components/Banner";
import { Formulario } from "./components/Form";
import styles from "./App.module.css";
import { Meditation } from "./components/Meditation";

export const App = () => {
  const meditations = [
    {
      name: "Mindfulness Meditation",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      name: "Transcendental Meditation",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      name: "Guided Meditation",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      name: "Zen Meditation",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      name: "Vipassana Meditation",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      name: "Metta Meditation",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      name: "Chakra Meditation",
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
        onInstructorRegistred={(instructor) => onNewInstructorAdded(instructor)}
      />
      {meditations.map((meditation) => (
        <Meditation
          key={meditation.name}
          name={meditation.name}
          primaryColor={meditation.primaryColor}
          secondaryColor={meditation.secondaryColor}
        />
      ))}
    </div>
  );
};
