import styles from "./DropdownList.module.css";

export const DropdownList = (props) => {
  return (
    <div className={styles.dropdown_List}>
      <label>{props.label}</label>
      <select
        value={props.value}
        onChange={(event) => props.toChanged(event.target.value)}
        required={props.required}
      >
        <option value="">{props.placeholder}</option>
        {props.itens &&
          props.itens.length > 0 &&
          props.itens.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};
