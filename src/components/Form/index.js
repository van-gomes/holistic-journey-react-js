import { useState } from "react";
import { Button } from "../Button";
import { DropdownList } from "../DropdownList";
import { TextField } from "../TextField";
import styles from "./Formulario.module.css";

export const Formulario = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [selectedMeditation, setSelectedMeditation] = useState("");

  const onSave = (evento) => {
    evento.preventDefault();

    props.onInstructorRegistred({
      name,
      description,
      image,
      selectedMeditation,
    });

    setName("");
    setDescription("");
    setImage("");
    setSelectedMeditation("");
  };

  return (
    <section className={styles.form_container}>
      <form className={styles.form} onSubmit={onSave}>
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
          label="Meditação"
          value={selectedMeditation}
          toChanged={(value) => setSelectedMeditation(value)}
          itens={props.meditations}
          placeholder="Selecione uma meditação"
          required
        />
        <Button>Cadastrar meditação</Button>
      </form>
    </section>
  );
};
