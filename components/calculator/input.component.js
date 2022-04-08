import Cleave from "cleave.js/react";
import styles from "./Input.module.scss";

const Input = ({ currency, name, value, label, onChange }) => {
  return (
    <div className="w-full my-3">
      <div className={styles.InputWrapper}>
        <label>{`${label} ${currency === 2 ? "soles" : "dólares"}`}</label>
        <Cleave name={name} value={value} onChange={onChange} options={{ numeral: true, numeralPositiveOnly: true }} />
        <span>{currency === 2 ? "S/." : "$"}</span>
      </div>
    </div>
  );
};

export default Input;
