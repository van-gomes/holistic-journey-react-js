import styles from './TextField.module.css';

export const TextField = () => {
    return (
        <div className={styles.field_text}>
            <label>Label</label>
            <input type="text" />
        </div>
    );
}