import styles from './Meditations.module.css';

export const Meditations = (props) => {
    return (
        <section className={styles.meditation}>
            <h2 className={styles.meditation__title}>Meditations</h2>
            <ul className={styles.meditation__list}>
                {props.meditations?.map(meditation => (
                    <li key={meditation.id}>
                        <h3>{meditation.name}</h3>
                        <p>{meditation.description}</p>
                        <img src={meditation.image} alt={meditation.name} />
                        <p>{meditation.meditation}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}