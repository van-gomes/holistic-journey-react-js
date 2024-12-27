import { Button } from '../Button';
import { DropdownList } from '../DropdownList';
import { TextField } from '../TextField';
import styles from './Formulario.module.css';

export const Formulario = () => {
    const meditations = [
        'Sleep better',
        'Reduce stress or anxiety',
        'Meditation',
        'Sprituallity',
        'Something else',
    ];

    const onSave = (evento) => {
        evento.preventDefault()
        console.log('Form foi submetido')
    }

    return (
        <section className={styles.formulario}>
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" required />
                <TextField label="Cargo" placeholder="Digite seu cargo" required />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" required />
                <DropdownList label="Meditations" itens={meditations} required />
                <Button> Criar card </Button>
            </form>
        </section>
    );
}