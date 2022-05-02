import cls from "classnames";
import React from "react";
import { BiInfoCircle } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import styles from "./Callout.module.scss";

const Callout = ({ className, type, children }) => {
  return (
    <div className={cls(styles.Callout, styles[type], className || "")}>
      <div className={styles.CalloutContent}>
        <BiInfoCircle size={25} className="mr-2" />
        {children}
      </div>
      <button>
        <IoIosClose size={35} />
      </button>
    </div>
  );
};

export default Callout;
