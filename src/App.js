import { useState } from "react";
import Banner from "./components/Banner";
import { Formulario } from "./components/Form";
import { Meditations } from "./components/Meditations";

export const App = () => {
  const meditations = [
    { id: 1, name: "Sleep better" },
    { id: 2, name: "Reduce stress or anxiety" },
    { id: 3, name: "Increase focus" },
    { id: 4, name: "Improve relationships" },
    { id: 5, name: "Increase self-awareness" },
    { id: 6, name: "Increase happiness" },
    { id: 7, name: "Increase creativity" },
  ];

  const [newTypeMeditation, setNewTypeMeditation] = useState([]);

  const toNewTypeMeditationRegistered = (newMeditation) => {
    setNewTypeMeditation([...newTypeMeditation, newMeditation]);
  };

  return (
    <div className="app">
      <Banner />
      <Formulario
        meditation={meditations.map((meditation) => meditation.name)}
        toRegisteredMeditation={(newMeditation) =>
          toNewTypeMeditationRegistered(newMeditation)
        }
      />
      <Meditations
        meditation={meditations.map((meditation) => meditation.name)}
      />
    </div>
  );
};
