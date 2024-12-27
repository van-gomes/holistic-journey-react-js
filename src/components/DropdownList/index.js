import styles from "./DropdownList.module.css";

export const DropdownList = (props) => {
  return (
    <div className={styles.lista_suspensa}>
      <label>{props.label}</label>
      <select required={props.required}>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}