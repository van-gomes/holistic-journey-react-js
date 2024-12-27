
import { useState } from 'react';
import Banner from './components/Banner';
import { Formulario } from './components/Form';

export const App = () => {

    const [newTypeMeditation, setNewTypeMeditation] = useState([]);

    const toNewTypeMeditationRegistered = (newMeditation) => {
        console.log(newMeditation);
        setNewTypeMeditation([...newTypeMeditation, newMeditation]);
    }

    return (
        <div className="app">
            <Banner />
            <Formulario
                toRegisteredMeditation={newMeditation => toNewTypeMeditationRegistered(newMeditation)}
            />
        </div>
    );
}