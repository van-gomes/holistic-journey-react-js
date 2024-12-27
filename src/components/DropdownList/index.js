import styles from "./DropdownList.module.css";

export const DropdownList = ({ label, required, itens }) => {
  return (
    <div className={styles.lista_suspensa}>
      <label>{label}</label>
      <select required={required}>
        {itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
}