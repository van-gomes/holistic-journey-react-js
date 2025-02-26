import { useState } from "react";
import Banner from "./components/Banner";
import { Formulario } from "./components/Form";
import { Instructor } from "./components/Instructor";
import styles from "./App.module.css";
import { MeditationCard } from "./components/MeditationCard";

export const App = () => {
  const meditationGroups = [
    {
      id: 1,
      category: "Relaxamento",
      imagem: "https://source.unsplash.com/300x300/?relax",
      description: "Meditações para relaxar.",
      colorBorder: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      id: 2,
      category: "Foco e Produtividade",
      imagem: "https://source.unsplash.com/300x300/?focus",
      description: "Meditações para melhorar o foco.",
      colorBorder: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      id: 3,
      category: "Espiritualidade",
      imagem: "https://source.unsplash.com/300x300/?spirituality",
      description: "Meditações para espiritualidade.",
      colorBorder: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
  ];

  const [meditations, setMeditations] = useState([]);

  const onNewMeditationAdded = (meditation) => {
    setMeditations((prevMeditations) => [...prevMeditations, meditation]);
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        groups={meditationGroups.map((group) => group.category)}
        onMeditationRegistered={onNewMeditationAdded}
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