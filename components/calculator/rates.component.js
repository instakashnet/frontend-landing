import cls from "classnames";
import React from "react";
import styles from "./rates.module.scss";

const Rates = ({ rates, type }) => {
  return (
    <div className={styles.RatesWrapper}>
      <p className={cls(styles.Price, type === "buy" ? "opacity-100" : "opacity-40")}>
        Compra: <span>{rates.buy.toFixed(4)}</span>
      </p>
      <div className={styles.Division} />
      <p className={cls(styles.Price, type === "sell" ? "opacity-100" : "opacity-40")}>
        Venta: <span>{rates.sell.toFixed(4)}</span>
      </p>
    </div>
  );
};

export default Rates;
