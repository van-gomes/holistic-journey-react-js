
import Banner from './components/Banner';
import { TextField } from './components/TextField';

export const App = () => {
    return (
        <div className="app">
            <Banner />
            <TextField label="Nome" placeholde="Digite seu nome"/>
            <TextField label="Cargo" placeholder="Digite seu cargo"/>
            <TextField label="Imagem" placeholder="Digite o endereço da imagem"/>
        </div>
    );
}