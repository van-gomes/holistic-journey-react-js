import styles from './Instructor.module.css';

export const Instructor = ({name, description, image }) => {
    return (
        <div className={styles.instructor}>
            <div className={styles.header}>
                <img src={image} alt={name}/>
            </div>
            <div className={styles.footer}>
                <h4>{name}</h4>
                <h5>{description}</h5>
            </div>
        </div>
    );
};