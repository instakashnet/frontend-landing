import styles from "../../styles/UI.module.scss";
import Cleave from "cleave.js/react";

const Input = ({ currency, name, value, label, onChange }) => {
  return (
    <div className="flex items-center justify-center w-full my-5">
      <div className={styles.calcCurrency}>{currency === 2 ? "Soles" : "Dólares"}</div>
      <div className={styles.calcInput}>
        <label>{label}</label>
        <Cleave name={name} value={value} onChange={onChange} options={{ numeral: true, numeralPositiveOnly: true }} />
        <span>{currency === 2 ? "S/." : "$"}</span>
      </div>
    </div>
  );
};

export default Input;
