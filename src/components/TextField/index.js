import styles from './TextField.module.css';

export const TextField = (props) => {
    return (
        <div className={styles.field_text}>
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
        </div>
    );
}