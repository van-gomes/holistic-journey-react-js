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
        value={props.value}
        onChange={toTyped}
        placeholder={modifiedPlaceholder}
        required={props.required}
      />
    </div>
  );
};
