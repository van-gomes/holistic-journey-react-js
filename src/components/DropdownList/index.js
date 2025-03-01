import styles from "./DropdownList.module.css";

export const DropdownList = ({
  label,
  itens,
  value,
  required,
  toChanged,
  placeholder,
}) => {
  return (
    <div className={styles.lista_suspensa}>
      <label>{label}</label>
      <select
        value={value}
        onChange={(evento) => toChanged(evento.target.value)}
        required={required}
      >
        <option value="">{placeholder}</option>
        {itens &&
          itens.length > 0 &&
          itens.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};
