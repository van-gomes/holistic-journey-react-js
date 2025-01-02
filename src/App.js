import { useState } from "react";
import Banner from "./components/Banner";
import { Formulario } from "./components/Form";
import { MeditationGroup } from "./components/MeditationGroup";

export const App = () => {
  const meditationGroups = [
    { 
      nome: "Relaxamento",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9"
     },
    {
      nome: "Foco e Produtividade",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      nome: "Espiritualidade",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
  ];

  const [meditations, setMeditations] = useState([]);

  const onNewMeditationAdded = (meditation) => {
    setMeditations([...meditations, meditation]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        groups={meditationGroups.map((group) => group.nome)}
        onMeditationRegistered={(meditation) =>
          onNewMeditationAdded(meditation)
        }
      />

      {meditationGroups.map((group) => (
        <MeditationGroup
          key={group.nome}
          nome={group.nome}
          corPrimaria={group.corPrimaria}
          corSecundaria={group.corSecundaria}
          meditations={meditations.filter(
            (meditation) => meditation.group === group.nome
          )}
        />
      ))}
    </div>
  );
};
