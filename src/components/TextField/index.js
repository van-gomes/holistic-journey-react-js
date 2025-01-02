import styles from './TextField.module.css';

export const TextField = (props) => {
  const modifiedPlaceholder = `${props.placeholder}...`;

  const toTyped = (event) => {
    props.toChanged(event.target.value);
  };

  return (
    <div className={styles.field_text}>
      <label>{props.label}</label>
      <input
        onChange={toTyped}
        placeholder={modifiedPlaceholder}
        required={props.required}
      />
    </div>
  );
};
