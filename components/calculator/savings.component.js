import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./savings.module.scss";

const Savings = ({ type, receiveAmount }) => {
  const [savingsAmount, setSavingsAmount] = useState("0.00");

  useEffect(() => {
    if (+receiveAmount > 0) {
      setSavingsAmount((+receiveAmount * 0.0045).toFixed(2));
    }
  }, [type, receiveAmount]);

  return (
    <div className={styles.SavingsWrapper}>
      <Image src="/images/icons/coins.svg" alt="ahorro promedio de cambio" width={30} height={30} />
      <p className="ml-2">
        <strong>Ahorro promedio:</strong> {type === "buy" ? "S/." : "$"} {savingsAmount}
      </p>
    </div>
  );
};

export default Savings;
