import styles from "./Select.module.css";

function Select({ text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.select_control}>
      <label htmlFor={name}>{text}:</label>
      <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
        <option>Select an option</option>
      
        {options.map((options) => (
          <option value={options.id} key={options.id}>
            {options.name || options.personName }
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;

// ali em cima, as options viram uma option
//key option.id para deixar ela única
