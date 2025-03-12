import { useState } from 'react';
import Banner from './components/Banner';
import { Formulario } from './components/Form';
import { Meditation } from './components/Meditation';
import { Footer } from './components/Footer';

export const App = () => {
  const meditations = [
    {
      meditationName:"Mindfulness Meditation",
      instructorName: "Vania",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9",
    },
    {
      meditationName:"Transcendental Meditation",
      instructorName: "Vania",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF",
    },
    {
      meditationName:"Guided Meditation",
      instructorName: "Vania",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2",
    },
    {
      meditationName:"Zen Meditation",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8",
    },
    {
      meditationName:"Vipassana Meditation",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5",
    },
    {
      meditationName:"Metta Meditation",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9",
    },
    {
      meditationName:"Chakra Meditation",
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
        meditations={meditations.map(meditation => meditation.meditationName)}
        onInstructorRegistred={(instructor) => onNewInstructorAdded(instructor)}
      />
      
      {meditations.map((meditation, key) => (
        <Meditation
          key={meditation.meditationName}
          name={meditation.meditationName}
          primaryColor={meditation.primaryColor}
          secondaryColor={meditation.secondaryColor}
          instructors={instructors.filter(instructor =>
            instructor.selectedMeditation === meditation.meditationName)
          }
        />
      ))}

      <Footer />
    </div>
  );
};
