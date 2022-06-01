import cls from "classnames";
import React, { useState } from "react";
import { BiInfoCircle } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import styles from "./Callout.module.scss";

const Callout = ({ className, type, children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCloseCallout = () => setIsOpen(false);

  return isOpen ? (
    <div className={cls(styles.Callout, styles[type], className || "")}>
      <div className={styles.CalloutContent}>
        <BiInfoCircle size={25} className="mr-2" />
        {children}
      </div>
      <button type="button" onClick={handleCloseCallout}>
        <IoIosClose size={35} />
      </button>
    </div>
  ) : null;
};

export default Callout;
