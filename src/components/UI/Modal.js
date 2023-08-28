import React, { useEffect, useState } from "react";
import { XCircle } from "react-feather";
import Modal from "react-modal";
import { PortableText } from "@portabletext/react";

import styles from "./Modal.module.scss";

Modal.setAppElement("div");

export const BaseModal = ({ popup }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (popup && popup.active) setTimeout(() => setModal(true), 300);
  }, [popup]);

  const onClose = () => setModal(false);

  const ModalContent = () => (
    <>
      <button onClick={onClose} className={styles.closeModal}>
        <XCircle size={33} />
      </button>
      {popup.notifTitle ? (
        <div className={styles.modalBody}>
          <h3>{popup.notifTitle}</h3>
          <PortableText value={popup.description} />
        </div>
      ) : (
        <img src={popup.image} alt={popup.title} />
      )}
    </>
  );

  return (
    <Modal isOpen={modal} onRequestClose={onClose} className={styles.customModal}>
      {popup?.link ? (
        <a href={popup.link} target='_blank' rel='noopener noreferrer' className={styles.modalContent}>
          <ModalContent />
        </a>
      ) : (
        <div className={styles.modalContent}>
          <ModalContent />
        </div>
      )}
    </Modal>
  );
};
