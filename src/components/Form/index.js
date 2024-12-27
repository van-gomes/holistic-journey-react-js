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

    return (
        <section className={styles.formulario}>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <DropdownList label="Meditations" itens={meditations} required />
                <Button> Criar card </Button>
            </form>
        </section>
    );
}