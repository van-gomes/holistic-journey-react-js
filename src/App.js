import { useState } from 'react';
import Banner from './components/Banner';
import { Formulario } from './components/Form';
import { Meditations } from './components/Meditations';
import { TypeMeditation } from './components/TypeMeditation';

export const App = () => {
  const meditations = [
    { id: 1, name: "Sleep better" },
    { id: 2, name: "Reduce stress or anxiety" },
    { id: 3, name: "Meditation" },
    { id: 4, name: "Spirituality" },
    { id: 5, name: "Something else" }
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
      <TypeMeditation />
    </div>
  );
};
