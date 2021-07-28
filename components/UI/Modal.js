import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { XCircle } from "react-feather";

Modal.setAppElement("div");

export const BaseModal = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const closeModal = () => setIsOpen(false);

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} className="custom-modal modal-background">
      <div className="modal-content">
        <button onClick={closeModal} className="close-modal">
          <XCircle size={30} />
        </button>
        {children}
      </div>
      <div className="modal-footer">
        <img src="/images/logo.svg" alt="Instakash" />
      </div>
    </Modal>
  );
};
