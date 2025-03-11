import { useState } from 'react';
import { Button } from '../Button';
import { DropdownList } from '../DropdownList';
import { TextField } from '../TextField';
import styles from './Formulario.module.css';

export const Formulario = ({ onInstructorRegistred, meditations }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [selectedMeditation, setSelectedMeditation] = useState("");

  const onSave = (evento) => {
    evento.preventDefault();

    onInstructorRegistred({
      name,
      description,
      image,
      selectedMeditation
    });
    
    setName("");
    setDescription("");
    setImage("");
    setSelectedMeditation("");
  };

  return (
    <section className={styles.formulario}>
      <form onSubmit={onSave}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          label="Nome"
          value={name}
          toChanged={setName}
          placeholder="Digite seu nome"
          required
        />
        <TextField
          label="Descrição"
          value={description}
          toChanged={setDescription}
          placeholder="Digite seu cargo"
          required
        />
        <TextField
          label="Imagem"
          value={image}
          toChanged={setImage}
          placeholder="Digite o endereço da imagem"
          required
        />
        <DropdownList
          label="Meditação"
          value={selectedMeditation}
          toChanged={setSelectedMeditation}
          itens={meditations}
          placeholder="Selecione uma meditação"
          required
        />
        <Button>Cadastrar meditação</Button>
      </form>
    </section>
  );
};
