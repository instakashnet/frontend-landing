import React, { useEffect, useState } from "react";
import { XCircle } from "react-feather";
import Modal from "react-modal";
import { PortableText } from "@portabletext/react";

import styles from "./Modal.module.scss";

Modal.setAppElement("div");

export const BaseModal = ({ popup }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (popup) setTimeout(() => setModal(true), 300);
  }, [popup]);

  const onClose = () => setModal(false);

  return popup ? (
    <Modal
      isOpen={modal}
      onRequestClose={onClose}
      className={styles.customModal}
    >
      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.closeModal}>
          <XCircle size={33} />
        </button>
        {popup.isNotif ? (
          <div className={styles.modalBody}>
            <h3>{popup.notifTitle}</h3>
            <PortableText value={popup.description} />
          </div>
        ) : (
          <img src={popup.image} alt={popup.title} />
        )}
      </div>
    </Modal>
  ) : null;
};
