import styles from "./DropdownList.module.css";

export const DropdownList = ({ label, itens, value, required, toChanged }) => {
  return (
    <div className={styles.lista_suspensa}>
      <label>{label}</label>
      <select
        value={value}
        onChange={(evento) => toChanged(value)}
        required={required}
      >
        {itens &&
          itens.length > 0 &&
          itens.map((item) => <option value={item} key={item}>{item}</option>)}
      </select>
    </div>
  );
};
