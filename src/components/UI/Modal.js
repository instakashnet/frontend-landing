import React, { useEffect, useState } from "react";
import { XCircle } from "react-feather";
import Modal from "react-modal";
import { PortableText } from "@portabletext/react";

import styles from "./Modal.module.scss";

Modal.setAppElement("div");

export const BaseModal = ({ popup }) => {
  const [modal, setModal] = useState(false);

  console.log(popup);

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
            {/* <p>
              Estimado Cliente, agradecemos por su confianza. Notificamos que en estos momentos nuestro servidores se encuentran realizando <b>un proceso de mantenimiento</b>{' '}
              programado hasta las 4PM. Debido a ello, las operaciones ingresadas desde las <p>2PM hasta las 4PM</p> no podrán ser procesadas hasta luego de este horario.
            </p>
            <p className='font-bold mt-6'>Agradecemos su comprensión.</p> */}
          </div>
        ) : (
          <img src={popup.image} alt={popup.title} />
        )}
      </div>
    </Modal>
  ) : null;
};
