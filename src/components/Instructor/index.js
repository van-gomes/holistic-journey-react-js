import styles from "./Instructor.module.css";

export const Instructor = () => {
    return (
        <div className={styles.instructor}>
            <div className={styles.cabecalho}>
                <img src='https://github.com/viniciosneves.png' alt='Vinicios Neves'/>
            </div>
            <div className={styles.rodape}>
                <h4>Vinicios Neves</h4>
                <h5>Instrutor</h5>
            </div>
        </div>
    );
};