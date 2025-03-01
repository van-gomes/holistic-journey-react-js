import { useState } from "react";
import { Button } from "../Button";
import { DropdownList } from "../DropdownList";
import { TextField } from "../TextField";
import styles from "./Formulario.module.css";

export const Formulario = ({ onInstructorRegistred }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [instructors, setInstructors] = useState("");

  const instructor = ["Instructor 1", "Instructor 2", "Instructor 3"];

  const onSave = (evento) => {
    evento.preventDefault();

    onInstructorRegistred({
      name,
      description,
      image,
      instructors,
    });
  };

  return (
    <section className={styles.formulario}>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          label="Nome"
          value={name}
          toChanged={(value) => setName(value)}
          placeholder="Digite seu nome"
          required
        />
        <TextField
          label="Descrição"
          value={description}
          toChanged={(value) => setDescription(value)}
          placeholder="Digite seu cargo"
          required
        />
        <TextField
          label="Imagem"
          value={image}
          toChanged={(value) => setImage(value)}
          placeholder="Digite o endereço da imagem"
          required
        />
        <DropdownList
          label="Instructors"
          value={instructors}
          toChanged={(value) => {
            console.log("Novo valor selecionado:", value);
            setInstructors(value);
          }}
          itens={instructor}
          placeholder="Selecione um instrutor"
          required
        />
        <Button> Cadastrar meditação </Button>
      </form>
    </section>
  );
};
