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
  
  const initial = [
    {
      name: 'JULIANA AMOASEI',
      description: 'Guia no caminho do autoconhecimento e da transformação interior.',
      image: 'https://i.pinimg.com/736x/3e/95/69/3e95690f0966ea71b42733245ac4d285.jpg',
      selectedMeditation: meditations[0].meditationName
    },
    {
      name: 'DANIEL ARTINE',
      description: 'Facilitador do despertar espiritual e do equilíbrio energético.',
      image: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      selectedMeditation: meditations[1].meditationName
    },
    {
      name: 'Lily LIMA',
      description: 'Conector de almas por meio da sabedoria e harmonia interior.',
      image: 'https://i.pinimg.com/736x/e7/61/94/e761942a6f9a68383e3ac022b6e682af.jpg',
      selectedMeditation: meditations[2].meditationName
    },
    {
      name: 'Lily LIMA',
      description: 'Conector de almas por meio da sabedoria e harmonia interior.',
      image: 'https://i.pinimg.com/736x/9e/ab/6e/9eab6ea10417baf280d31c67f26b9b8c.jpg',
      selectedMeditation: meditations[2].meditationName
    },
    {
      name: 'PAULO SILVEIRA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      selectedMeditation: meditations[3].meditationName
    },
    {
      name: 'PAULO SILVEIRA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/33/4c/71/334c71f86e4aaefb3d903651b3a03f44.jpg',
      selectedMeditation: meditations[3].meditationName
    },
    {
      name: 'PAULO SILVEIRA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/13/98/c3/1398c356929aba315aed0d69d3f5472c.jpg',
      selectedMeditation: meditations[3].meditationName
    },
    {
      name: 'PAULO SILVEIRA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/fd/a6/19/fda6197cdabede6e23ceef0e92bef0d7.jpg',
      selectedMeditation: meditations[3].meditationName
    },
    {
      name: 'PAULO SILVEIRA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/c2/a0/76/c2a0765a7c73a9b4d0764da3cebe406e.jpg',
      selectedMeditation: meditations[3].meditationName
    },
    {
      name: 'PAULO SILVEIRA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/c2/a0/76/c2a0765a7c73a9b4d0764da3cebe406e.jpg',
      selectedMeditation: meditations[3].meditationName
    },
    {
      name: 'Isabela Oliveira',
      description: 'Mensageira da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/6b/c8/28/6bc828111bf2c28d11319bcee4fdf11c.jpg',
      selectedMeditation: meditations[3].meditationName
    }
  ]
  
  const [instructors, setInstructors] = useState(initial);

  const onNewInstructorAdded = (instructor) => {
    setInstructors([...instructors, instructor]);
    console.log(instructor);
  };

  return (
    <div>
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
