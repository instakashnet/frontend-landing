import React from "react";
import { XCircle } from "react-feather";
import Modal from "react-modal";

import styles from "./Modal.module.scss";

Modal.setAppElement("div");

export const BaseModal = ({ children, onClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className={styles.customModal}>
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeModal}>
          <XCircle size={33} />
        </button>
        {children}
      </div>
    </Modal>
  );
};
