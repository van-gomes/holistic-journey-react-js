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
      selectedMeditation: meditations[0].meditationName
    },
    {
      name: 'LILY LIMA',
      description: 'Conector de almas por meio da sabedoria e harmonia interior.',
      image: 'https://i.pinimg.com/736x/e7/61/94/e761942a6f9a68383e3ac022b6e682af.jpg',
      selectedMeditation: meditations[0].meditationName
    },
    {
      name: 'LILY LIMA',
      description: 'Conector de almas por meio da sabedoria e harmonia interior.',
      image: 'https://i.pinimg.com/736x/9e/ab/6e/9eab6ea10417baf280d31c67f26b9b8c.jpg',
      selectedMeditation: meditations[1].meditationName
    },
    {
      name: 'PAULO SILVEIRA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      selectedMeditation: meditations[1].meditationName
    },
    {
      name: 'PAULO SILVEIRA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/33/4c/71/334c71f86e4aaefb3d903651b3a03f44.jpg',
      selectedMeditation: meditations[1].meditationName
    },
    {
      name: 'PAULO SILVEIRA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/13/98/c3/1398c356929aba315aed0d69d3f5472c.jpg',
      selectedMeditation: meditations[2].meditationName
    },
    {
      name: 'PAULO SILVEIRA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/fd/a6/19/fda6197cdabede6e23ceef0e92bef0d7.jpg',
      selectedMeditation: meditations[2].meditationName
    },
    {
      name: 'PAULO SILVEIRA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/c2/a0/76/c2a0765a7c73a9b4d0764da3cebe406e.jpg',
      selectedMeditation: meditations[2].meditationName
    },
    {
      name: 'PAULO SILVEIRA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/c2/a0/76/c2a0765a7c73a9b4d0764da3cebe406e.jpg',
      selectedMeditation: meditations[3].meditationName
    },
    {
      name: 'ISABELA OLIVEIRA',
      description: 'Mensageira da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/6b/c8/28/6bc828111bf2c28d11319bcee4fdf11c.jpg',
      selectedMeditation: meditations[3].meditationName
    },
    {
      name: 'LUIZA SILVA',
      description: 'Mensageira da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/fc/44/c7/fc44c7d939fd80b9632bde1b5ee076a4.jpg',
      selectedMeditation: meditations[3].meditationName
    },
    {
      name: 'GABRIELA FRANCO',
      description: 'Mensageira da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/6e/73/a5/6e73a5c8a4e106ca3f514b7b5655a043.jpg',
      selectedMeditation: meditations[4].meditationName
    },
    {
      name: 'RICARDO SILVEIRA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/2c/39/9b/2c399bfb298a798739cae6f15cd791b5.jpg',
      selectedMeditation: meditations[4].meditationName
    },
    {
      name: 'EDUARDO PAIVA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/7a/46/10/7a461099f91aaa0a2ffe0a6d4309af33.jpg',
      selectedMeditation: meditations[4].meditationName
    },
    {
      name: 'SOPHIA ANDRADE',
      description: 'Mensageira da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/c8/3f/8e/c83f8e92405c60417ebec49e6e6e2bbd.jpg',
      selectedMeditation: meditations[5].meditationName
    },
    {
      name: 'RICARDO SILVEIRA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/0d/bc/a7/0dbca7e372766da7842528c87f693c01.jpg',
      selectedMeditation: meditations[5].meditationName
    },
    {
      name: 'EDUARDO PAIVA',
      description: 'Mensageiro da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/c4/42/01/c44201324e4ec8a9a302682f3e21a1aa.jpg',
      selectedMeditation: meditations[5].meditationName
    },
    {
      name: 'ISABELA MORAES',
      description: 'Mensageira da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/05/de/1f/05de1ff504f5fb75e74821058a11510d.jpg',
      selectedMeditation: meditations[6].meditationName
    },
    {
      name: 'LUANA CHRISPIN',
      description: 'Mensageira da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/19/14/c2/1914c23cac86990e039e24ae15c48028.jpg',
      selectedMeditation: meditations[6].meditationName
    },
    {
      name: 'BEATRIZ GUIMARÃES',
      description: 'Mensageira da paz e do propósito, guiando jornadas espirituais.',
      image: 'https://i.pinimg.com/736x/04/5c/04/045c041f741e91e93cf4ea363cf04850.jpg',
      selectedMeditation: meditations[6].meditationName
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
