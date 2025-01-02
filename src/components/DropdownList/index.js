import styles from './DropdownList.module.css';

export const DropdownList = (props) => {
  return (
    <div className={styles.lista_suspensa}>
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={(evento) => props.toChanged(evento.target.value)}
        required={props.required}
      >
        {props.itens &&
          props.itens.length > 0 &&
          props.itens.map((item) => <option key={item}>{item}</option>)}
      </select>
    </div>
  );
};
